import markdown
from markdown.extensions.toc import TocExtension
import re

def slugify(value, separator):
    # This slugify function should handle Unicode characters correctly.
    value = re.sub(r'[^\w\s-]', '', value, flags=re.UNICODE).strip().lower()
    return re.sub(r'[-\s]+', separator, value, flags=re.UNICODE)

html_template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BKBTC White Paper</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            display: flex;
        }
        #sidebar {
            width: 250px;
            background: #f4f4f4;
            padding: 20px;
            height: 100vh;
            position: fixed;
            overflow-y: auto;
            transition: transform 0.3s ease;
        }
        #main-content {
            margin-left: 270px;
            padding: 20px;
            transition: margin-left 0.3s ease;
        }
        #sidebar ul {
            list-style-type: none;
            padding: 0;
        }
        #sidebar ul li a {
            text-decoration: none;
            color: #333;
            display: block;
            padding: 5px 0;
        }
        #sidebar ul li a.active {
            background-color: #ddd;
            font-weight: bold;
        }
        #menu-button {
            display: none;
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 1000;
            background: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            border-radius: 5px;
        }
        @media (max-width: 768px) {
            #sidebar {
                transform: translateX(-100%);
            }
            #sidebar.open {
                transform: translateX(0);
            }
            #main-content {
                margin-left: 0;
                padding: 15px;
                width: 100%;
                box-sizing: border-box;
            }
            #menu-button {
                display: block;
            }
        }
    </style>
</head>
<body>
    <button id="menu-button">☰</button>
    <div id="sidebar">
        <h2>目录</h2>
        TOC_PLACEHOLDER
    </div>
    <div id="main-content">
        CONTENT_PLACEHOLDER
    </div>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('#sidebar .toc a');
        const sections = new Map();

        // Create a map of sections to their corresponding links
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                try {
                    // Use decodeURIComponent to handle encoded characters in hrefs
                    const sectionId = decodeURIComponent(href.substring(1));
                    const section = document.getElementById(sectionId);
                    if (section) {
                        sections.set(section, link);
                    }
                } catch (e) {
                    console.error('Could not decode URI Component or find section for href: ', href, e);
                }
            }
        });

        const sectionEntries = Array.from(sections.entries());

        function updateActiveLink() {
            let activeSection = null;

            // Find the last section that is at or above the top of the viewport
            for (const [section, link] of sectionEntries) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 1) { // 1px offset for precision
                    activeSection = section;
                } else {
                    // Since sections are ordered, we can break early
                    break;
                }
            }
            
            // Special case for being at the very bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                const lastEntry = sectionEntries[sectionEntries.length - 1];
                if (lastEntry) {
                    activeSection = lastEntry[0];
                }
            }

            // Remove 'active' class from all links
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the link corresponding to the active section
            if (activeSection) {
                const activeLink = sections.get(activeSection);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            } else if (links.length > 0) {
                // If no section is active (e.g., at the very top), activate the first one
                links[0].classList.add('active');
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', updateActiveLink);

        // Add click event listener to sidebar links for immediate feedback
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                // On mobile, close the sidebar after clicking a link
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }

                // Use a short timeout to allow the scroll to happen before updating
                setTimeout(() => {
                    // Force an update after a click
                    updateActiveLink();
                }, 50);
            });
        });

        // Initial check on page load
        updateActiveLink();

        const menuButton = document.getElementById('menu-button');
        const sidebar = document.getElementById('sidebar');

        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    });
    </script>
</body>
</html>'''

with open('whitepaper.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

md = markdown.Markdown(extensions=['tables', TocExtension(slugify=slugify, permalink=False)])
html_content = md.convert(md_content)
toc = md.toc

final_html = html_template.replace('TOC_PLACEHOLDER', toc).replace('CONTENT_PLACEHOLDER', html_content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)