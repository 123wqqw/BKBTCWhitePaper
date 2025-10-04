# 🚀 BKBTC白皮书 GitHub Pages 部署指南

## 快速部署步骤

### 1. 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称设置为: `BKBTCWhitePaper`
4. 设置为 Public（GitHub Pages 免费版需要公开仓库）
5. 不要勾选 "Add a README file"（我们已经有了）
6. 点击 "Create repository"

### 2. 上传代码到GitHub

在项目目录中运行以下命令：

```bash
# 初始化git仓库（如果还没有）
git init

# 添加远程仓库地址（替换为您的用户名）
git remote add origin https://github.com/[您的用户名]/BKBTCWhitePaper.git

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: BKBTC Whitepaper"

# 推送到GitHub
git push -u origin main
```

### 3. 启用GitHub Pages

#### 方法一：自动部署（推荐）
项目已包含GitHub Actions配置，推送代码后会自动部署。

#### 方法二：手动设置
1. 进入GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "Deploy from a branch"
5. 选择 "main" 分支
6. 文件夹选择 "/ (root)"
7. 点击 "Save"

### 4. 访问您的网站

部署完成后，您的网站将在以下地址可用：

```
https://[您的GitHub用户名].github.io/BKBTCWhitePaper/
```

例如，如果您的用户名是 `john`，那么地址就是：
```
https://john.github.io/BKBTCWhitePaper/
```

## 🛠️ 使用部署脚本

为了简化后续更新，您可以使用提供的部署脚本：

```bash
# 运行部署脚本
./deploy.sh
```

这个脚本会：
1. 添加所有更改的文件
2. 提交更改
3. 推送到GitHub
4. 自动触发重新部署

## 📝 更新内容

当您需要更新白皮书内容时：

1. 修改相应的文件（如 `data.js`、`content-en.js` 等）
2. 运行部署脚本：`./deploy.sh`
3. 等待几分钟，更改将自动反映在网站上

## 🔧 自定义域名（可选）

如果您有自己的域名，可以：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名（如：`whitepaper.yourdomain.com`）
3. 在您的域名DNS设置中添加CNAME记录指向 `[用户名].github.io`

## 📱 移动端优化

网站已经完全响应式设计，在手机和平板上都有良好的显示效果。

## 🌐 多语言支持

网站支持中英文切换，用户可以通过右上角的语言切换器选择语言。

## 🚨 常见问题

### 网站显示404错误
- 检查仓库名称是否正确
- 确保GitHub Pages已启用
- 等待几分钟让部署完成

### 更改没有反映在网站上
- 检查GitHub Actions是否成功运行
- 清除浏览器缓存
- 等待几分钟让CDN更新

### 样式或脚本加载失败
- 确保所有文件都已正确上传
- 检查文件路径是否正确
- 查看浏览器控制台的错误信息

## 📞 技术支持

如果遇到问题，请：
1. 检查GitHub Actions的运行日志
2. 查看浏览器开发者工具的控制台
3. 在GitHub仓库中创建Issue

---

🎉 恭喜！您的BKBTC白皮书现在已经可以在全世界访问了！