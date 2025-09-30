import markdown
import re

with open('/Users/a8833/Documents/GitHub/BKBTCWhitePaper/whitepaper.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

md = markdown.Markdown(extensions=['tables', 'toc'])
html_content = md.convert(md_content)
toc = md.toc

with open('/Users/a8833/Documents/GitHub/BKBTCWhitePaper/index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Inject TOC
index_html = index_html.replace('<ul id="toc"></ul>', toc)

# Inject content
start_str = '<div id="main-content">'
end_str = '</div>'
start_pos = index_html.find(start_str)
end_pos = index_html.rfind(end_str, 0, index_html.find('</body>'))

if start_pos != -1 and end_pos != -1 and start_pos < end_pos:
    part1 = index_html[:start_pos + len(start_str)]
    part2 = index_html[end_pos:]
    index_html = part1 + '\n' + html_content + '\n' + part2

with open('/Users/a8833/Documents/GitHub/BKBTCWhitePaper/index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)