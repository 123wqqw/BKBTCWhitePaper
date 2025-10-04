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
            this.showWelcomePage();
        });
    }

    // 生成目录
    generateTableOfContents() {
        const tocList = document.getElementById('tocList');
        if (!tocList || !whitePaperData) return;

        // 清空现有内容
        tocList.innerHTML = '';

        // 添加首页链接
        const homeItem = this.createTocItem('home', '首页', 0, true);
        tocList.appendChild(homeItem);

        // 生成三级目录结构
        if (whitePaperData.menuStructure) {
            whitePaperData.menuStructure.forEach(item => {
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
                    return;
                }
                
                // 处理多级目录
                if (e.target.dataset.itemId) {
                    const itemId = e.target.dataset.itemId;
                    const level = parseInt(e.target.dataset.level);
                    
                    // 如果是可展开的项目
                    if (e.target.classList.contains('expandable')) {
                        this.toggleMenuItem(e.target, itemId, level);
                    } else {
                        // 如果是叶子节点，显示内容
                        this.showContentByItemId(itemId);
                        this.updateActiveLink(e.target);
                    }
                } else {
                    // 兼容旧的章节ID
                    const chapterId = e.target.dataset.chapterId;
                    if (chapterId) {
                        this.showChapter(chapterId);
                        this.updateActiveLink(e.target);
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
        
        // 更新活动链接
        const homeLink = document.querySelector('.toc-link[data-chapter-id="home"]');
        if (homeLink) {
            this.updateActiveLink(homeLink);
        }
    }

    // 显示指定章节
    showChapter(chapterId) {
        const chapter = whitePaperData.chapters.find(ch => ch.id === chapterId);
        if (!chapter) return;

        const welcomeContent = document.getElementById('welcome-content');
        const chapterContent = document.getElementById('chapter-content');
        
        if (welcomeContent && chapterContent) {
            welcomeContent.classList.remove('active');
            chapterContent.classList.add('active');
            
            // 渲染章节内容
            chapterContent.innerHTML = `
                <div class="chapter-header">
                    <h1 class="chapter-title">${chapter.title}</h1>
                    <div class="chapter-meta">
                        <button class="back-to-home" onclick="app.showWelcomePage()">
                            ← 返回首页
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
        this.updatePageTitle(`${chapter.title} - BKBTC白皮书`);
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 生成章节导航
    generateChapterNavigation(currentChapterId) {
        const currentIndex = whitePaperData.chapters.findIndex(ch => ch.id === currentChapterId);
        const prevChapter = currentIndex > 0 ? whitePaperData.chapters[currentIndex - 1] : null;
        const nextChapter = currentIndex < whitePaperData.chapters.length - 1 ? whitePaperData.chapters[currentIndex + 1] : null;
        
        let navigation = '<div class="nav-buttons">';
        
        if (prevChapter) {
            navigation += `
                <button class="nav-btn prev-btn" onclick="app.showChapter('${prevChapter.id}')">
                    ← ${prevChapter.title}
                </button>
            `;
        }
        
        if (nextChapter) {
            navigation += `
                <button class="nav-btn next-btn" onclick="app.showChapter('${nextChapter.id}')">
                    ${nextChapter.title} →
                </button>
            `;
        }
        
        navigation += '</div>';
        return navigation;
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
}

// 初始化应用
const app = new WhitePaperApp();

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

// 监听窗口大小变化
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);