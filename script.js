// BKBTC白皮书网站交互功能
class WhitePaperApp {
    constructor() {
        this.currentChapter = null;
        this.init();
    }

    init() {
        // 等待DOM加载完成
        document.addEventListener('DOMContentLoaded', () => {
            this.generateTableOfContents();
            this.bindEvents();
            this.handleInitialRoute();
        });
    }

    // 生成目录
    generateTableOfContents() {
        const tocList = document.getElementById('tocList');
        if (!tocList) return;

        // 清空现有内容
        tocList.innerHTML = '';

        // 获取当前语言的菜单结构
        const menuStructure = window.i18nManager ? window.i18nManager.getMenuStructure() : whitePaperData.menuStructure;
        const ui = window.i18nManager ? i18nConfig.ui[window.i18nManager.currentLanguage] : { home: '首页' };

        // 添加首页链接到最前面
        const homeItem = this.createTocItem('home', ui.home || '首页', 0, true);
        tocList.appendChild(homeItem);

        // 生成三级目录结构
        if (menuStructure) {
            menuStructure.forEach(item => {
                const tocItem = this.createMultiLevelTocItem(item);
                tocList.appendChild(tocItem);
            });
        }
    }

    // 创建多级目录项
    createMultiLevelTocItem(item) {
        const li = document.createElement('li');
        li.className = `toc-item level-${item.level}`;
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = `toc-link level-${item.level}`;
        link.dataset.itemId = item.id;
        link.dataset.level = item.level;
        link.textContent = item.title;
        
        // 如果有子项，添加展开/折叠功能
        if (item.children && item.children.length > 0) {
            link.classList.add('expandable');
            if (item.expanded) {
                link.classList.add('expanded');
            }
        }
        
        li.appendChild(link);
        
        // 创建子菜单
        if (item.children && item.children.length > 0) {
            const submenu = document.createElement('ul');
            submenu.className = 'toc-submenu';
            if (item.expanded) {
                submenu.classList.add('expanded');
            }
            
            item.children.forEach(child => {
                const childItem = this.createMultiLevelTocItem(child);
                submenu.appendChild(childItem);
            });
            
            li.appendChild(submenu);
        }
        
        return li;
    }

    // 创建目录项（保留兼容性）
    createTocItem(id, title, level = 0, isHome = false) {
        const li = document.createElement('li');
        li.className = 'toc-item';
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'toc-link';
        link.dataset.chapterId = id;
        link.textContent = title;
        
        if (isHome) {
            link.classList.add('home-link');
        }
        
        li.appendChild(link);
        return li;
    }

    // 绑定事件
    bindEvents() {
        // 目录点击事件
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('toc-link')) {
                e.preventDefault();
                
                // 处理首页链接
                if (e.target.dataset.chapterId === 'home') {
                    this.showWelcomePage();
                    this.updateActiveLink(e.target);
                    // 移动端菜单关闭逻辑
                    setTimeout(closeMobileMenu, 100);
                    return;
                }
                
                // 处理多级目录
                if (e.target.dataset.itemId) {
                    const itemId = e.target.dataset.itemId;
                    const level = parseInt(e.target.dataset.level);
                    
                    // 查找对应的项目，检查是否有contentId
                    const findItem = (items) => {
                        for (let item of items) {
                            if (item.id === itemId) {
                                return item;
                            }
                            if (item.children) {
                                const found = findItem(item.children);
                                if (found) return found;
                            }
                        }
                        return null;
                    };
                    
                    const item = findItem(whitePaperData.menuStructure || []);
                    
                    // 如果是可展开的项目，优先处理展开/折叠
                    if (e.target.classList.contains('expandable')) {
                        // 总是先展开/折叠子目录
                        this.toggleMenuItem(e.target, itemId, level);
                        
                        // 如果有内容，同时显示内容
                        if (item && item.contentId) {
                            this.showContentByItemId(itemId);
                            this.updateActiveLink(e.target);
                            setTimeout(closeMobileMenu, 100);
                        }
                    } else if (item && item.contentId) {
                        // 非可展开项目，直接显示内容
                        this.showContentByItemId(itemId);
                        this.updateActiveLink(e.target);
                        setTimeout(closeMobileMenu, 100);
                    }
                } else {
                    // 兼容旧的章节ID
                    const chapterId = e.target.dataset.chapterId;
                    if (chapterId) {
                        this.showChapter(chapterId);
                        this.updateActiveLink(e.target);
                        // 移动端菜单关闭逻辑
                        setTimeout(closeMobileMenu, 100);
                    }
                }
            }
        });

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.showWelcomePage();
            }
        });

        // URL hash 变化监听
        window.addEventListener('hashchange', () => {
            this.handleRouteChange();
        });
    }

    // 切换菜单项展开/折叠状态
    toggleMenuItem(linkElement, itemId, level) {
        const isExpanded = linkElement.classList.contains('expanded');
        
        // 如果是一级或二级目录，先折叠同级的其他项目
        if (level <= 2) {
            this.collapseSiblings(linkElement, level);
        }
        
        // 切换当前项目状态
        if (isExpanded) {
            this.collapseItem(linkElement);
        } else {
            this.expandItem(linkElement);
        }
        
        // 更新数据结构中的状态
        this.updateMenuState(itemId, !isExpanded);
    }

    // 展开菜单项
    expandItem(linkElement) {
        linkElement.classList.add('expanded');
        const submenu = linkElement.parentElement.querySelector('.toc-submenu');
        if (submenu) {
            submenu.classList.add('expanded');
        }
    }

    // 折叠菜单项
    collapseItem(linkElement) {
        linkElement.classList.remove('expanded');
        const submenu = linkElement.parentElement.querySelector('.toc-submenu');
        if (submenu) {
            submenu.classList.remove('expanded');
        }
    }

    // 折叠同级的其他项目
    collapseSiblings(currentLink, level) {
        const currentItem = currentLink.parentElement;
        const parentContainer = currentItem.parentElement;
        
        // 找到所有同级的可展开项目
        const siblings = parentContainer.querySelectorAll(`.toc-item.level-${level} > .toc-link.expandable`);
        
        siblings.forEach(sibling => {
            if (sibling !== currentLink) {
                this.collapseItem(sibling);
                // 递归折叠子项目
                this.collapseAllChildren(sibling);
            }
        });
    }

    // 递归折叠所有子项目
    collapseAllChildren(linkElement) {
        const submenu = linkElement.parentElement.querySelector('.toc-submenu');
        if (submenu) {
            const childLinks = submenu.querySelectorAll('.toc-link.expandable');
            childLinks.forEach(childLink => {
                this.collapseItem(childLink);
                this.collapseAllChildren(childLink);
            });
        }
    }

    // 更新菜单状态
    updateMenuState(itemId, expanded) {
        const updateItem = (items) => {
            items.forEach(item => {
                if (item.id === itemId) {
                    item.expanded = expanded;
                } else if (item.children) {
                    updateItem(item.children);
                }
            });
        };
        
        if (whitePaperData.menuStructure) {
            updateItem(whitePaperData.menuStructure);
        }
    }

    // 根据项目ID显示内容
    showContentByItemId(itemId) {
        // 查找对应的内容ID
        const findContentId = (items) => {
            for (let item of items) {
                if (item.id === itemId && item.contentId) {
                    return item.contentId;
                }
                if (item.children) {
                    const found = findContentId(item.children);
                    if (found) return found;
                }
            }
            return null;
        };
        
        const contentId = findContentId(whitePaperData.menuStructure || []);
        if (contentId) {
            this.showChapter(contentId);
        }
    }

    // 显示欢迎页面
    showWelcomePage() {
        const welcomeContent = document.getElementById('welcome-content');
        const chapterContent = document.getElementById('chapter-content');
        
        if (welcomeContent && chapterContent) {
            welcomeContent.classList.add('active');
            chapterContent.classList.remove('active');
            chapterContent.innerHTML = '';
        }
        
        this.currentChapter = null;
        this.updatePageTitle('BKBTC白皮书');
        
        // 清除URL hash
        this.updateUrlHash('home');
        
        // 更新活动链接
        const homeLink = document.querySelector('.toc-link[data-chapter-id="home"]');
        if (homeLink) {
            this.updateActiveLink(homeLink);
        }
    }

    // 显示指定章节
    showChapter(chapterId) {
        // 获取当前语言的章节数据
        const chapters = window.i18nManager ? window.i18nManager.getChapters() : whitePaperData.chapters;
        const chapter = chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        const welcomeContent = document.getElementById('welcome-content');
        const chapterContent = document.getElementById('chapter-content');
        
        if (welcomeContent && chapterContent) {
            welcomeContent.classList.remove('active');
            chapterContent.classList.add('active');
            
            // 获取当前语言的UI文本
            const ui = window.i18nManager ? i18nConfig.ui[window.i18nManager.currentLanguage] : { backToHome: '← 返回首页' };
            const title = window.i18nManager ? i18nConfig.ui[window.i18nManager.currentLanguage].title : 'BKBTC白皮书';
            
            // 渲染章节内容
            chapterContent.innerHTML = `
                <div class="chapter-header">
                    <h1 class="chapter-title">${chapter.title}</h1>
                    <div class="chapter-meta">
                        <button class="back-to-home" onclick="app.showWelcomePage()">
                            ${ui.backToHome || '← 返回首页'}
                        </button>
                        <button class="copy-link-btn" onclick="app.copyChapterLink('${chapterId}')" title="复制本章节链接">
                            📋 复制链接
                        </button>
                    </div>
                </div>
                <div class="chapter-body">
                    ${chapter.content}
                </div>
                <div class="chapter-navigation">
                    ${this.generateChapterNavigation(chapterId)}
                </div>
            `;
        }
        
        this.currentChapter = chapterId;
        this.updatePageTitle(`${chapter.title} - ${title}`);
        
        // 更新URL hash
        this.updateUrlHash(chapterId);
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 扁平化目录结构，获取所有有内容的项目
    flattenMenuStructure(items = null, result = []) {
        if (!items) {
            items = window.i18nManager ? window.i18nManager.getMenuStructure() : whitePaperData.menuStructure;
        }
        
        items.forEach(item => {
            if (item.contentId) {
                result.push({
                    id: item.id,
                    title: item.title,
                    level: item.level,
                    contentId: item.contentId
                });
            }
            if (item.children && item.children.length > 0) {
                this.flattenMenuStructure(item.children, result);
            }
        });
        return result;
    }

    // 找到同级目录项目
    findSiblingItems(currentItemId) {
        const findItemAndSiblings = (items, targetId, parentLevel = null) => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                
                // 如果找到目标项目
                if (item.id === targetId) {
                    // 找到同级的所有有内容的项目
                    const siblings = items.filter(sibling => 
                        sibling.contentId && sibling.level === item.level
                    );
                    const currentIndex = siblings.findIndex(s => s.id === targetId);
                    return {
                        siblings,
                        currentIndex,
                        currentLevel: item.level
                    };
                }
                
                // 递归搜索子项目
                if (item.children && item.children.length > 0) {
                    const result = findItemAndSiblings(item.children, targetId, item.level);
                    if (result) return result;
                }
            }
            return null;
        };

        return findItemAndSiblings(whitePaperData.menuStructure, currentItemId);
    }



    // 生成同级目录导航（已隐藏）
    generateChapterNavigation(currentChapterId) {
        // 隐藏底部快捷跳转功能
        return '<div class="nav-buttons"></div>';
    }

    // 更新活动链接
    updateActiveLink(activeLink) {
        // 移除所有活动状态
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // 添加活动状态到当前链接
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // 更新页面标题
    updatePageTitle(title) {
        document.title = title;
    }

    // 搜索功能（可扩展）
    searchContent(query) {
        if (!query.trim()) return [];
        
        const results = [];
        const searchTerm = query.toLowerCase();
        
        whitePaperData.chapters.forEach(chapter => {
            if (chapter.title.toLowerCase().includes(searchTerm) || 
                chapter.content.toLowerCase().includes(searchTerm)) {
                results.push({
                    chapter: chapter,
                    type: chapter.title.toLowerCase().includes(searchTerm) ? 'title' : 'content'
                });
            }
        });
        
        return results;
    }

    // 获取当前章节信息
    getCurrentChapterInfo() {
        if (!this.currentChapter) return null;
        
        return whitePaperData.chapters.find(ch => ch.id === this.currentChapter);
    }

    // 处理初始路由
    handleInitialRoute() {
        const hash = window.location.hash.slice(1); // 移除 # 符号
        if (hash) {
            this.navigateToChapter(hash);
        } else {
            this.showWelcomePage();
        }
    }

    // 处理路由变化
    handleRouteChange() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            this.navigateToChapter(hash);
        } else {
            this.showWelcomePage();
        }
    }

    // 导航到指定章节
    navigateToChapter(chapterId) {
        // 首先尝试直接显示章节
        const chapters = window.i18nManager ? window.i18nManager.getChapters() : whitePaperData.chapters;
        const chapter = chapters.find(ch => ch.id === chapterId);
        
        if (chapter) {
            this.showChapter(chapterId);
            // 更新活动链接
            const link = document.querySelector(`[data-chapter-id="${chapterId}"]`) || 
                        document.querySelector(`[data-item-id="${chapterId}"]`);
            if (link) {
                this.updateActiveLink(link);
                // 如果是多级菜单项，展开其父级
                this.expandParentItems(chapterId);
            }
            return;
        }

        // 如果没有找到直接的章节，尝试通过菜单结构查找
        const menuStructure = window.i18nManager ? window.i18nManager.getMenuStructure() : whitePaperData.menuStructure;
        const item = this.findItemInMenu(menuStructure, chapterId);
        
        if (item && item.contentId) {
            this.showContentByItemId(chapterId);
            const link = document.querySelector(`[data-item-id="${chapterId}"]`);
            if (link) {
                this.updateActiveLink(link);
                this.expandParentItems(chapterId);
            }
        } else {
            // 如果找不到对应的章节，显示欢迎页面
            this.showWelcomePage();
        }
    }

    // 在菜单结构中查找项目
    findItemInMenu(items, targetId) {
        for (let item of items) {
            if (item.id === targetId) {
                return item;
            }
            if (item.children) {
                const found = this.findItemInMenu(item.children, targetId);
                if (found) return found;
            }
        }
        return null;
    }

    // 展开父级菜单项
    expandParentItems(targetId) {
        const menuStructure = window.i18nManager ? window.i18nManager.getMenuStructure() : whitePaperData.menuStructure;
        const path = this.findItemPath(menuStructure, targetId);
        
        // 展开路径上的所有父级项目
        path.forEach(itemId => {
            const link = document.querySelector(`[data-item-id="${itemId}"]`);
            if (link && link.classList.contains('expandable') && !link.classList.contains('expanded')) {
                const level = parseInt(link.dataset.level);
                this.toggleMenuItem(link, itemId, level);
            }
        });
    }

    // 查找到目标项目的路径
    findItemPath(items, targetId, currentPath = []) {
        for (let item of items) {
            const newPath = [...currentPath, item.id];
            
            if (item.id === targetId) {
                return newPath;
            }
            
            if (item.children) {
                const found = this.findItemPath(item.children, targetId, newPath);
                if (found.length > 0) return found;
            }
        }
        return [];
    }

    // 更新URL hash（不触发hashchange事件）
    updateUrlHash(chapterId) {
        if (chapterId && chapterId !== 'home') {
            history.replaceState(null, null, `#${chapterId}`);
        } else {
            history.replaceState(null, null, window.location.pathname);
        }
    }

    // 生成章节的直接链接URL
    generateChapterUrl(chapterId) {
        if (window.CONFIG) {
            return window.CONFIG.getChapterUrl(chapterId);
        }
        // 降级方案
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}#${chapterId}`;
    }

    // 复制章节链接到剪贴板
    async copyChapterLink(chapterId) {
        const url = this.generateChapterUrl(chapterId);
        
        try {
            await navigator.clipboard.writeText(url);
            
            // 显示成功提示
            this.showCopySuccess();
        } catch (err) {
            // 降级方案：使用传统方法复制
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            this.showCopySuccess();
        }
    }

    // 显示复制成功提示
    showCopySuccess() {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.className = 'copy-success-toast';
        toast.textContent = '✅ 链接已复制到剪贴板';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // 显示动画
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 10);
        
        // 3秒后移除
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

// 创建应用实例
const app = new WhitePaperApp();

// 全局函数，供多语言管理器调用
window.generateTOC = function() {
    if (app) {
        app.generateTableOfContents();
    }
};

window.showChapter = function(chapterId) {
    if (app) {
        app.showChapter(chapterId);
    }
};

// 生成章节直接链接的全局函数
window.getChapterUrl = function(chapterId) {
    if (window.CONFIG) {
        return window.CONFIG.getChapterUrl(chapterId);
    }
    if (app) {
        return app.generateChapterUrl(chapterId);
    }
    return window.location.origin + window.location.pathname + '#' + chapterId;
};

// 全局工具函数
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printPage() {
    window.print();
}

// 响应式处理
function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.content-area');
    
    if (window.innerWidth <= 768) {
        // 移动端处理
        if (sidebar && mainContent) {
            sidebar.classList.add('mobile');
            mainContent.classList.add('mobile');
        }
    } else {
        // 桌面端处理
        if (sidebar && mainContent) {
            sidebar.classList.remove('mobile');
            mainContent.classList.remove('mobile');
        }
    }
}

// 关闭移动端菜单
function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobileOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('show');
    }
}

// 绑定目录链接的移动端关闭逻辑
// 移动端菜单控制
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobileOverlay');
    
    if (mobileMenuBtn && sidebar && overlay) {
        // 菜单按钮点击事件
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('show');
        });
        
        // 覆盖层点击事件 - 关闭菜单
        overlay.addEventListener('click', closeMobileMenu);
        
        // ESC键关闭菜单
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
        
        // 目录链接事件已在主事件处理器中处理
    }
}

// 监听窗口大小变化
window.addEventListener('resize', handleResize);
window.addEventListener('load', function() {
    handleResize();
    initMobileMenu();
});