// BKBTC白皮书数据结构
const whitePaperData = {
  title: "BKBTC白皮书",
  subtitle: "中东数字金融新纪元——全球首支比特币储备银行纳斯达克上市之路",
  tagline: "币股同行 · 生态闭环 · 跨境金融革命",
  
  // 三级目录结构
  menuStructure: [
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
              contentId: "who-we-are"
            },
            {
              id: "core-mission",
              title: "核心使命和价值",
              level: 3,
              contentId: "core-mission"
            },
            {
              id: "positioning",
              title: "我们的定位",
              level: 3,
              contentId: "positioning"
            }
          ]
        },
        {
          id: "coin-stock-synergy",
          title: "币股同行的价值主张",
          level: 2,
          expanded: false,
          children: [
            {
              id: "investment-model",
              title: "投资模型",
              level: 3,
              contentId: "coin-stock-synergy"
            },
            {
              id: "leverage-mechanism",
              title: "杠杆机制",
              level: 3,
              contentId: "coin-stock-synergy"
            }
          ]
        }
      ]
    },
    {
      id: "tokenomics",
      title: "代币经济",
      level: 1,
      expanded: false,
      children: [
        {
          id: "bkbtc-faq",
          title: "BKBTC FAQ",
          level: 2,
          expanded: false,
          children: [
            {
              id: "token-supply",
              title: "代币供应",
              level: 3,
              contentId: "bkbtc-faq"
            },
            {
              id: "token-distribution",
              title: "代币分配",
              level: 3,
              contentId: "bkbtc-faq"
            },
            {
              id: "burn-mechanism",
              title: "销毁机制",
              level: 3,
              contentId: "bkbtc-faq"
            }
          ]
        }
      ]
    },
    {
      id: "ecosystem",
      title: "生态系统",
      level: 1,
      expanded: false,
      children: [
        {
          id: "ecosystem-overview",
          title: "生态规划图",
          level: 2,
          expanded: false,
          children: [
            {
              id: "infrastructure",
              title: "底层基础设施",
              level: 3,
              contentId: "ecosystem-overview"
            },
            {
              id: "core-products",
              title: "核心产品层",
              level: 3,
              contentId: "ecosystem-overview"
            },
            {
              id: "application-layer",
              title: "应用生态层",
              level: 3,
              contentId: "ecosystem-overview"
            }
          ]
        },
        {
          id: "technology-innovation",
          title: "技术与创新",
          level: 2,
          expanded: false,
          children: [
            {
              id: "btc-layer2",
              title: "BTC二层扩展",
              level: 3,
              contentId: "technology-innovation"
            },
            {
              id: "network-integration",
              title: "网络集成",
              level: 3,
              contentId: "technology-innovation"
            },
            {
              id: "chain-key-signature",
              title: "链密钥签名",
              level: 3,
              contentId: "technology-innovation"
            }
          ]
        }
      ]
    },
    {
      id: "roadmap",
      title: "发展路线",
      level: 1,
      expanded: false,
      children: [
        {
          id: "incubation-listing",
          title: "孵化到上市阶段",
          level: 2,
          expanded: false,
          children: [
            {
              id: "phase-one",
              title: "第一阶段：战略筹备",
              level: 3,
              contentId: "incubation-listing"
            },
            {
              id: "phase-two",
              title: "第二阶段：代币发行",
              level: 3,
              contentId: "incubation-listing"
            }
          ]
        }
      ]
    }
  ],
  
  chapters: [
    {
      id: "who-we-are",
      title: "我们是谁",
      content: `
        <h2>我们是谁？</h2>
        <p><strong>沙特阿拉伯投资总会（迪拜）</strong> 是沙特政府主导设立、扎根于阿联迪拜国际金融中心的跨区域战略投资促进平台。我们致力于成为连接沙特"2030愿景"与全球资本的核心枢纽，通过迪拜的地缘与政策优势，为国际企业进入沙特及中东市场提供一站式投资解决方案。</p>
        
        <p>比特银行（BANKBTC）是全球首家以比特币储值为核心资产的数字银行，致力于成为中东地区首个在纳斯达克上市的"比特币概念"创新企业。</p>
      `
    },
    {
      id: "core-mission",
      title: "核心使命和价值",
      content: `
        <h2>核心使命和价值</h2>
        <ul>
          <li>推动第三个黄金资产BTC成为全世界证券,GP,LP，资本成为核心价值管理的基金会</li>
          <li>赋能全球投资者将公司自身转型为一个以比特币（BTC）为主要储备资产的实体，并通过一系列金融操作让投资者能通过投资其公司股票或债券来间接投资比特币</li>
          <li>构建全球非投资生态</li>
          <li>研发PayFi平台赋能BTC一键发币，Swap交易，BTC储备战略，跨境支付以及服务商RWA资源整合</li>
          <li>开启新的全面去中心化新世界</li>
        </ul>
      `
    },
    {
      id: "positioning",
      title: "我们的定位",
      content: `
        <h2>我们的定位</h2>
        <p>比特银行（BANKBTC）是全球首家以比特币储值为核心资产的数字银行，致力于成为中东地区首个在纳斯达克上市的"比特币概念"创新企业。我们通过创新的微策略资本运作模式，将传统金融与数字货币深度融合，为华尔街机构、GP/LP基金及全球投资者提供安全、高效的比特币资产配置解决方案。</p>
        
        <p>我们的使命是让比特币成为全球储备资产，通过"币股同行"模型（即公司股价与比特币价值协同增长），推动数字货币纳入主流金融体系，重塑未来财富存储与增值范式。</p>
      `
    },
    {
      id: "coin-stock-synergy",
      title: "币股同行的价值主张",
      content: `
        <p>投资者若看好比特币的长期价值但不想直接持有，购买MSTR股票就相当于投资了一个带有杠杆的比特币投资工具。因为公司通过融资放大了购币能力，其股价的涨跌幅通常会大于比特币本身的涨跌幅。</p>
      `
    },
    {
      id: "bkbtc-faq",
      title: "BKBTC FAQ",
      content: `
        <h2>BKBTC代币供应</h2>
        <p>BKBTC代币的总供应量将发行 <strong>21,000,000</strong> 个代币。</p>
        
        <h2>BKBTC代币供应分配</h2>
        <p>BKBTC所有代币全部通过铸币抽奖方式获取。</p>
        
        <h2>销毁方式</h2>
        <h3>手续费销毁</h3>
        <p>参与铸币领取对应奖励的人将在提现时触发手续费销毁，销毁为日提现的7%。</p>
        <p><strong>公式：</strong>销毁量 = 每日提现BTC × 7%</p>
        
        <h3>链游销毁</h3>
        <p>链游中心根据不同链游路径收取不同的手续费。</p>
        <p><strong>例：</strong>大逃杀游戏每60秒收取参与玩家5%手续费进行销毁。</p>
        
        <h3>生态销毁</h3>
        <p>充电器和RWA充电宝每次售卖和更换充电宝将收取千分之5的手续费进行销毁。</p>
        
        <h2>销毁结束</h2>
        <p>BKBTC代币的总供应量将保持固定为 <strong>2,100,000</strong> 个代币。</p>
      `
    },
    {
      id: "ecosystem-overview",
      title: "BKBTC概述生态规划图",
      content: `
        <h2>底层基础设施</h2>
        <p>比特币托管机制采用ICP多签公共钱包，比特币生态网络，派生钱包/门阀签名技术，Ordinals,Atomicals。</p>
        
        <h2>核心产品层</h2>
        <ul>
          <li>比特储值银行（BKBTC）</li>
          <li>理财和收益聚合</li>
          <li>APY产品矩阵（投资国债+逆回购，Babylon协议，双币质押理财，链游复合型理财）</li>
          <li>PayFi支付网络</li>
          <li>eSIM全球流量和礼品卡VISA化</li>
        </ul>
        
        <h2>应用生态层</h2>
        <ul>
          <li>BKBTC</li>
          <li>链游</li>
          <li>RWA超级孵化中心</li>
          <li>机构服务模块</li>
          <li>比特币ETF托管</li>
          <li>基金定制化敞口工具AtoPlus</li>
          <li>币股联动产品NSDK</li>
        </ul>
        
        <h2>生态协同</h2>
        <p>区块链网络，IOS,安卓，TokenPocket，OKX</p>
      `
    },
    {
      id: "technology-innovation",
      title: "技术与创新",
      content: `
        <h2>BTC二层扩展</h2>
        <p>通过新增扩展了ICP网络的对BTC的二层加强了BTC的流转性。</p>
        
        <h2>网络集成</h2>
        <p>通过运行比特币适配器，ICP 节点为罐式智能合约提供对比特币区块链最新状态的实时访问。ICP 上设置的比特币 UTXO 使罐式智能合约能够读取任何 BTC 地址的余额。</p>
        
        <h2>链密钥签名</h2>
        <p>ICP 节点协作生成门限 ECDSA 签名，使智能合约能够签署 BTC 交易。利用网络集成，这些 BTC 交易将直接写入比特币区块链，无需任何跨链桥。链密钥签名还能派生出 BTC 地址，使 ICP 智能合约能够读取、写入和拥有 BTC。</p>
        
        <h2>链融合与互操作性</h2>
        <p>除了比特币适配器之外，ICP 智能合约还可以读写其他区块链，提供无与伦比的 Web3 互联体验。单个智能合约可以通过网络集成、RPC 集成和HTTPS 调用等功能，读取、写入和拥有多个区块链上的资产。</p>
        
        <h2>链密钥比特币</h2>
        <p>原生比特币交易需要支付高额手续费，并需要长时间等待区块确认。ckBTC 应运而生，它是比特币的 1:1 孪生兄弟，旨在利用 ICP 生态系统中 1-2 秒的最终确认时间和极低的手续费。ckBTC 是首批 Chain Fusion 应用之一，并为不同用例的多个 dapp 提供支持。</p>
      `
    },
    {
      id: "incubation-listing",
      title: "孵化模式到上市阶段",
      content: `
        <h2>第一阶段：战略筹备与主体设立</h2>
        <h3>核心目标</h3>
        <p>奠定合法合规基础，明确战略方向</p>
        
        <h3>关键行动与里程碑</h3>
        <ol>
          <li><strong>设立合规主体</strong>（沙特阿拉伯投资总会）</li>
          <li><strong>白皮书</strong>（阐明比特储值、币股联动商业模式与生态规划）</li>
          <li><strong>组建核心团队</strong>（金融、技术、合规领域的专业人士）</li>
        </ol>
        
        <h2>第二阶段：代币发行与生态孵化</h2>
        <h3>核心目标</h3>
        <p>完成技术实现，启动生态建设，积累初始用户与储备</p>
        
        <h3>关键行动与里程碑</h3>
        <ol>
          <li><strong>技术开发与审计</strong>（发行BKBTC代币，智能合约需经安全审计）</li>
          <li><strong>比特币储备启动</strong></li>
        </ol>
      `
    }
  ]
};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = whitePaperData;
}