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
      contentId: "introduction",
      children: [
        {
          id: "vision-strategy",
          title: "愿景和战略定位",
          level: 2,
          expanded: false,
          contentId: "vision-strategy"
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
  ],
  
  chapters: [
    {
      id: "introduction",
      title: "项目介绍",
      content: `
        <h2>项目介绍</h2>
        
        <p><strong>中东数字金融新纪元——全球首支比特币储备银行纳斯达克上市之路</strong></p>
        <p><strong>币股同行 · 生态闭环 · 跨境金融革命</strong></p>
      `
    },
    {
      id: "vision-strategy",
      title: "愿景和战略定位",
      content: `
        <h2>愿景和战略定位</h2>
        <img src="zh/图片1.png" alt="愿景与战略总览图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
        
        <h3>我们是谁？</h3>
        <p><strong>沙特阿拉伯投资总会（迪拜）</strong>是沙特政府主导设立、扎根于阿联迪拜国际金融中心的跨区域战略投资促进平台。我们致力于成为连接沙特"2030愿景"与全球资本的核心枢纽，通过迪拜的地缘与政策优势，为国际企业进入沙特及中东市场提供一站式投资解决方案。</p>
        
        <h4>核心使命和价值</h4>
        <p>推动第三个黄金资产BTC成为全世界证券,GP,LP，资本成为核心价值管理的基金会。</p>
        
        <h4>赋能全球投资者</h4>
        <p>将公司自身转型为一个以比特币（BTC）为主要储备资产的实体，并通过一系列金融操作让投资者能通过投资其公司股票或债券来间接投资比特币。</p>
        
        <h4>构建全球非投资生态</h4>
        <p>研发PayFi平台赋能BTC一键发币，Swap交易，BTC储备战略，跨境支付以及服务商RWA资源整合开启新的全面去中心化新世界。</p>
      `
    },
    {
      id: "tokenomics",
      title: "BKBTC 经济学",
      content: `
        <h2>BKBTC 经济学</h2>
        <img src="zh/图片2.png" alt="BKBTC 经济学示意图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
          <p>BKBTC代币的总供应量将发行 <strong>21,000,000</strong> 个代币。</p>
        
        <h4>BKBTC 代币供应分配</h4>
        <p>BKBTC所有代币全部通过铸币抽奖方式获取。</p>
        
        <h4>销毁方式</h4>
        <p>BKBTC采用多种销毁机制来维持代币的稀缺性和价值：</p>
        
        <h5>手续费销毁</h5>
        <p>参与铸币领取对应奖励的人将在提现时触发手续费销毁，销毁为日提现的7%。</p>
        <p><strong>公式：</strong>销毁量 = 每日提现BTC × 7%</p>
        
        <p>每场铸币成功的5% + 铸币未成功的20×0.5% = 15%</p>
        
        <h5>链游销毁</h5>
        <p>链游中心根据不同链游路径收取不同的手续费。</p>
        <p><strong>例：</strong>大逃杀游戏每60秒收取参与玩家5%手续费进行销毁。</p>
        
        <h5>生态销毁</h5>
        <p>充电器和RWA充电宝每次售卖和更换充电宝将收取千分之5的手续费进行销毁。</p>
        
        <h5>销毁结束</h5>
        <p>BKBTC代币的总供应量将保持固定为 <strong>210,000</strong> 个代币。</p>
      `
    },
    {
      id: "bkbtc-overview",
      title: "BKBTC概述",
      content: `
        <h2>BKBTC概述</h2>
        <p>BKBTC是基于比特币储备的创新数字资产，致力于构建全球领先的数字金融生态系统。</p>
      `
    },
    {
      id: "ecosystem-planning",
      title: "生态规划图",
      content: `
        <h2>生态规划图</h2>
        <img src="zh/图片1.png" alt="生态规划总览图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
        <p>BKBTC生态系统的全面规划和架构设计。</p>
        
        <h3>底层基础设施</h3>
        <p>比特币托管机制 采用ICP多签公共钱包，比特币生态网络，派生钱包/门阀签名技术，Ordinals,Atomicals</p>
        
        <h3>核心产品层</h3>
        <p>比特储值银行（BKBTC），理财和收益聚合，APY产品矩阵（投资国债+逆回购，Babylon协议，双币质押理财，链游复合型理财），PayFi支付网络，eSIM全球流量和礼品卡VISA化</p>
        
        <h3>应用生态层</h3>
        <p>BKBTC，链游，RWA超级孵化中心，机构服务模块，比特币ETF托管，基金定制化敞口工具AtoPlus，币股联动产品NSDK</p>
        
        <h3>生态协同</h3>
        <p>区块链网络，IOS,安卓，TokenPocket，OKX</p>
      `
    },
    {
      id: "tech-innovation",
      title: "技术与创新",
      content: `
        <h2>技术与创新</h2>
        <p>通过新增扩展了ICP网络的对BTC的二层加强了BTC的流转性</p>
        <img src="zh/图片5.png" alt="技术架构补充图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
        
        <h3>网络集成</h3>
        <p>通过运行比特币适配器，ICP 节点为罐式智能合约提供对比特币区块链最新状态的实时访问。ICP 上设置的比特币 UTXO 使罐式智能合约能够读取任何 BTC 地址的余额。</p>
        
        <h3>链密钥签名</h3>
        <p>ICP 节点协作生成门限 ECDSA 签名，使智能合约能够签署 BTC 交易。利用网络集成，这些 BTC 交易将直接写入比特币区块链，无需任何跨链桥。链密钥签名还能派生出 BTC 地址，使 ICP 智能合约能够读取、写入和拥有 BTC</p>
        
        <h3>链融合与互操作性</h3>
        <p>除了比特币适配器之外，ICP 智能合约还可以读写其他区块链，提供无与伦比的 Web3 互联体验。单个智能合约可以通过网络集成、RPC 集成和HTTPS 调用等功能，读取、写入和拥有多个区块链上的资产。</p>
        
        <h3>链密钥比特币</h3>
        <p>原生比特币交易需要支付高额手续费，并需要长时间等待区块确认。ckBTC 应运而生，它是比特币的 1:1 孪生兄弟，旨在利用 ICP 生态系统中 1-2 秒的最终确认时间和极低的手续费。ckBTC 是首批 Chain Fusion 应用之一，并为不同用例的多个 dapp 提供支持。</p>
      `
    },



    {
      id: "our-positioning",
      title: "我们的定位",
      content: `
        <h2>我们的定位</h2>
        <p><strong>比特银行（BANKBTC）</strong>是全球首家以比特币储值为核心资产的数字银行，致力于成为中东地区首个在纳斯达克上市的"比特币概念"创新企业。我们通过创新的微策略资本运作模式，将传统金融与数字货币深度融合，为华尔街机构、GP/LP基金及全球投资者提供安全、高效的比特币资产配置解决方案。</p>
        
        <p>我们的使命是让比特币成为全球储备资产，通过"币股同行"模型（即公司股价与比特币价值协同增长），推动数字货币纳入主流金融体系，重塑未来财富存储与增值范式。</p>
        
        <h3>"币股同行"的价值主张</h3>
        <p>投资者若看好比特币的长期价值但不想直接持有，购买MSTR股票就相当于投资了一个带有杠杆的比特币投资工具。因为公司通过融资放大了购币能力，其股价的涨跌幅通常会大于比特币本身的涨跌幅。</p>
        <img src="zh/图片3.png" alt="币股同行模型示意图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
      `
    },
    {
      id: "incubation-to-listing",
      title: "孵化模式到上市",
      content: `
        <h2>孵化模式到上市</h2>
        <img src="zh/图片6.png" alt="孵化到上市路线图" style="max-width:100%;height:auto;margin:12px 0;border:1px solid #e5e7eb;border-radius:6px;" />
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">阶段</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">核心目标</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">关键行动与里程碑</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">第一阶段：战略筹备与主体设立</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">奠定合法合规基础，明确战略方向</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
                1. <strong>设立合规主体</strong><br>
                2. <strong>白皮书</strong>（阐明比特储值、币股联动商业模式与生态规划）<br>
                3. <strong>组建核心团队</strong>（金融、技术、合规领域的专业人士）
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">第二阶段：代币发行与生态孵化</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">完成技术实现，启动生态建设，积累初始用户与储备</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
                1. <strong>技术开发与审计</strong>（发行BKBTC代币，智能合约需经安全审计）<br>
                2. <strong>比特币储备启动</strong>（将募集资金及自有资金转换为BTC储备）<br>
                3. <strong>生态初步落地</strong>（上线APY理财、链游，PayFi支付等核心产品）<br>
                4. <strong>社区与市场建设</strong>（通过媒体、社群等进行宣传）
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">第三阶段：交易所上市准备</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">提升流动性、知名度和公允估值，为上市铺路</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
                1. <strong>上线币安</strong><br>
                2. <strong>提交申请与谈判</strong><br>
                3. <strong>上线交易</strong>
              </td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">第四阶段：上市与价值维护</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">成功在纳斯达克等传统资本市场上市，并维持长期价值</td>
              <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
                1. <strong>财务合规与审计</strong>（按上市地要求编制财报，完成审计）<br>
                2. <strong>选择上市路径</strong>（传统IPO、SPAC合并等）<br>
                3. <strong>持续运营与披露</strong>（维持业务增长，履行信息披露义务）
              </td>
            </tr>
          </tbody>
        </table>

        <h3>战略合作伙伴</h3>
        <p>比特大陆，币安，欧意，跟比特相关的钱包或者机构</p>

        <h3>BTC银行规则</h3>
        
        <h4>节点总量</h4>
        <p>105个节点，每个节点10000枚1050个轻节点，每个节点1000枚上线解锁10%，10天后日1%金本位BKBTC发放</p>
        
        <h4>节点权益</h4>
        <p>所有收益提现10%手续费，节点收益3%，7%BKBTC销毁</p>

        <h3>柜台存款</h3>
        <p><strong>存取规则：</strong></p>
        <p>• 0.001的BTC倍数</p>
        <p>• 存1取3</p>
        <p><strong>举例：</strong></p>
        <p>存0.001BTC取0.003BTC</p>
        <p><strong>循环复存推荐奖励：</strong></p>
        <p>• 柜台存款奖励1代：10%</p>
        <p>• 柜台存款奖励2代：5%</p>

        <h3>规则说明</h3>
        
        <h4>铸币条件</h4>
        <p>每份0.001BTC和价值5%BTC的BKBTC</p>
        
        <h4>玩法说明</h4>
        <p>每日场次为2场</p>
        
        <h5>时间段</h5>
        <p>第一场：每日12：00 - 17：00第二场：每日18：00 - 23:   00</p>
        
        <h4>中奖条件</h4>
        <p>结束时间停止参与，奖池随机打散，21个参与人为1组，抽出奖励中奖人：获得月化150%的BKBTC奖励未中奖人：参与金额原路退回，消耗10%手续费BKBTC，获得2%BTC的奖励。日化4%</p>
        
        <h4>团队铸币奖励</h4>
        <p>推荐1/人个拿2代，最高奖励20代</p>
        <p><strong>铸币流水奖励比例：</strong></p>
        <p>• 1代：20%</p>
        <p>• 2代：10%</p>
        <p>• 3～10代：5%</p>
        <p>• 11～20代：3%</p>
        <p><strong>举例：</strong></p>
        <p>你团队铸币流水达105万U的BTC，有5万U获得铸币，100万U未获得铸币，铸造1次2%就是2万U，20代铸币流水，2万U÷20＝1000U，1天2次就是2000U价值的BTC，月化就是6万U的BTC收益</p>
      `
    },
    {
      id: "battle-royale-finance",
      title: "大逃杀和理财池",
      content: `
        <h2>大逃杀和理财池</h2>
        
        <h2>理财池主要分为两个类型：</h2>
        
        <h3>一类型</h3>
      <p>RWA判定性理财-开始比特生态的新赛道质押BKBTC得BTC，获得年化利率10%-160%投资本金使用BKBTC开奖日期为3天选择BTC的涨与跌年华率为 160% 和 10%当前选择价格和兑换价格比对正确项，获得160%的日化的BTC当前选择价格和兑换价格比对错误项，获得10%的日化的BTC单次账户最多入金价值1个BTC的BKBTC</p>
        
        <h3>二类型</h3>
        <p>链游理财型 - 让BKBTC更伟大非主动性投资当大逃杀参与者每场次触发中奖，将获得碎片，碎片集满0.01数量价值的BTC，自动触发反哺BTC理财BTC理财产品为被动型触发  当BKBTC 收取数量达到价值1个BTC时，按照加权分红获得价值1个BTC的BKBTC的10%总量释放给质押者们，当释放者获取数量达到价值0.01BTC时，出局加速BKBTC的生态发展</p>
        `
    },
    {
      id: "battle-royale-rules",
      title: "大逃杀游戏规则",
      content: `
        <h2>大逃杀游戏规则</h2>
        
        <h3>游戏时间</h3>
        <p>每天早上<strong>9点 - 凌晨2点</strong></p>
        <p>游戏间隔时间为<strong>60s</strong></p>
        <p>舱室选择为<strong>8个风格的房间</strong>，玩家可自由选择加入其中一个，并决定投入多少BKBTC参与这场较量</p>
        <p>倒计时结束后，神秘杀手将随机选择这样一个房间，无情的杀掉该房间内的所有BKBTC，被选中的房间玩家为输家，而其余<strong>7个房间</strong>则成功逃脱，成为赢家</p>
        
        <h3>游戏内商业模式和分配规则</h3>
        <p>手续费 <strong>5%</strong> - 平台收取</p>
        <p>赢家上级分红<strong>3%</strong></p>
        <p>排行榜收益池<strong>2%</strong></p>
        <p>赢家加权分红 - <strong>80%</strong></p>
        <p>链游理财型分红<strong>10%</strong></p>
        
        <h3>排行榜奖励机制</h3>
        <h4>每周分红一次</h4>
        <p>参与数量排序前<strong>40名</strong></p>
        <p>第一名获得分红池 <strong>50%</strong></p>
        <p>第二名获得分红池 <strong>20%</strong></p>
        <p>3-10名获得分红池 <strong>10%</strong></p>
        <p>10-20名获得分红池 <strong>8%</strong></p>
        <p>20-30名获得分红池 <strong>7%</strong></p>
        <p>30-40名获得分红池 <strong>5%</strong></p>
        
        <h3>游戏选中规则</h3>
        <p>当块哈希的最后一位数字是几，选择杀死哪个房间</p>
        <p>如出现<strong>0和9</strong>，平局，每人收取<strong>1%</strong>手续费，并奖励<strong>1枚钻石</strong>。钻石后期将成为二期链游的白名单份额。</p>
        
        <h3>外部链接</h3>
        <p><a href="https://bkbtc.btcfirwa.fun/" target="_blank"><strong>BKBTC链游中心</strong></a></p>
        <p><strong>理财平台：</strong>暂未开放</p>
        <p><strong>电报群：</strong>暂未开放</p>
        <p><strong>推特：</strong>暂未开放</p>
      `
    }
  ]
};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = whitePaperData;
}