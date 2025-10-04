// 多语言管理器
class I18nManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || i18nConfig.defaultLanguage;
        this.currentMenuStructure = null;
        this.currentChapters = null;
        this.init();
    }

    // 获取存储的语言设置
    getStoredLanguage() {
        try {
            return localStorage.getItem('bkbtc-language');
        } catch (e) {
            return null;
        }
    }

    // 存储语言设置
    setStoredLanguage(lang) {
        try {
            localStorage.setItem('bkbtc-language', lang);
        } catch (e) {
            console.warn('无法存储语言设置');
        }
    }

    // 初始化
    init() {
        this.loadLanguageData();
        this.updateUI();
        this.bindEvents();
    }

    // 加载语言数据
    loadLanguageData() {
        // 加载菜单结构
        this.currentMenuStructure = i18nConfig.menuStructure[this.currentLanguage];
        
        // 加载章节内容
        if (this.currentLanguage === 'en') {
            this.currentChapters = contentEn;
        } else {
            this.currentChapters = whitePaperData.chapters;
        }
    }

    // 更新UI文本
    updateUI() {
        const ui = i18nConfig.ui[this.currentLanguage];
        
        // 更新页面标题
        document.title = ui.title;
        document.documentElement.lang = this.currentLanguage;
        
        // 更新语言切换器
        this.updateLanguageSwitcher();
        
        // 更新欢迎页面
        const welcomeTitle = document.getElementById('welcome-title');
        const welcomeSubtitle = document.getElementById('welcome-subtitle');
        const welcomeTagline = document.getElementById('welcome-tagline');
        const welcomeInstruction = document.getElementById('welcome-instruction');
        
        if (welcomeTitle) welcomeTitle.textContent = ui.title;
        if (welcomeSubtitle) welcomeSubtitle.textContent = ui.subtitle;
        if (welcomeTagline) welcomeTagline.textContent = ui.tagline;
        if (welcomeInstruction) {
            welcomeInstruction.textContent = this.currentLanguage === 'en' 
                ? 'Please select a chapter from the table of contents on the left.'
                : '请从左侧目录中选择您想要查看的章节。';
        }
        
        // 更新目录标题
        const tocTitle = document.getElementById('toc-title');
        if (tocTitle) tocTitle.textContent = ui.tableOfContents;
    }

    // 更新语言切换器
    updateLanguageSwitcher() {
        const languageFlag = document.getElementById('languageFlag');
        const languageName = document.getElementById('languageName');
        const languageOptions = document.querySelectorAll('.language-option');
        
        if (languageFlag && languageName) {
            const currentLangConfig = i18nConfig.supportedLanguages[this.currentLanguage];
            languageFlag.textContent = currentLangConfig.flag;
            languageName.textContent = currentLangConfig.name;
        }
        
        // 更新选项的激活状态
        languageOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            if (lang === this.currentLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }



    // 绑定事件
    bindEvents() {
        // 语言切换器事件
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        
        if (languageButton && languageDropdown) {
            // 点击按钮切换下拉菜单
            languageButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = languageDropdown.classList.contains('open');
                if (isOpen) {
                    this.closeLanguageDropdown();
                } else {
                    this.openLanguageDropdown();
                }
            });
            
            // 点击选项切换语言
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.getAttribute('data-lang');
                    if (lang && lang !== this.currentLanguage) {
                        this.switchLanguage(lang);
                    }
                    this.closeLanguageDropdown();
                });
            });
            
            // 点击其他地方关闭下拉菜单
            document.addEventListener('click', () => {
                this.closeLanguageDropdown();
            });
        }
    }

    // 打开语言下拉菜单
    openLanguageDropdown() {
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (languageButton && languageDropdown) {
            languageButton.classList.add('open');
            languageDropdown.classList.add('open');
        }
    }

    // 关闭语言下拉菜单
    closeLanguageDropdown() {
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');
        
        if (languageButton && languageDropdown) {
            languageButton.classList.remove('open');
            languageDropdown.classList.remove('open');
        }
    }

    // 切换语言
    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        this.setStoredLanguage(lang);
        this.loadLanguageData();
        this.updateUI();
        
        // 重新生成目录
        if (window.generateTOC) {
            window.generateTOC();
        }
        
        // 如果当前显示的是章节内容，重新加载
        const currentChapterId = document.querySelector('.chapter-content.active')?.getAttribute('data-chapter-id');
        if (currentChapterId && window.showChapter) {
            window.showChapter(currentChapterId);
        }
    }

    // 获取当前菜单结构
    getMenuStructure() {
        return this.currentMenuStructure;
    }

    // 获取当前章节内容
    getChapters() {
        return this.currentChapters;
    }

    // 根据ID获取章节内容
    getChapterById(id) {
        return this.currentChapters.find(chapter => chapter.id === id);
    }
}

// 创建全局实例
window.i18nManager = new I18nManager();