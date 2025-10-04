#!/bin/bash

# BKBTC白皮书 GitHub Pages 部署脚本

echo "🚀 开始部署 BKBTC 白皮书到 GitHub Pages..."

# 检查是否在git仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误: 当前目录不是git仓库"
    echo "请先运行: git init"
    exit 1
fi

# 添加所有文件到git
echo "📁 添加文件到git..."
git add .

# 提交更改
echo "💾 提交更改..."
read -p "请输入提交信息 (默认: Update whitepaper): " commit_message
commit_message=${commit_message:-"Update whitepaper"}
git commit -m "$commit_message"

# 推送到GitHub
echo "⬆️ 推送到GitHub..."
git push origin main

echo "✅ 部署完成!"
echo ""
echo "🌐 您的网站将在几分钟后在以下地址可用:"
echo "https://[您的GitHub用户名].github.io/BKBTCWhitePaper/"
echo ""
echo "📝 如果这是首次部署，请确保在GitHub仓库设置中启用Pages功能"