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
        }
        #main-content {
            margin-left: 270px;
            padding: 20px;
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
    </style>
</head>
<body>
    <div id="sidebar">
        <h2>Table of Contents</h2>
        TOC_PLACEHOLDER
    </div>
    <div id="main-content">
        CONTENT_PLACEHOLDER
    </div>
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