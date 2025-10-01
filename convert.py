import markdown
from markdown.extensions.toc import TocExtension
import re
import os

def slugify(value, separator):
    value = re.sub(r'[^\w\s-]', '', value, flags=re.UNICODE).strip().lower()
    return re.sub(r'[-\s]+', separator, value, flags=re.UNICODE)

html_template = '''<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        body {{
            font-family: sans-serif;
            margin: 0;
            display: flex;
        }}
        #sidebar {{
            width: 250px;
            background: #f4f4f4;
            padding: 20px;
            height: 100vh;
            position: fixed;
            overflow-y: auto;
            transition: transform 0.3s ease;
            z-index: 999;
        }}
        #main-content {{
            margin-left: 270px;
            padding: 20px;
            transition: margin-left 0.3s ease;
        }}
        #sidebar ul {{
            list-style-type: none;
            padding: 0;
        }}
        #sidebar ul li a {{
            text-decoration: none;
            color: #333;
            display: block;
            padding: 5px 0;
        }}
        #sidebar ul li a.active {{
            background-color: #ddd;
            font-weight: bold;
        }}
        #menu-button {{
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
        }}
        #lang-switcher {{
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 1000;
        }}
        .dropdown {{
            position: relative;
            display: inline-block;
        }}
        .dropbtn {{
            background-color: #333;
            color: white;
            padding: 10px 15px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }}
        .dropdown-content {{
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 5px;
            overflow: hidden;
        }}
        .dropdown-content a {{
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }}
        .dropdown-content a:hover {{background-color: #f1f1f1}}
        /* .dropdown:hover .dropdown-content {{
            display: block;
        }} */
        .arrow {{
            display: inline-block;
            margin-left: 5px;
            transition: transform 0.2s;
        }}
        /* .dropdown:hover .arrow {{
            transform: rotate(180deg);
        }} */
        @media (max-width: 768px) {{
            #sidebar {{
                transform: translateX(-100%);
            }}
            #sidebar.open {{
                transform: translateX(0);
            }}
            #main-content {{
                margin-left: 0;
                padding: 15px;
                width: 100%;
                box-sizing: border-box;
            }}
            #menu-button {{
                display: block;
            }}
        }}
    </style>
</head>
<body>
    <div id="lang-switcher">
        LANG_SWITCHER_PLACEHOLDER
    </div>
    <button id="menu-button">☰</button>
    <div id="sidebar">
        <h2>{toc_title}</h2>
        TOC_PLACEHOLDER
    </div>
    <div id="main-content">
        CONTENT_PLACEHOLDER
    </div>
    <script>
    document.addEventListener('DOMContentLoaded', function () {{
        const links = document.querySelectorAll('#sidebar .toc a');
        const sections = new Map();
        const sidebar = document.getElementById('sidebar');

        links.forEach(link => {{
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {{
                try {{
                    const sectionId = decodeURIComponent(href.substring(1));
                    const section = document.getElementById(sectionId);
                    if (section) {{
                        sections.set(section, link);
                    }}
                }} catch (e) {{
                    console.error('Could not decode URI Component or find section for href: ', href, e);
                }}
            }}
        }});

        const sectionEntries = Array.from(sections.entries());

        function updateActiveLink() {{
            let activeSection = null;
            for (const [section, link] of sectionEntries) {{
                const rect = section.getBoundingClientRect();
                if (rect.top <= 1) {{
                    activeSection = section;
                }} else {{
                    break;
                }}
            }}
            
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {{
                const lastEntry = sectionEntries[sectionEntries.length - 1];
                if (lastEntry) {{
                    activeSection = lastEntry[0];
                }}
            }}

            links.forEach(link => {{
                link.classList.remove('active');
            }});

            if (activeSection) {{
                const activeLink = sections.get(activeSection);
                if (activeLink) {{
                    activeLink.classList.add('active');
                }}
            }} else if (links.length > 0) {{
                links[0].classList.add('active');
            }}
        }}

        window.addEventListener('scroll', updateActiveLink);

        links.forEach(link => {{
            link.addEventListener('click', function(event) {{
                if (window.innerWidth <= 768) {{
                    sidebar.classList.remove('open');
                }}
                setTimeout(() => {{
                    updateActiveLink();
                }}, 50);
            }});
        }});

        updateActiveLink();

        const menuButton = document.getElementById('menu-button');
        menuButton.addEventListener('click', () => {{
            sidebar.classList.toggle('open');
        }});
    }});
    // 语言切换下拉菜单点击显示/隐藏
    document.addEventListener('DOMContentLoaded', function () {{
        const btn = document.getElementById('lang-dropbtn');
        const content = document.getElementById('lang-dropdown-content');
        if (btn && content) {{
            btn.addEventListener('click', function(e) {{
                e.stopPropagation();
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }});
            document.addEventListener('click', function() {{
                content.style.display = 'none';
            }});
            content.addEventListener('click', function(e) {{
                e.stopPropagation();
            }});
        }}
    }});
    </script>
</body>
</html>'''

LANGUAGES = {
    "zh": {
        "file": "whitepaper.zh.md",
        "title": "BKBTC 白皮书",
        "toc_title": "目录",
        "lang_name": "中文"
    },
    "en": {
        "file": "whitepaper.en.md",
        "title": "BKBTC White Paper",
        "toc_title": "Table of Contents",
        "lang_name": "English"
    },
    "ko": {
        "file": "whitepaper.ko.md",
        "title": "BKBTC 백서",
        "toc_title": "목차",
        "lang_name": "한국어"
    },
    "fr": {
        "file": "whitepaper.fr.md",
        "title": "Livre Blanc BKBTC",
        "toc_title": "Table des matières",
        "lang_name": "Français"
    },
    "ja": {
        "file": "whitepaper.ja.md",
        "title": "BKBTC 白書",
        "toc_title": "目次",
        "lang_name": "日本語"
    }
}

def generate_lang_switcher(current_lang):
    current_lang_name = LANGUAGES[current_lang]['lang_name']
    links_html = ""
    for lang, config in LANGUAGES.items():
        links_html += f'<a href="./index.{lang}.html">{config["lang_name"]}</a>'
    return f'''<div class="dropdown" id="lang-dropdown">
        <button class="dropbtn" id="lang-dropbtn">{current_lang_name} <span class="arrow">▼</span></button>
        <div id="lang-dropdown-content" class="dropdown-content">
            {links_html}
        </div>
    </div>'''

for lang, config in LANGUAGES.items():
    with open(config['file'], 'r', encoding='utf-8') as f:
        md_content = f.read()

    md = markdown.Markdown(extensions=['tables', TocExtension(slugify=slugify, permalink=False)])
    html_content = md.convert(md_content)
    toc = md.toc

    lang_switcher = generate_lang_switcher(lang)

    final_html = html_template.format(lang=lang, title=config['title'], toc_title=config['toc_title'])
    final_html = final_html.replace('TOC_PLACEHOLDER', toc)
    final_html = final_html.replace('CONTENT_PLACEHOLDER', html_content)
    final_html = final_html.replace('LANG_SWITCHER_PLACEHOLDER', lang_switcher)

    output_filename = f"index.{lang}.html"
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(final_html)
    
    # Create a redirect from index.html to the default language version
    if lang == "zh":
        with open("index.html", "w", encoding="utf-8") as f:
            f.write(f'''<meta http-equiv="refresh" content="0; url=./index.zh.html" />''')

print("HTML files generated for all languages.")