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
      tableOfContents: "Table of Contents",
      home: "Home"
    },
    zh: {
      title: "BKBTC白皮书",
      subtitle: "中东数字金融新纪元——全球首支比特币储备银行纳斯达克上市之路",
      tagline: "币股同行 · 生态闭环 · 跨境金融革命",
      languageSelector: "语言",
      mobileMenu: "菜单",
      tableOfContents: "目录",
      home: "首页"
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
        children: [
          {
            id: "vision-strategy",
            title: "Vision and Strategic Positioning",
            level: 2,
            expanded: false,
            children: [
              {
                id: "who-we-are",
                title: "Who We Are",
                level: 3,
                expanded: false,
                contentId: "who-we-are",
                children: [
                  {
                    id: "saudi-investment-council",
                    title: "Core Mission and Values",
                    level: 4,
                    contentId: "core-mission-value"
                  },
                  {
                    id: "bankbtc-overview",
                    title: "Empowering Global Investors",
                    level: 4,
                    contentId: "bankbtc-overview"
                  },
                  {
                    id: "strategic-positioning",
                    title: "Building Global Non-Investment Ecosystem",
                    level: 4,
                    contentId: "global-ecosystem"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "our-positioning",
        title: "Our Positioning",
        level: 1,
        expanded: false,
        contentId: "our-positioning",
        children: [
          {
            id: "coin-stock-value-proposition",
            title: "\"Coin-Stock Synergy\" Value Proposition",
            level: 2,
            expanded: false,
            contentId: "coin-stock-value-proposition"
          }
        ]
      },
      {
        id: "tokenomics",
        title: "BKBTC Economics",
        level: 1,
        expanded: false,
        contentId: "tokenomics",
        children: [
          {
            id: "token-supply-distribution",
            title: "BKBTC Token Supply Distribution",
            level: 2,
            expanded: false,
            contentId: "token-supply-distribution"
          },
          {
            id: "burn-mechanism",
            title: "Burn Mechanism",
            level: 2,
            expanded: false,
            children: [
              {
                id: "fee-burn",
                title: "Fee Burn",
                level: 3,
                contentId: "fee-burn"
              },
              {
                id: "game-burn",
                title: "Game Burn",
                level: 3,
                contentId: "game-burn"
              },
              {
                id: "ecosystem-burn",
                title: "Ecosystem Burn",
                level: 3,
                contentId: "ecosystem-burn"
              },
              {
                id: "burn-end",
                title: "Burn End",
                level: 3,
                contentId: "burn-end"
              }
            ]
          }
        ]
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
            contentId: "ecosystem-planning",
            children: [
              {
                id: "infrastructure",
                title: "Infrastructure Layer",
                level: 3,
                contentId: "infrastructure"
              },
              {
                id: "core-products",
                title: "Core Product Layer",
                level: 3,
                contentId: "core-products"
              },
              {
                id: "application-layer",
                title: "Application Ecosystem Layer",
                level: 3,
                contentId: "application-layer"
              },
              {
                id: "ecosystem-synergy",
                title: "Ecosystem Synergy",
                level: 3,
                contentId: "ecosystem-synergy"
              }
            ]
          },
          {
            id: "tech-innovation",
            title: "Technology and Innovation",
            level: 2,
            expanded: false,
            contentId: "tech-innovation",
            children: [
              {
                id: "network-integration",
                title: "Network Integration",
                level: 3,
                contentId: "network-integration"
              },
              {
                id: "chain-key-signature",
                title: "Chain Key Signature",
                level: 3,
                contentId: "chain-key-signature"
              },
              {
                id: "chain-fusion-interoperability",
                title: "Chain Fusion and Interoperability",
                level: 3,
                contentId: "chain-fusion-interoperability"
              },
              {
                id: "chain-key-bitcoin",
                title: "Chain Key Bitcoin",
                level: 3,
                contentId: "chain-key-bitcoin"
              }
            ]
          }
        ]
      },
      {
        id: "incubation-to-listing",
        title: "Incubation to Listing",
        level: 1,
        expanded: false,
        contentId: "incubation-to-listing",
        children: [
          {
            id: "strategic-partners",
            title: "Strategic Partners",
            level: 2,
            expanded: false,
            contentId: "strategic-partners"
          },
          {
            id: "btc-bank-rules",
            title: "BTC Bank Rules",
            level: 2,
            expanded: false,
            children: [
              {
                id: "node-total",
                title: "Node Total",
                level: 3,
                expanded: false,
                contentId: "node-total"
              },
              {
                id: "node-rights",
                title: "Node Rights",
                level: 3,
                expanded: false,
                contentId: "node-rights"
              }
            ]
          },
          {
            id: "counter-deposit-level2",
            title: "Counter Deposit",
            level: 2,
            expanded: false,
            contentId: "counter-deposit-level2"
          },
          {
            id: "rule-description-level2",
            title: "Rule Description",
            level: 2,
            expanded: false,
            children: [
              {
                id: "minting-conditions",
                title: "Minting Conditions",
                level: 3,
                expanded: false,
                contentId: "minting-conditions"
              },
              {
                id: "gameplay-instructions",
                title: "Gameplay Instructions",
                level: 3,
                expanded: false,
                contentId: "gameplay-instructions",
                children: [
                  {
                    id: "time-periods",
                    title: "Time Periods",
                    level: 4,
                    expanded: false,
                    contentId: "time-periods"
                  }
                ]
              },
              {
                id: "winning-conditions",
                title: "Winning Conditions",
                level: 3,
                expanded: false,
                contentId: "winning-conditions"
              },
              {
                id: "team-minting-rewards",
                title: "Team Minting Rewards",
                level: 3,
                expanded: false,
                contentId: "team-minting-rewards"
              }
            ]
          }
        ]
      },
      {
        id: "battle-royale-finance",
        title: "Battle Royale and Finance Pool",
        level: 1,
        expanded: false,
        children: [
          {
            id: "introduction-description",
            title: "Introduction",
            level: 2,
            expanded: false,
            children: [
              {
                id: "finance-pool-types",
                title: "Finance Pool Types:",
                level: 3,
                expanded: false,
                children: [
                  {
                    id: "type-one",
                    title: "Type One",
                    level: 4,
                    expanded: false,
                    contentId: "type-one"
                  },
                  {
                    id: "type-two",
                    title: "Type Two",
                    level: 4,
                    expanded: false,
                    contentId: "type-two"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "battle-royale-rules",
        title: "Battle Royale Game Rules",
        level: 1,
        expanded: false,
        children: [
          {
            id: "game-time",
            title: "Game Time",
            level: 2,
            expanded: false,
            contentId: "game-time"
          },
          {
            id: "game-business-model",
            title: "In-Game Business Model and Distribution Rules",
            level: 2,
            expanded: false,
            contentId: "game-business-model"
          },
          {
            id: "ranking-rewards",
            title: "Leaderboard Reward Mechanism",
            level: 2,
            expanded: false,
            children: [
              {
                id: "weekly-dividend",
                title: "Weekly Dividends",
                level: 3,
                expanded: false,
                contentId: "weekly-dividend"
              }
            ]
          },
          {
            id: "game-selection-rules",
            title: "Game Selection Rules",
            level: 2,
            expanded: false,
            contentId: "game-selection-rules"
          }
        ]
      }
    ],
    zh: [
      // 这里保持原有的中文菜单结构
      {
        id: "introduction",
        title: "项目介绍",
        level: 1,
        expanded: false,
        children: [
          {
            id: "vision-strategy",
            title: "愿景和战略定位",
            level: 2,
            expanded: false,
            children: [
              {
                id: "who-we-are",
                title: "我们是谁",
                level: 3,
                expanded: false,
                contentId: "who-we-are",
                children: [
                  {
                    id: "saudi-investment-council",
                    title: "核心使命和价值",
                    level: 4,
                    contentId: "core-mission-value"
                  },
                  {
                    id: "bankbtc-overview",
                    title: "赋能全球投资者",
                    level: 4,
                    contentId: "bankbtc-overview"
                  },
                  {
                    id: "strategic-positioning",
                    title: "构建全球非投资生态",
                    level: 4,
                    contentId: "global-ecosystem"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "our-positioning",
        title: "我们的定位",
        level: 1,
        expanded: false,
        contentId: "our-positioning",
        children: [
          {
            id: "coin-stock-value-proposition",
            title: "\"币股同行\"的价值主张",
            level: 2,
            expanded: false,
            contentId: "coin-stock-value-proposition"
          }
        ]
      },
      {
        id: "tokenomics",
        title: "BKBTC 经济学",
        level: 1,
        expanded: false,
        contentId: "tokenomics",
        children: [
          {
            id: "token-supply-distribution",
            title: "BKBTC 代币供应分配",
            level: 2,
            expanded: false,
            contentId: "token-supply-distribution"
          },
          {
            id: "burn-mechanism",
            title: "销毁方式",
            level: 2,
            expanded: false,
            children: [
              {
                id: "fee-burn",
                title: "手续费销毁",
                level: 3,
                contentId: "fee-burn"
              },
              {
                id: "game-burn",
                title: "链游销毁",
                level: 3,
                contentId: "game-burn"
              },
              {
                id: "ecosystem-burn",
                title: "生态销毁",
                level: 3,
                contentId: "ecosystem-burn"
              },
              {
                id: "burn-end",
                title: "销毁结束",
                level: 3,
                contentId: "burn-end"
              }
            ]
          }
        ]
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
            contentId: "ecosystem-planning",
            children: [
              {
                id: "infrastructure",
                title: "底层基础设施",
                level: 3,
                contentId: "infrastructure"
              },
              {
                id: "core-products",
                title: "核心产品层",
                level: 3,
                contentId: "core-products"
              },
              {
                id: "application-layer",
                title: "应用生态层",
                level: 3,
                contentId: "application-layer"
              },
              {
                id: "ecosystem-synergy",
                title: "生态协同",
                level: 3,
                contentId: "ecosystem-synergy"
              }
            ]
          },
          {
            id: "tech-innovation",
            title: "技术与创新",
            level: 2,
            expanded: false,
            contentId: "tech-innovation",
            children: [
              {
                id: "network-integration",
                title: "网络集成",
                level: 3,
                contentId: "network-integration"
              },
              {
                id: "chain-key-signature",
                title: "链密钥签名",
                level: 3,
                contentId: "chain-key-signature"
              },
              {
                id: "chain-fusion-interoperability",
                title: "链融合与互操作性",
                level: 3,
                contentId: "chain-fusion-interoperability"
              },
              {
                id: "chain-key-bitcoin",
                title: "链密钥比特币",
                level: 3,
                contentId: "chain-key-bitcoin"
              }
            ]
          }
        ]
      },
      {
        id: "incubation-to-listing",
        title: "孵化模式到上市",
        level: 1,
        expanded: false,
        contentId: "incubation-to-listing",
        children: [
          {
            id: "strategic-partners",
            title: "战略合作伙伴",
            level: 2,
            expanded: false,
            contentId: "strategic-partners"
          },
          {
            id: "btc-bank-rules",
            title: "BTC银行规则",
            level: 2,
            expanded: false,
            children: [
              {
                id: "node-total",
                title: "节点总量",
                level: 3,
                expanded: false,
                contentId: "node-total"
              },
              {
                id: "node-rights",
                title: "节点权益",
                level: 3,
                expanded: false,
                contentId: "node-rights"
              }
            ]
          },
          {
            id: "counter-deposit-level2",
            title: "柜台存款",
            level: 2,
            expanded: false,
            contentId: "counter-deposit-level2"
          },
          {
            id: "rule-description-level2",
            title: "规则说明",
            level: 2,
            expanded: false,
            children: [
              {
                id: "minting-conditions",
                title: "铸币条件",
                level: 3,
                expanded: false,
                contentId: "minting-conditions"
              },
              {
                id: "gameplay-instructions",
                title: "玩法说明",
                level: 3,
                expanded: false,
                contentId: "gameplay-instructions",
                children: [
                  {
                    id: "time-periods",
                    title: "时间段",
                    level: 4,
                    expanded: false,
                    contentId: "time-periods"
                  }
                ]
              },
              {
                id: "winning-conditions",
                title: "中奖条件",
                level: 3,
                expanded: false,
                contentId: "winning-conditions"
              },
              {
                id: "team-minting-rewards",
                title: "团队铸币奖励",
                level: 3,
                expanded: false,
                contentId: "team-minting-rewards"
              }
            ]
          }
        ]
      },
      {
        id: "battle-royale-finance",
        title: "大逃杀和理财池",
        level: 1,
        expanded: false,
        children: [
          {
            id: "introduction-description",
            title: "简介说明",
            level: 2,
            expanded: false,
            children: [
              {
                id: "finance-pool-types",
                title: "理财池主要分为两个类型：",
                level: 3,
                expanded: false,
                children: [
                  {
                    id: "type-one",
                    title: "一类型",
                    level: 4,
                    expanded: false,
                    contentId: "type-one"
                  },
                  {
                    id: "type-two",
                    title: "二类型",
                    level: 4,
                    expanded: false,
                    contentId: "type-two"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "battle-royale-rules",
        title: "大逃杀游戏规则",
        level: 1,
        expanded: false,
        children: [
          {
            id: "game-time",
            title: "游戏时间",
            level: 2,
            expanded: false,
            contentId: "game-time"
          },
          {
            id: "game-business-model",
            title: "游戏内商业模式和分配规则",
            level: 2,
            expanded: false,
            contentId: "game-business-model"
          },
          {
            id: "ranking-rewards",
            title: "排行榜 奖励机制",
            level: 2,
            expanded: false,
            children: [
              {
                id: "weekly-dividend",
                title: "每周分红一次",
                level: 3,
                expanded: false,
                contentId: "weekly-dividend"
              }
            ]
          },
          {
            id: "game-selection-rules",
            title: "游戏选中规则",
            level: 2,
            expanded: false,
            contentId: "game-selection-rules"
          }
        ]
      }
    ]
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18nConfig;
}