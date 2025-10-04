// English content data
const contentEn = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: `
      <h2>Who We Are?</h2>
      <p>We are a team focused on Bitcoin reserves and digital financial innovation, committed to building a globally leading digital asset management platform.</p>
    `
  },
  {
    id: "bankbtc-overview",
    title: "Empowering Global Investors",
    content: `
      <h2>Empowering Global Investors</h2>
      <p>Transform the company itself into an entity with Bitcoin (BTC) as its primary reserve asset, and through a series of financial operations, enable investors to indirectly invest in Bitcoin by investing in the company's stocks or bonds.</p>
    `
  },
  {
    id: "tokenomics",
    title: "BKBTC Economics",
    content: `
      <h2>BKBTC Economics</h2>
      <p>The total supply of BKBTC tokens will issue <strong>21,000,000</strong> tokens.</p>
    `
  },
  {
    id: "token-supply-distribution",
    title: "BKBTC Token Supply Distribution",
    content: `
      <h2>BKBTC Token Supply Distribution</h2>
      <p>All BKBTC tokens are obtained through minting lottery.</p>
    `
  },
  {
    id: "fee-burn",
    title: "Fee Burn",
    content: `
      <h2>Fee Burn</h2>
      <p>Participants who mint and receive corresponding rewards will trigger fee burn when withdrawing, with burn rate of 7% of daily withdrawals.</p>
      <p><strong>Formula:</strong> Burn Amount = Daily BTC Withdrawal × 7%</p>
    `
  },
  {
    id: "game-burn",
    title: "Game Burn",
    content: `
      <h2>Game Burn</h2>
      <p>The gaming center charges different fees based on different gaming paths.</p>
      <p><strong>Example:</strong> Battle Royale game charges 5% fee from participating players every 60 seconds for burning.</p>
    `
  },
  {
    id: "ecosystem-burn",
    title: "Ecosystem Burn",
    content: `
      <h2>Ecosystem Burn</h2>
      <p>Ecosystem burn mechanism to maintain token value and scarcity.</p>
    `
  },
  {
    id: "burn-end",
    title: "Burn End",
    content: `
      <h2>Burn End</h2>
      <p>The burn mechanism will end when specific conditions are met.</p>
    `
  },
  {
    id: "incubation-to-listing",
    title: "Incubation to Listing",
    content: `
      <h2>Incubation to Listing</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Phase</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Core Objectives</th>
            <th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">Key Actions & Milestones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">Phase 1: Strategic Preparation & Entity Establishment</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">Establish legal compliance foundation, clarify strategic direction</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
              1. <strong>Establish Compliant Entity</strong><br>
              2. <strong>Whitepaper</strong> (Clarify Bitcoin storage, coin-stock linkage business model & ecosystem planning)<br>
              3. <strong>Assemble Core Team</strong> (Professionals in finance, technology, compliance)
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">Phase 2: Token Issuance & Ecosystem Incubation</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">Complete technical implementation, launch ecosystem construction, accumulate initial users & reserves</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
              1. <strong>Technical Development & Audit</strong> (Issue BKBTC tokens, smart contracts require security audit)<br>
              2. <strong>Bitcoin Reserve Launch</strong> (Convert raised funds and own funds to BTC reserves)<br>
              3. <strong>Initial Ecosystem Implementation</strong> (Launch APY finance, chain games, PayFi payments and other core products)<br>
              4. <strong>Community & Market Building</strong> (Promote through media, communities, etc.)
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">Phase 3: Exchange Listing Preparation</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">Improve liquidity, visibility and fair valuation, paving the way for listing</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
              1. <strong>List on Binance</strong><br>
              2. <strong>Submit Applications & Negotiations</strong><br>
              3. <strong>Launch Trading</strong>
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top; font-weight: bold;">Phase 4: Listing & Value Maintenance</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">Successfully list on NASDAQ and other traditional capital markets, maintain long-term value</td>
            <td style="border: 1px solid #ddd; padding: 12px; vertical-align: top;">
              1. <strong>Financial Compliance & Audit</strong> (Prepare financial reports according to listing requirements, complete audit)<br>
              2. <strong>Choose Listing Path</strong> (Traditional IPO, SPAC merger, etc.)<br>
              3. <strong>Continuous Operations & Disclosure</strong> (Maintain business growth, fulfill information disclosure obligations)
            </td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    id: "type-one",
    title: "Type One",
    content: `
      <h2>Type One</h2>
      <p>RWA Deterministic Finance - Starting a New Track in Bitcoin Ecosystem</p>
      <p>Stake BKBTC to get BTC, earn annual yield <strong>10%-160%</strong></p>
      <p>Investment principal uses BKBTC</p>
      <p>Draw date is <strong>3 days</strong></p>
      <p>Choose BTC rise or fall</p>
      <p>Annual rates are <strong>160%</strong> and <strong>10%</strong></p>
      <p>When current selected price matches exchange price correctly, get <strong>160%</strong> daily yield in BTC</p>
      <p>When current selected price matches exchange price incorrectly, get <strong>10%</strong> daily yield in BTC</p>
      <p>Maximum single account deposit value of <strong>1 BTC</strong> worth of BKBTC</p>
    `
  },
  {
    id: "type-two",
    title: "Type Two",
    content: `
      <h2>Type Two - Chain Game Finance Type</h2>
      <h3>Making BKBTC Greater</h3>
      <p>Non-active investment</p>
      <p>When Battle Royale participants trigger wins in each round, they will receive fragments. When fragments accumulate to <strong>0.01 BTC value</strong>, it automatically triggers BTC finance feedback</p>
      <p>BTC finance product is passively triggered</p>
      <p>When BKBTC collection reaches <strong>1 BTC value</strong>, according to weighted dividends, get <strong>10% of total</strong> 1 BTC value BKBTC released to stakers</p>
      <p>When releasers obtain <strong>0.01 BTC value</strong>, exit to accelerate BKBTC ecosystem development</p>
    `
  },
  {
    id: "game-time",
    title: "Game Time",
    content: `
      <h2>Game Time</h2>
      <p>Daily <strong>9 AM - 2 AM</strong></p>
      <p>Game interval time is <strong>60s</strong></p>
      <p>Room selection includes <strong>8 styled rooms</strong>, players can freely choose to join one and decide how much BKBTC to invest in this battle</p>
      <p>After countdown ends, the mysterious killer will randomly select one room, ruthlessly eliminating all BKBTC in that room. Players in the selected room are losers, while the other <strong>7 rooms</strong> successfully escape and become winners</p>
    `
  },
  {
    id: "game-business-model",
    title: "In-Game Business Model and Distribution Rules",
    content: `
      <h2>In-Game Business Model and Distribution Rules</h2>
      <p>Transaction fee <strong>5%</strong> - Platform collection</p>
      <p>Winner upline dividend <strong>3%</strong></p>
      <p>Leaderboard revenue pool <strong>2%</strong></p>
      <p>Winner weighted dividend - <strong>80%</strong></p>
      <p>Chain game finance dividend <strong>10%</strong></p>
    `
  },
  {
    id: "weekly-dividend",
    title: "Weekly Dividends",
    content: `
      <h2>Weekly Dividends</h2>
      <p>Top <strong>50</strong> participants by volume</p>
      <p>1st place gets <strong>50%</strong> of dividend pool</p>
      <p>2nd place gets <strong>20%</strong> of dividend pool</p>
      <p>3rd-10th place get <strong>10%</strong> of dividend pool</p>
      <p>10th-20th place get <strong>8%</strong> of dividend pool</p>
      <p>20th-30th place get <strong>7%</strong> of dividend pool</p>
      <p>30th-40th place get <strong>5%</strong> of dividend pool</p>
    `
  },
  {
    id: "game-selection-rules",
    title: "Game Selection Rules",
    content: `
      <h2>Game Selection Rules</h2>
      <p>The last digit of the block hash determines which room to eliminate</p>
      <p>If <strong>0 or 9</strong> appears, it's a tie, triggering an easter egg where each player receives <strong>1 diamond</strong> airdrop. Diamonds will later become whitelist shares for the second phase chain game.</p>
      <p><strong>External Links</strong></p>
      <p><a href="https://bkbtc.btcfirwa.fun/" target="_blank">BKBTC Chain Game Center</a></p>
      <p><a href="#" onclick="alert('Not yet updated'); return false;">Finance Telegram Group</a></p>
      <p><a href="#" onclick="alert('Not yet updated'); return false;">Twitter</a></p>
    `
  },
  {
    id: "strategic-partners",
    title: "Strategic Partners",
    content: `
      <h2>Strategic Partners</h2>
      <p>Bitmain, Binance, OKX, and Bitcoin-related wallets or institutions</p>
    `
  },
  {
    id: "node-total",
    title: "Node Total",
    content: `
      <h2>Node Total</h2>
      <p>105 nodes, 10,000 tokens each; 1,050 light nodes, 1,000 tokens each. 10% unlocked upon launch, then 1% daily gold-standard BKBTC distribution after 10 days</p>
    `
  },
  {
    id: "node-rights",
    title: "Node Rights",
    content: `
      <h2>Node Rights</h2>
      <p>All revenue withdrawals have 10% fee, nodes get 3% revenue, 7% BKBTC burned</p>
    `
  },
  {
    id: "counter-deposit-level2",
    title: "Counter Deposit",
    content: `
      <h2>Counter Deposit</h2>
      <p><strong>Deposit/Withdrawal Rules:</strong></p>
      <p>• 0.001 BTC multiples</p>
      <p>• Deposit 1, withdraw 3</p>
      <p><strong>Example:</strong></p>
      <p>Deposit 0.001 BTC, withdraw 0.003 BTC</p>
      <p><strong>Circular Re-deposit Referral Rewards:</strong></p>
      <p>• Counter deposit reward 1st generation: 10%</p>
      <p>• Counter deposit reward 2nd generation: 5%</p>
    `
  },
  {
    id: "minting-conditions",
    title: "Minting Conditions",
    content: `
      <h2>Minting Conditions</h2>
      <p>Each portion: 0.001 BTC and 5% BTC value worth of BKBTC</p>
    `
  },
  {
    id: "gameplay-instructions",
    title: "Gameplay Instructions",
    content: `
      <h2>Gameplay Instructions</h2>
      <p>2 sessions per day</p>
    `
  },
  {
    id: "time-periods",
    title: "Time Periods",
    content: `
      <h2>Time Periods</h2>
      <p>First session: Daily 12:00 - 17:00; Second session: Daily 18:00 - 23:00</p>
    `
  },
  {
    id: "winning-conditions",
    title: "Winning Conditions",
    content: `
      <h2>Winning Conditions</h2>
      <p>Stop participation at end time, prize pool randomly distributed, 21 participants form 1 group, draw reward winners: Get 150% monthly BKBTC reward. Non-winners: Participation amount returned, consume 10% BKBTC fee, get 2% BTC reward. Daily 4%</p>
    `
  },
  {
    id: "team-minting-rewards",
    title: "Team Minting Rewards",
    content: `
      <h2>Team Minting Rewards</h2>
      <p>Refer 1 person get 2 generations, maximum reward 20 generations</p>
      <p><strong>Minting Volume Reward Ratios:</strong></p>
      <p>• 1st generation: 20%</p>
      <p>• 2nd generation: 10%</p>
      <p>• 3rd-10th generation: 5%</p>
      <p>• 11th-20th generation: 3%</p>
      <p><strong>Example:</strong></p>
      <p>Your team minting volume reaches 1.05M USDT worth of BTC, 50K USDT gets minting, 1M USDT doesn't get minting, mint once 2% = 20K USDT, 20 generation minting volume, 20K USDT ÷ 20 = 1K USDT, 2 times per day = 2K USDT worth of BTC, monthly = 60K USDT worth of BTC revenue</p>
    `
  },
  {
    id: "core-mission-value",
    title: "Core Mission and Values",
    content: `
      <h2>Core Mission and Values</h2>
      <p>Our core mission is to bridge traditional finance and digital assets, creating a sustainable ecosystem that benefits all stakeholders through innovative Bitcoin reserve strategies.</p>
    `
  },
  {
    id: "global-ecosystem",
    title: "Building Global Non-Investment Ecosystem",
    content: `
      <h2>Building Global Non-Investment Ecosystem</h2>
      <p>We are constructing a comprehensive global ecosystem that goes beyond traditional investment models, focusing on utility, innovation, and sustainable growth.</p>
    `
  },
  {
    id: "our-positioning",
    title: "Our Positioning",
    content: `
      <h2>Our Positioning</h2>
      <p>BKBTC positions itself as the world's first Bitcoin reserve bank preparing for NASDAQ listing, combining traditional financial structures with cutting-edge cryptocurrency technology.</p>
    `
  },
  {
    id: "coin-stock-value-proposition",
    title: "Coin-Stock Synergy Value Proposition",
    content: `
      <h2>"Coin-Stock Synergy" Value Proposition</h2>
      <p>Our unique value proposition lies in the seamless integration of cryptocurrency tokens and traditional stock instruments, creating a hybrid investment vehicle that maximizes value for all participants.</p>
    `
  },
  {
    id: "bkbtc-overview",
    title: "BKBTC Overview",
    content: `
      <h2>BKBTC Overview</h2>
      <p>BKBTC represents a revolutionary approach to Bitcoin-backed financial instruments, designed to provide institutional-grade investment opportunities while maintaining the innovative spirit of cryptocurrency.</p>
    `
  },
  {
    id: "ecosystem-planning",
    title: "Ecosystem Planning",
    content: `
      <h2>Ecosystem Planning</h2>
      <p>Our comprehensive ecosystem planning encompasses multiple layers of infrastructure, products, and applications designed to create a self-sustaining digital financial environment.</p>
    `
  },
  {
    id: "infrastructure",
    title: "Infrastructure Layer",
    content: `
      <h2>Infrastructure Layer</h2>
      <p>The foundation of our ecosystem built on robust blockchain technology, secure custody solutions, and scalable financial infrastructure.</p>
    `
  },
  {
    id: "core-products",
    title: "Core Product Layer",
    content: `
      <h2>Core Product Layer</h2>
      <p>Essential financial products including Bitcoin reserves, token mechanisms, and innovative financial instruments that form the backbone of our ecosystem.</p>
    `
  },
  {
    id: "application-layer",
    title: "Application Ecosystem Layer",
    content: `
      <h2>Application Ecosystem Layer</h2>
      <p>User-facing applications and services that provide accessible interfaces for interacting with our financial ecosystem, including gaming, DeFi, and traditional finance integration.</p>
    `
  },
  {
    id: "ecosystem-synergy",
    title: "Ecosystem Synergy",
    content: `
      <h2>Ecosystem Synergy</h2>
      <p>The interconnected nature of our ecosystem components creates powerful synergies that amplify value creation and user benefits across all platforms and services.</p>
    `
  },
  {
    id: "tech-innovation",
    title: "Technology and Innovation",
    content: `
      <h2>Technology and Innovation</h2>
      <p>Our technological foundation leverages cutting-edge blockchain innovations, cryptographic security, and financial engineering to deliver unprecedented capabilities.</p>
    `
  },
  {
    id: "network-integration",
    title: "Network Integration",
    content: `
      <h2>Network Integration</h2>
      <p>Seamless integration across multiple blockchain networks and traditional financial systems, enabling cross-platform functionality and interoperability.</p>
    `
  },
  {
    id: "chain-key-signature",
    title: "Chain Key Signature",
    content: `
      <h2>Chain Key Signature</h2>
      <p>Advanced cryptographic signature technology that enables secure, decentralized transaction processing and asset management across our ecosystem.</p>
    `
  },
  {
    id: "chain-fusion-interoperability",
    title: "Chain Fusion and Interoperability",
    content: `
      <h2>Chain Fusion and Interoperability</h2>
      <p>Revolutionary technology that enables seamless interaction between different blockchain networks, creating a unified financial ecosystem.</p>
    `
  },
  {
    id: "chain-key-bitcoin",
    title: "Chain Key Bitcoin",
    content: `
      <h2>Chain Key Bitcoin</h2>
      <p>Innovative Bitcoin integration technology that enables native Bitcoin functionality within our multi-chain ecosystem while maintaining security and decentralization.</p>
    `
  }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = contentEn;
}