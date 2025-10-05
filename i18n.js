// 多语言配置文件
const i18nConfig = {
  // 默认语言
  defaultLanguage: 'en',
  
  // 支持的语言
  supportedLanguages: {
    en: {
      name: 'English',
      flag: '🇺🇸'
    },
    zh: {
      name: '中文',
      flag: '🇨🇳'
    }
  },
  
  // 界面文本翻译
  ui: {
    en: {
      title: "BKBTC Whitepaper",
      subtitle: "Middle East Digital Finance New Era — The World's First Bitcoin Reserve Bank's Path to NASDAQ Listing",
      tagline: "Coin-Stock Synergy · Ecosystem Closed Loop · Cross-border Financial Revolution",
      languageSelector: "Language",
      mobileMenu: "Menu",
      tableOfContents: "Table of Contents"
    },
    zh: {
      title: "BKBTC白皮书",
      subtitle: "中东数字金融新纪元——全球首支比特币储备银行纳斯达克上市之路",
      tagline: "币股同行 · 生态闭环 · 跨境金融革命",
      languageSelector: "语言",
      mobileMenu: "菜单",
      tableOfContents: "目录"
    }
  },
  
  // 菜单结构翻译
  menuStructure: {
    en: [
      {
        id: "introduction",
        title: "Project Introduction",
        level: 1,
        expanded: false,
        contentId: "introduction",
        children: [
          {
            id: "vision-strategy",
            title: "Vision and Strategic Positioning",
            level: 2,
            expanded: false,
            contentId: "vision-strategy",
            children: []
          }
        ]
      },
      {
        id: "our-positioning",
        title: "Our Positioning",
        level: 1,
        expanded: false,
        contentId: "our-positioning"
      },
      {
        id: "tokenomics",
        title: "BKBTC Economics",
        level: 1,
        expanded: false,
        contentId: "tokenomics"
      },
      {
        id: "bkbtc-overview",
        title: "BKBTC Overview",
        level: 1,
        expanded: false,
        contentId: "bkbtc-overview",
        children: [
          {
            id: "ecosystem-planning",
            title: "Ecosystem Planning",
            level: 2,
            expanded: false,
            contentId: "ecosystem-planning"
          },
          {
            id: "tech-innovation",
            title: "Technology and Innovation",
            level: 2,
            expanded: false,
            contentId: "tech-innovation"
          }
        ]
      },
      {
        id: "incubation-to-listing",
        title: "Incubation to Listing",
        level: 1,
        expanded: false,
        contentId: "incubation-to-listing"
      },
      {
        id: "battle-royale-finance",
        title: "Battle Royale and Finance Pool",
        level: 1,
        expanded: false,
        contentId: "battle-royale-finance"
      },
      {
        id: "battle-royale-rules",
        title: "Battle Royale Game Rules",
        level: 1,
        expanded: false,
        contentId: "battle-royale-rules"
      }
    ],
    zh: [
      // 这里保持原有的中文菜单结构
      {
        id: "introduction",
        title: "项目介绍",
        level: 1,
        expanded: false,
        contentId: "introduction",
        children: [
          {
            id: "vision-strategy",
            title: "愿景和战略定位",
            level: 2,
            expanded: false,
            contentId: "vision-strategy",
            children: []
          }
        ]
      },
      {
        id: "our-positioning",
        title: "我们的定位",
        level: 1,
        expanded: false,
        contentId: "our-positioning"
      },
      {
        id: "tokenomics",
        title: "BKBTC 经济学",
        level: 1,
        expanded: false,
        contentId: "tokenomics"
      },
      {
        id: "bkbtc-overview",
        title: "BKBTC概述",
        level: 1,
        expanded: false,
        contentId: "bkbtc-overview",
        children: [
          {
            id: "ecosystem-planning",
            title: "生态规划图",
            level: 2,
            expanded: false,
            contentId: "ecosystem-planning"
          },
          {
            id: "tech-innovation",
            title: "技术与创新",
            level: 2,
            expanded: false,
            contentId: "tech-innovation"
          }
        ]
      },
      {
        id: "incubation-to-listing",
        title: "孵化模式到上市",
        level: 1,
        expanded: false,
        contentId: "incubation-to-listing"
      },
      {
        id: "battle-royale-finance",
        title: "大逃杀和理财池",
        level: 1,
        expanded: false,
        contentId: "battle-royale-finance"
      },
      {
        id: "battle-royale-rules",
        title: "大逃杀游戏规则",
        level: 1,
        expanded: false,
        contentId: "battle-royale-rules"
      }
    ]
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18nConfig;
}