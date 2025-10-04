// 环境配置文件
const CONFIG = {
    // 检测当前环境
    isGitHubPages: window.location.hostname.includes('github.io'),
    isLocalhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // 获取基础URL
    getBaseUrl() {
        if (this.isGitHubPages) {
            return 'https://123wqqw.github.io/BKBTCWhitePaper';
        } else if (this.isLocalhost) {
            return `${window.location.protocol}//${window.location.host}`;
        } else {
            // 其他环境，使用当前域名
            return `${window.location.protocol}//${window.location.host}${window.location.pathname.replace(/\/[^\/]*$/, '')}`;
        }
    },
    
    // 获取完整的章节URL
    getChapterUrl(chapterId) {
        const baseUrl = this.getBaseUrl();
        return `${baseUrl}#${chapterId}`;
    },
    
    // 获取资源URL（用于图片、CSS等静态资源）
    getAssetUrl(assetPath) {
        const baseUrl = this.getBaseUrl();
        return `${baseUrl}/${assetPath}`;
    }
};

// 导出配置对象
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// 全局可用
window.CONFIG = CONFIG;