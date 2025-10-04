# BKBTC 白皮书

## 项目简介

BKBTC白皮书 - 中东数字金融新纪元，全球首支比特币储备银行纳斯达克上市之路。

### 特性

- 🌐 **多语言支持**: 支持中文和英文双语切换
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🎨 **现代UI**: 采用现代化的设计风格
- 🔄 **动态内容**: 支持章节导航和内容动态加载

## 在线访问

### GitHub Pages 地址
```
https://[您的GitHub用户名].github.io/BKBTCWhitePaper/
```

### 本地运行

1. 克隆项目到本地
```bash
git clone https://github.com/[您的GitHub用户名]/BKBTCWhitePaper.git
cd BKBTCWhitePaper
```

2. 启动本地服务器
```bash
# 使用Python
python3 -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

## 部署到GitHub Pages

### 方法一：通过GitHub网页界面

1. 将项目推送到GitHub仓库
2. 进入仓库的 Settings 页面
3. 滚动到 "Pages" 部分
4. 在 "Source" 下选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save"
7. 等待几分钟，您的网站将在 `https://[用户名].github.io/BKBTCWhitePaper/` 可用

### 方法二：使用GitHub Actions自动部署

项目已包含GitHub Actions配置文件，推送到main分支后会自动部署。

## 项目结构

```
BKBTCWhitePaper/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 主要JavaScript逻辑
├── i18n.js            # 国际化配置
├── i18n-manager.js    # 多语言管理器
├── data.js            # 中文内容数据
├── content-en.js      # 英文内容数据
└── README.md          # 项目说明
```

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: 原生CSS，响应式设计
- **多语言**: 自定义国际化解决方案
- **部署**: GitHub Pages

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过GitHub Issues联系我们。