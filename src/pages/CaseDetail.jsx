import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyImage from '../components/common/LazyImage';

// 这里是案例数据，将来可能从API获取
const casesData = [
  {
    id: 1,
    title: '钓鱼网站诈骗资金追回',
    category: 'cyber',
    image: '/assets/images/1742992641.jpg',
    description: '成功追回被钓鱼网站诈骗的大额资金，涉及多个国家的跨境诈骗案件',
    amount: '￥2,000,000',
    duration: '3个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2024年初，W先生(化名)在社交媒体上看到一则广告，宣称只需投入少量资金，即可通过某平台获得高额回报。经广告链接引导注册了一家名为"GlobalTradePro"的投资平台，并在客服的引导下初期小额投入1000美元，并成功提现，让他对平台产生信任。</p>
      
      <p class="mb-8 text-lg">随后，平台不断鼓励他加大投资，承诺VIP账户可享受80%盈利保障。W先生累计投入了8万美元。然而，当他尝试提现时，平台以账户审核异常需要缴纳税款解冻等借口拒绝提现，并屏蔽他的联系方式，客服失联。</p>
      
      <p class="mb-8 text-lg">意识到被骗后，W先生多次向当地警方求助，但由于诈骗团伙没在境外，案件难以立案。在朋友的介绍下，他联系了全球反诈骗组织，寻求资金追回的帮助。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">深入调查 & 资金追踪</h3>
      <p class="mb-6 text-lg">我们的金融调查团队分析了W先生的交易记录，发现该平台未获得任何金融监管许可，属于非法二元期权骗局。</p>
      <p class="mb-8 text-lg">通过区块链追踪，我们发现W先生的资金被转移至多个境外银行账户，并部分分换成加密货币。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">法律行动 & 司法合作</h3>
      <p class="mb-6 text-lg">我们的跨国律师团队在英国、塞浦路斯、网联香等司法辖区提起诉讼，申请冻结涉嫌平台相关账户。</p>
      <p class="mb-6 text-lg">通过"欧洲刑警组织(Europol)和国际刑警(Interpol)"合作，确认诈骗团伙主要成员藏匿在东欧，并推动执法部门介入调查。</p>
      <p class="mb-8 text-lg">同时，我们向支付网关和银行提交证据，申请强制退款（Chargeback），帮助W先生追回部分资金。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过3个月的国际法律诉讼和执法合作，我们成功冻结了7部分涉案资金，并协助W先生追回6.2万美元，其余资金仍在进一步追讨中。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">W先生感激地表示："我一度以为这笔钱彻底没了，甚至不敢告诉家人。全球反诈骗组织的团队专业、高效，帮助我追回了大部分资金，并提供法律咨询，让我学会如何识别投资骗局，我希望我的经历能提醒更多人，不要轻信诱人不菲的投资项目！"</p>
    `,
  },
  {
    id: 2,
    title: '二元期权骗局资金追回',
    category: 'financial',
    image: '/assets/images/1742986110.jpg',
    description: '协助受害者成功追回二元期权平台诈骗资金，打击跨国金融诈骗团伙',
    amount: '￥1,500,000',
    duration: '4个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年底，L女士在朋友推荐下注册了一家名为"FutureOptions"的二元期权交易平台。该平台宣称拥有"AI预测市场"和"85%以上盈利率"等优势。平台为L女士分配了一名"资深投资顾问"，指导她进行交易。初期小额投资显示获利，让L女士产生信任。</p>
      
      <p class="mb-8 text-lg">在"投资顾问"的鼓励下，L女士陆续投入共计150万元人民币，并看到账户余额不断增长。当她尝试提现部分资金时，平台要求缴纳高额"解冻费"和"税费"，并声称需要达到特定交易量才能提现。当L女士要求退款时，平台客服态度转变，最终完全失联。</p>
      
      <p class="mb-8 text-lg">L女士尝试多种途径维权无果后，经同事介绍联系到我们全球反诈骗组织，希望能够帮助其追回被骗资金。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">深入调查 & 平台分析</h3>
      <p class="mb-6 text-lg">我们的金融安全团队首先对"FutureOptions"平台进行了全面调查，发现该平台并未在任何国家或地区获得合法金融牌照，网站服务器位于东南亚某国，注册信息使用虚假身份。</p>
      <p class="mb-8 text-lg">通过对交易记录的技术分析，我们确认该平台操作的交易结果完全由后台控制，并非真实市场交易。平台设计让用户前期小额交易必定获利，大额交易则必定亏损，属于典型的二元期权诈骗模式。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">资金追踪 & 法律行动</h3>
      <p class="mb-6 text-lg">我们追踪到L女士的资金被转入多个离岸账户，经过5次转移后，主要资金最终流向了某东南亚国家的几个银行账户。我们的国际法律团队立即在相关司法管辖区提交了资金冻结申请。</p>
      <p class="mb-6 text-lg">与此同时，我们联合国际刑警组织提供犯罪证据，协助对诈骗团伙发起跨国行动。经过调查，该诈骗团伙已在多个国家实施类似诈骗，受害者遍布全球。</p>
      <p class="mb-8 text-lg">我们还与L女士使用的支付机构合作，提供详细证据证明交易欺诈性质，申请交易撤销和部分退款。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过4个月的不懈努力，我们成功冻结了诈骗团伙的多个账户，并协助L女士追回85%的资金，总计约128万元人民币。剩余资金仍在追讨中，我们已为L女士提供了完整的法律途径建议。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">L女士表示："被骗后我一度陷入绝望，全球反诈骗组织不仅帮我追回了大部分资金，还教会了我如何辨别投资陷阱。他们的专业和执着让我感动，我现在也会主动向身边朋友宣传防范二元期权诈骗的知识。真心感谢你们的帮助！"</p>
    `,
  },
  {
    id: 3,
    title: '传销与庞氏骗局资金追回',
    category: 'fraud',
    image: '/assets/images/ponzi.jpg',
    description: '揭露传销组织骗局，协助受害者群体追回大部分投资资金',
    amount: '￥3,000,000',
    duration: '6个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2022年中，W先生及其亲友群体共计15人，通过熟人推荐加入了一个名为"全球共赢"的投资项目。该项目宣称投资全球顶尖科技企业股权，承诺每月15%-30%稳定回报。项目运营方以"独家投资渠道"和"顶级金融团队"为宣传点，吸引了众多投资者。</p>
      
      <p class="mb-8 text-lg">W先生及其亲友共投入约300万元。项目初期按承诺提供了"收益"，并定期组织大型线下活动展示"公司成就"，同时鼓励老会员发展下线，承诺高额推广佣金。随着时间推移，项目开始出现收益延迟发放的情况，并以"资金周转"为由要求会员追加投资才能提现。</p>
      
      <p class="mb-8 text-lg">当W先生质疑并要求退出时，项目方以各种理由拒绝，随后项目负责人开始失联，官方网站和APP无法访问。W先生及亲友意识到陷入传销与庞氏骗局，通过媒体报道了解到我们的组织后，联系我们寻求帮助。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">全面调查 & 组织揭露</h3>
      <p class="mb-6 text-lg">接受委托后，我们的调查团队首先对"全球共赢"项目进行了深入分析。通过调查发现，该项目符合典型的传销与庞氏骗局特征：利用前期投资者的资金支付所谓"收益"，不断吸引新投资者加入，形成资金链。</p>
      <p class="mb-8 text-lg">我们收集了项目宣传材料、活动照片、转账记录等证据，并成功联系到多名受害者，组建了一个包含近百人的维权群体。通过技术手段，我们追踪到项目实际控制人身份和资金流向，发现该团伙已在多个省份实施类似骗局。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">法律行动 & 资金追踪</h3>
      <p class="mb-6 text-lg">我们协助受害者向公安机关提交了详细的证据材料，促成了对该传销组织的立案侦查。与此同时，我们的法律团队帮助受害者向法院提起民事诉讼，申请对项目方名下资产进行财产保全。</p>
      <p class="mb-6 text-lg">通过专业的金融分析，我们追踪到多条资金线索，发现项目方将资金转入了多个个人和公司账户，并购买了房产、豪车等固定资产。我们及时向公安机关提供了这些资金流向线索。</p>
      <p class="mb-8 text-lg">在我们的协助下，执法部门对项目负责人采取了强制措施，并查封了多处房产和冻结了多个账户资金。我们还协助受害者进行了媒体曝光，防止更多人受骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过6个月的艰苦努力，我们协助W先生及其亲友群体追回了约255万元资金，追回率达到85%。其中包括：通过查封房产拍卖获得180万元，冻结账户资金追回65万元，以及犯罪嫌疑人家属主动退还的10万元。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">W先生代表受害者群体表示："被骗后我们几乎陷入绝望，不敢相信能追回资金。全球反诈骗组织不仅提供了专业的法律支持，更重要的是他们给了我们信心和希望。他们不计报酬地为我们奔走协调，最终追回了大部分资金，真的是我们的救星！"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">对于传销与庞氏骗局，我们建议公众：警惕高额回报承诺；小心"老带新"发展模式；谨慎对待要求追加投资才能提现的项目；投资前务必查验机构资质；了解传销的典型特征。如发现可疑情况，请立即向公安机关报案。</p>
    `,
  },
  {
    id: 4,
    title: '虚拟货币投资诈骗追回',
    category: 'crypto',
    image: '/assets/images/crypto.jpg',
    description: '成功追踪虚拟货币链上资金流向，协助受害者追回被骗投资',
    amount: '￥800,000',
    duration: '3个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年4月，从事IT行业的Z先生在社交媒体上结识了自称"区块链投资顾问"的人员。该"顾问"向Z先生推荐了一个名为"CryptoGains"的虚拟货币投资平台，宣称该平台有独特的交易算法和市场预测能力，能够在波动的加密货币市场中获取稳定高额回报。</p>
      
      <p class="mb-8 text-lg">Z先生被平台专业的界面设计和实时行情数据所吸引，经过小额测试后发现确实有收益，便逐渐增加投资金额，最终累计投入约80万元人民币的比特币和以太坊。当Z先生尝试提取大额收益时，平台要求支付"解冻费"和"税金"。在多次支付后，Z先生仍无法提现，此时平台客服开始变得难以联系，Z先生这才意识到自己可能被骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">区块链分析 & 资金追踪</h3>
      <p class="mb-6 text-lg">接到Z先生的求助后，我们的区块链分析团队迅速展开调查。我们首先确认了"CryptoGains"平台的真实性质，发现该平台仅有简单的前端界面，缺乏真实的交易引擎，用户看到的"实时交易"和"收益"完全是虚构的。</p>
      
      <p class="mb-6 text-lg">通过Z先生提供的交易哈希值，我们追踪到了资金流向。发现Z先生的虚拟货币被转入几个大型交易所的账户，经过多次拆分转账后，部分资金转换为法币，部分继续流转在区块链网络中。</p>
      
      <p class="mb-8 text-lg">我们的团队使用专业的区块链追踪工具和技术，建立了完整的资金流向图谱。同时，通过深入分析，我们识别出了与该诈骗网络相关的多个钱包地址及其控制者的部分身份信息。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">多方合作 & 法律行动</h3>
      <p class="mb-6 text-lg">我们协助Z先生向公安机关网络犯罪部门报案，提供了详细的区块链资金追踪报告和证据。同时，我们联系了相关虚拟货币交易所的安全团队，提供资金流向证据，请求协助冻结相关账户。</p>
      
      <p class="mb-6 text-lg">在确认部分资金已转入某知名交易所后，我们协助Z先生向该交易所提交了详细的证据材料，包括原始充值记录、通讯记录和区块链分析报告。经过多次沟通和补充证据，该交易所同意配合调查并暂时冻结了相关账户。</p>
      
      <p class="mb-8 text-lg">我们的法律团队还协助Z先生向有管辖权的法院提起民事诉讼，申请对已识别的嫌疑人账户和资产进行司法冻结。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">通过三个月的不懈努力，我们最终帮助Z先生追回了约68万元人民币等值的加密货币，追回率达到85%。其中包括：从交易所冻结账户中追回的50万元等值加密货币；通过法律诉讼迫使犯罪嫌疑人退还的15万元；以及在警方协助下从其他渠道追回的3万元等值加密货币。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">Z先生表示："在虚拟货币世界被骗，本以为资金将永远消失在区块链的匿名世界中。没想到全球反诈骗组织拥有如此强大的区块链分析能力，能够追踪到我的资金流向，并通过各种渠道帮我追回大部分损失。他们的专业程度远超我的预期，非常感谢他们的帮助！"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对虚拟货币投资诈骗，我们提醒公众：警惕高收益承诺的投资平台；验证平台合法资质；注意平台是否有真实公司地址和团队信息；不要轻信社交媒体上的"投资专家"；提现设置各种门槛的平台极可能是骗局；了解基本的区块链知识和安全操作规范。如遇虚拟货币诈骗，请保存所有交易记录和通讯证据，及时向专业机构求助。</p>
    `,
  },
  {
    id: 5,
    title: '跨国投资骗局维权与资金追回',
    category: 'financial',
    image: '/assets/images/global.jpg',
    description: '通过国际司法合作，成功追回海外投资诈骗资金',
    amount: '￥5,000,000',
    duration: '8个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2022年初，L女士经朋友介绍投资了一家名为"Global Smart Investment"的海外投资公司。该公司声称在澳大利亚、新加坡等地拥有多处高端房地产项目，承诺年化收益率高达15%，并提供了精美的宣传册和完整的公司注册文件。L女士和家人被其专业形象打动，先后投入500万元人民币购买其"优先股权"产品。</p>
      
      <p class="mb-8 text-lg">在最初几个月，L女士按时收到了投资收益。然而，6个月后收益支付开始延迟，客服给出各种理由，如"跨国转账审核"、"季度结算调整"等。当L女士要求退出投资时，对方表示需要等待"锁定期"结束。此后，公司负责人不再回应消息，公司网站无法访问，L女士这才意识到可能遭遇了精心设计的跨国投资诈骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">跨国调查 & 资金流向分析</h3>
      <p class="mb-6 text-lg">接到L女士的求助后，我们首先对"Global Smart Investment"公司进行了深入调查。我们发现该公司虽在新加坡有注册记录，但其声称的多个房地产项目实际上并不存在，公司网站上使用的项目图片均来自网络，公司董事也是冒用他人身份。</p>
      
      <p class="mb-6 text-lg">通过与国际反诈骗联盟合作，我们追踪L女士的投资资金，发现资金从新加坡账户迅速转移至香港，然后分散至多个离岸账户和国内账户。通过银行流水分析，我们锁定了主要资金接收方是一个由多名中国籍人士控制的跨国诈骗团伙。</p>
      
      <p class="mb-8 text-lg">我们的团队与新加坡、香港和国内的金融监管机构建立联系，提供详细的资金流向证据，请求协助冻结相关账户。同时，我们还联系了国际刑警组织，提供了诈骗团伙成员的身份信息和证据。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">法律行动 & 跨国合作</h3>
      <p class="mb-6 text-lg">我们协助L女士在国内向公安机关报案，同时在新加坡和香港聘请当地律师提起民事诉讼，申请财产保全令。在新加坡，我们成功冻结了诈骗公司的残余资产；在香港，法院批准了对几个关键账户的冻结令。</p>
      
      <p class="mb-6 text-lg">经过调查，我们发现该诈骗团伙在国内有实际控制人。我们协助警方提供了大量证据，最终促成了对诈骗团伙核心成员的抓捕行动。这一行动揭露了一个涉及多国的投资诈骗网络，受害者不仅包括L女士，还有来自多个国家的数十名投资者。</p>
      
      <p class="mb-8 text-lg">通过与检察机关合作，我们协助L女士在刑事诉讼中提起附带民事诉讼，要求犯罪嫌疑人赔偿全部损失。同时，我们继续通过国际法律渠道追回转移至海外的资金。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过8个月的艰苦努力，我们最终帮助L女士追回了约425万元人民币，追回率达到85%。资金来源包括：从香港冻结账户中追回的180万元；通过新加坡法院判决追回的95万元；国内被抓获犯罪嫌疑人退还的120万元；以及从其他海外账户追回的30万元。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">L女士表示："当我发现自己被骗500万时，几乎崩溃，认为这笔钱已经无法追回。全球反诈骗组织不仅帮我找到了骗子，还通过各种国际法律途径追回了大部分资金。他们专业的跨国追款能力和法律网络令人印象深刻。在这个过程中，我也认识到了跨国投资的风险和必要的尽职调查。"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对跨国投资诈骗，我们提醒公众：对高回报投资保持警惕；投资前进行彻底的尽职调查，包括实地考察和第三方验证；查验公司在相关国家的真实注册状态；不要仅凭精美宣传材料做决定；通过正规金融机构进行跨境投资；保留所有交易凭证和通讯记录。如遇跨国投资纠纷，应及时向专业机构和相关国家执法部门求助。</p>
    `,
  },
  {
    id: 6,
    title: '成功追回信用卡诈骗资金',
    category: 'financial',
    image: '/assets/images/1742463776.jpg',
    description: '协助受害者追回信用卡诈骗资金，并提供相关法律支持',
    amount: '￥500,000',
    duration: '1个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年7月，X先生收到一条短信，声称其信用卡积分即将过期，提供了一个链接可直接兑换现金。X先生点击链接后进入了一个与银行官网几乎完全相同的网站，并按要求填写了信用卡号码、密码、短信验证码等信息，希望能兑换积分。</p>
      
      <p class="mb-8 text-lg">数小时后，X先生陆续收到多条消费提醒，发现信用卡被盗刷，在各大电商平台和虚拟支付通道共计消费约50万元。他立即致电银行冻结卡片，但被告知这类欺诈消费可能难以追回。经朋友推荐，X先生联系到我们寻求专业帮助。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">快速行动 & 证据收集</h3>
      <p class="mb-6 text-lg">接到求助后，我们立即指导X先生保存所有相关证据，包括诈骗短信、钓鱼网站截图、银行交易记录等。同时，我们协助X先生向公安机关报案，并与银行风控部门建立联系。</p>
      
      <p class="mb-8 text-lg">通过技术分析，我们发现这是一个精心设计的钓鱼网站，通过复制银行官方页面元素，窃取用户敏感信息。我们追踪到该钓鱼网站的服务器位置，并分析了资金流向，发现被盗刷资金主要流向了几个电商平台的商家账户和虚拟商品交易平台。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">多方联动 & 追回行动</h3>
      <p class="mb-6 text-lg">我们同时在三个方向采取行动：一是协助X先生向银行提交《信用卡交易纠纷书面声明》，主张交易非本人授权；二是联系涉事电商平台，提供刑事立案证明，申请商家资金冻结；三是与银联支付中心合作，追踪拦截尚未提现的资金。</p>
      
      <p class="mb-6 text-lg">通过与电商平台安全部门合作，我们发现诈骗团伙使用的多个账号存在关联，并成功锁定了部分虚拟商品交易记录。我们迅速与这些平台合作，冻结了相关交易和账户，并协助警方获取了交易IP和账户注册信息。</p>
      
      <p class="mb-8 text-lg">同时，我们援引《银行卡业务管理办法》和《支付结算办法》等法规，强调银行的安全提示义务和交易核验责任，向银行提出了部分责任分担的主张。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过1个月的紧密合作，我们帮助X先生追回了约42.5万元，追回率达85%。其中包括：银行承担的15万元赔偿；通过电商平台冻结商家账户追回的20万元；从虚拟商品交易平台追回的7.5万元。剩余损失主要来自已完成清算且无法追踪的交易。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">X先生表示："当看到50万元被盗刷时，我几乎绝望，银行的态度也让我感到无助。全球反诈骗组织不仅专业高效，更重要的是他们同时从多个角度采取行动，与银行、电商平台和执法部门形成合力。没有他们的帮助，我不可能在短短一个月内追回这么多资金。真心感谢他们！"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对信用卡诈骗，我们建议公众：不要点击短信中的可疑链接；银行从不会通过短信要求用户提供完整的信用卡信息；访问银行网站时检查网址是否正确（尤其是https加密标识）；不要在非官方渠道填写敏感信息；开启信用卡消费短信通知并设置消费限额；定期检查账单；如遇可疑情况，立即联系银行客服。</p>
    `,
  },
  {
    id: 7,
    title: '虚假贷款诈骗资金追回',
    category: 'financial',
    image: '/assets/images/1742990103.jpg',
    description: '帮助受害者追回虚假贷款诈骗资金，打击非法贷款平台',
    amount: '￥350,000',
    duration: '3个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年9月，K女士因资金周转困难，在朋友圈看到"快速贷款，低息无抵押"的广告，便添加对方微信咨询。对方自称是某知名金融集团的贷款顾问，向K女士介绍了"特殊渠道贷款"业务，声称可提供35万元贷款，利率比银行低，只需支付少量"手续费"和"保证金"。</p>
      
      <p class="mb-8 text-lg">K女士填写个人信息提交贷款申请后，对方告知需缴纳5000元"平台服务费"才能处理申请。支付后，对方又以"提升信用评级"、"银行保证金"等理由，要求K女士陆续支付多笔费用共计35万元。当K女士发现自己可能被骗并要求退款时，对方声称款项已进入"贷款流程"，需再缴纳"解冻费"才能退还。K女士这才确信遭遇了虚假贷款诈骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">资金流向追踪 & 证据固定</h3>
      <p class="mb-6 text-lg">接到K女士求助后，我们立即指导她保存与诈骗人员的所有聊天记录、转账凭证和相关截图。通过分析转账记录，我们发现诈骗资金被转入多个个人账户，再经过多层转移后分散至数十个银行账户和虚拟支付账户。</p>
      
      <p class="mb-8 text-lg">我们运用资金流向分析技术，对这些转账路径进行追踪和图谱构建，发现多个账户有关联特征，最终锁定了几个核心资金池账户。同时，我们对诈骗人员使用的微信号、电话号码和IP地址进行技术分析，确定了诈骗团伙的大致活动区域和组织结构。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">法律行动 & 多方协作</h3>
      <p class="mb-6 text-lg">我们首先协助K女士向公安机关报案，并提供了完整的证据材料和资金流向分析报告。公安机关据此立案侦查，并冻结了部分涉案账户。同时，我们向支付平台提交证据，申请了快速资金止付处理。</p>
      
      <p class="mb-6 text-lg">我们的法律团队向相关银行提交了《资金追回冻结申请》，详细说明该案件的诈骗性质。由于部分账户存在明显的"资金中转"特征，我们成功说服银行对这些账户进行了临时管控。</p>
      
      <p class="mb-8 text-lg">此外，我们通过分析K女士提供的通讯记录，发现这个诈骗团伙在多地作案，拥有组织化的运作模式。我们将这些线索提供给反电信网络诈骗中心，协助警方确定了更大范围的案件关联性。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过3个月的努力，我们协助K女士追回了约29.75万元资金，追回率达85%。其中包括：通过银行和支付平台冻结账户追回的12万元；公安机关协助追回的13.5万元；以及通过法律手段从诈骗嫌疑人亲属处追回的4.25万元。剩余资金因已被提现或转入境外账户，追回难度较大。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">K女士表示："当我发现自己被骗35万元时，感到无比绝望，几乎放弃了追回的希望。全球反诈骗组织的专业团队不仅帮我理清了资金流向，还与多个部门合作追回了大部分资金。他们的专业、耐心和坚持让我感动，也让我明白了虚假贷款的防范知识。感谢他们的无私帮助！"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对虚假贷款诈骗，我们提醒公众：正规贷款机构不会要求提前支付费用；警惕无需抵押担保、无视征信的"低门槛"贷款；贷款前核实机构资质，查询其营业执照和金融许可证；不要轻信微信、朋友圈的贷款广告；如需贷款，请通过银行、持牌金融机构官方渠道申请；遇到收取各种名目费用时保持警惕；保存所有通讯记录和转账凭证；如发现被骗，立即向公安机关报案。</p>
    `,
  },
  {
    id: 8,
    title: '网络赌博诈骗资金追回',
    category: 'cyber',
    image: '/assets/images/1742991751.jpg',
    description: '成功追回在非法网络赌博平台的损失资金',
    amount: '￥1,200,000',
    duration: '4个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年初，Y先生在社交软件上结识了一位自称"投资顾问"的网友，该网友推荐了一个所谓"确保盈利"的网络博彩平台。该平台声称有特殊算法可预测结果，并提供了"技术指导"，让Y先生在最初几次小额投入时获得了一定收益。</p>
      
      <p class="mb-8 text-lg">在平台"顾问"的引导下，Y先生逐渐加大投入金额，并被告知参与平台的"VIP活动"可获得额外奖励。随着投入金额增加，他开始持续亏损。当Y先生尝试提现剩余资金时，平台以"流水不足"、"系统维护"等理由拒绝，并诱导他继续投入更多资金"挽回损失"。最终，Y先生损失了约120万元人民币，才意识到这是一个精心设计的网络赌博诈骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">平台分析 & 技术取证</h3>
      <p class="mb-6 text-lg">接到Y先生求助后，我们的技术团队首先对该赌博平台进行了深入分析。通过技术手段，我们发现该平台服务器位于境外，但实际控制方在国内。平台游戏结果完全由后台控制，并非随机，设计为让用户前期小额获利，大额必输。</p>
      
      <p class="mb-8 text-lg">我们指导Y先生保存了所有交易记录、聊天记录和平台截图，并对其设备进行取证，提取了平台运行日志和网络通信数据。通过这些技术证据，我们确认平台存在"杀猪盘"性质，即通过小利引诱，再大额诈骗的模式。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">资金追踪 & 法律行动</h3>
      <p class="mb-6 text-lg">我们追踪Y先生的转账记录，发现资金流向了多个个人和公司账户，再经过多次转移后，部分转为数字货币，部分流入境外账户。我们绘制了完整的资金流向图，并锁定了主要资金接收账户。</p>
      
      <p class="mb-6 text-lg">与此同时，我们协助Y先生向公安机关提交了详细的报案材料，包括平台技术分析报告、资金流向证据和通讯记录。由于案件涉案金额大且受害者众多，公安机关立即立案侦查，并冻结了部分关联账户。</p>
      
      <p class="mb-8 text-lg">我们还与多家支付平台和银行合作，提供了资金交易证据，申请拦截部分未完成结算的资金。针对转为数字货币的部分资金，我们的区块链分析团队进行了专业追踪，并与相关交易所合作，锁定了部分币地址和资金去向。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过4个月的艰苦努力，我们协助Y先生追回了约102万元资金，追回率达85%。其中包括：通过银行和支付平台冻结账户追回的45万元；警方协助追回的38万元；从数字货币交易所冻结账户追回的15万元；以及通过境外合作机构追回的4万元。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">Y先生表示："被骗120万元后，我一度陷入绝望，甚至产生了轻生念头。全球反诈骗组织不仅提供了专业的技术和法律支持，还给了我精神上的鼓励。他们专业的追款能力让我惊讶，能追回大部分资金已经超出我的期望。这次经历让我深刻认识到网络赌博的危害，我会将自己的教训告诉更多人，防止类似悲剧发生。"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对网络赌博诈骗，我们提醒公众：任何承诺"稳赚不赔"的投资或博彩平台都存在诈骗风险；不要轻信网友推荐的赚钱平台；网络赌博在我国属于违法行为；警惕通过小额获利引诱大额投入的手法；提现受阻时应立即停止投入；保存所有交易记录和通讯证据；如发现被骗，及时向公安机关报案。合法投资应通过正规金融机构进行，不存在"稳赚不赔"的投资。</p>
    `,
  },
  {
    id: 9,
    title: '虚拟货币交易诈骗追回',
    category: 'cyber',
    image: '/assets/images/1742990554.jpg',
    description: '通过技术手段追回虚拟货币交易诈骗损失',
    amount: '￥2,500,000',
    duration: '5个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2022年底，科技企业家C先生在参加一个区块链投资论坛后，被一个名为"BlockchainElite"的投资群吸引。群内有多位自称业内专家的人士定期分享市场分析和投资建议。经过几个月的观察，C先生逐渐相信了群内专家的专业能力，尤其是一位自称"前华尔街加密货币分析师"的群主。</p>
      
      <p class="mb-8 text-lg">2023年初，群主推荐了一个"独家私募区块链项目"，声称已经获得多家知名风投投资，即将上线国际知名交易所，价格必将暴涨10-20倍。C先生被详尽的项目白皮书和所谓的"风投证明"说服，分多次投入约250万元人民币购买项目代币。然而，当约定的交易所上线日期临近时，项目方以"政策审核"为由多次推迟，随后群主和核心团队成员集体消失，项目网站也无法访问。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">区块链追踪 & 身份挖掘</h3>
      <p class="mb-6 text-lg">接到C先生求助后，我们的区块链取证团队立即开展工作。通过分析C先生提供的交易哈希值和项目合约地址，我们追踪了资金流向，发现诈骗资金经过复杂的链上混淆后，大部分流入了几个主要的中心化交易所。</p>
      
      <p class="mb-8 text-lg">同时，我们的网络安全专家分析了项目网站的技术痕迹和域名注册信息，发现了多个线索。通过社交媒体数据分析和OSINT（开源情报）技术，我们逐步还原了诈骗团伙成员的部分真实身份信息，确认这是一个在多个国家实施类似诈骗的专业犯罪团队。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">多领域合作 & 法律行动</h3>
      <p class="mb-6 text-lg">我们首先协助C先生向公安机关网络犯罪部门报案，提供了完整的区块链取证报告和犯罪线索。同时，我们联系了涉案资金流入的多家交易所，提供司法协助请求，冻结了相关账户。</p>
      
      <p class="mb-6 text-lg">由于案件涉及多个国家，我们的国际法律团队协助C先生向相关国家的执法机构提交了犯罪报告，并与国际刑警组织共享了犯罪证据。我们还与专业的区块链安全公司合作，在全球范围内监控涉案地址的资金动向。</p>
      
      <p class="mb-8 text-lg">在取证过程中，我们发现该团伙使用了相同的技术手段实施了多起类似诈骗，受害者遍布全球。我们联合多名受害者组成维权联盟，共享信息和证据，大大增强了执法压力和资金追回可能性。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过5个月的艰苦努力，我们帮助C先生追回了约212.5万元资金，追回率达85%。其中包括：从交易所冻结账户中追回的125万元；通过国际执法合作追回的60万元；以及在诈骗团伙成员被捕后追回的27.5万元。剩余资金因已转换为难以追踪的隐私币或提现至境外银行账户，追回难度较大。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">C先生表示："作为科技行业从业者，我一直以为自己对区块链和加密货币有足够了解，没想到还是落入了如此精心设计的骗局。全球反诈骗组织的区块链追踪能力令人印象深刻，他们不仅专业，而且拥有全球网络，能够在多个国家同时开展行动。他们帮我追回了大部分资金，更重要的是帮助揭露了这个国际诈骗团伙，避免更多人受害。"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对虚拟货币交易诈骗，我们提醒公众：警惕承诺高回报的区块链项目，尤其是仅通过私人渠道销售的"独家项目"；验证项目团队的真实身份和背景；检查项目代码是否开源，是否经过专业安全审计；不要轻信社交媒体上的"专家"推荐；投资前进行彻底的尽职调查；分散投资，避免将大量资金投入单一项目；使用硬件钱包保管大额加密资产；保存所有交易记录和通讯证据。如发现被骗，及时向专业机构和执法部门求助。</p>
    `,
  },
  {
    id: 10,
    title: '跨境电商诈骗资金追回',
    category: 'fraud',
    image: '/assets/images/1742989430.jpg',
    description: '协助跨境电商受害者追回被骗资金，促成国际合作打击诈骗',
    amount: '￥900,000',
    duration: '3个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年4月，H先生经营一家进口食品贸易公司，通过某跨境电商平台接触到一家自称"欧洲知名有机食品批发商"。该供应商展示了完整的企业资质、欧盟有机认证文件和工厂照片，并提供了极具竞争力的价格。H先生经过初步尽调并收到小批量样品后，决定下达一笔90万元的大额订单。</p>
      
      <p class="mb-8 text-lg">根据供应商要求，H先生通过电汇支付了全额预付款。订单确认后，供应商提供了装箱单和运输跟踪号。然而，当H先生使用该跟踪号查询时，发现物流信息异常，联系供应商后得到模糊回复。随后，供应商以"海关扣留"为由，要求额外支付"清关费"。H先生此时产生怀疑，尝试多种渠道联系供应商未果，供应商网站也突然无法访问。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">跨国调查 & 身份核实</h3>
      <p class="mb-6 text-lg">接到H先生求助后，我们的国际调查团队立即展开工作。通过对供应商提供的文件进行深入分析，我们发现其欧盟有机认证文件经过精心伪造，展示的工厂照片来自网络，公司注册信息虽然真实存在，但实际上是被盗用的身份。</p>
      
      <p class="mb-8 text-lg">通过与欧洲当地合作伙伴协作，我们在供应商声称的地址进行实地调查，确认该地址并不存在所述公司。经过电子取证分析，我们追踪到网站服务器实际位于东欧某国，并锁定了多个与该诈骗团伙相关的银行账户和公司实体。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">资金追踪 & 国际司法合作</h3>
      <p class="mb-6 text-lg">我们追踪H先生的电汇记录，发现资金进入欧洲某银行账户后迅速被转移至多个不同国家的账户。我们的金融分析师绘制了完整的资金流向图，并确定了主要资金池所在地。</p>
      
      <p class="mb-6 text-lg">我们立即协助H先生向中国和相关国家的执法机构报案，提供了完整的证据材料。同时，我们在欧洲聘请了专业律师，向涉案银行提交了详细的欺诈证据，申请对相关账户进行紧急冻结。</p>
      
      <p class="mb-8 text-lg">通过与国际反诈骗联盟合作，我们发现该诈骗团伙已经在多个国家实施了类似骗局，受害者包括多国进口商。我们组织了跨国受害者联盟，共享信息和证据，提高了案件的国际关注度和执法优先级。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过3个月的跨国协作，我们帮助H先生追回了约76.5万元资金，追回率达85%。其中包括：通过银行反欺诈程序追回的42万元；欧洲执法机构冻结账户中追回的25万元；以及通过跨境电商平台争议解决机制获得的9.5万元赔偿。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">H先生表示："作为一家中小企业，被骗90万元对我们的打击非常大，几乎导致公司倒闭。全球反诈骗组织的跨国调查能力令人赞叹，他们不仅在多个国家同时开展行动，还协调了各国执法机构共同合作。能够追回大部分资金对我们来说是莫大的帮助，让公司得以继续经营。这次经历也让我深刻认识到跨境贸易中的风险防范重要性。"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对跨境电商诈骗，我们提醒企业：对新供应商进行彻底的尽职调查，不仅核实文件真实性，还应通过独立渠道验证；考虑使用第三方验厂和质检服务；尽量避免全额预付，可使用信用证或第三方托管支付；使用可靠的物流跟踪工具验证货物运输状态；警惕价格明显低于市场的供应商；保存所有交易记录和通讯证据；遇到异常情况立即停止支付并寻求专业帮助。进行跨境贸易时，风险防范应始终放在首位。</p>
    `,
  },
  {
    id: 11,
    title: '社交媒体投资诈骗资金追回',
    category: 'fraud',
    image: '/assets/images/1742989665.jpg',
    description: '追回通过社交媒体推广的虚假投资项目诈骗资金',
    amount: '￥1,800,000',
    duration: '4个月',
    fullContent: `
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">案件背景</h2>
      <p class="mb-8 text-lg">2023年2月，退休教师S女士在某社交媒体平台上关注了一个名为"财富自由学院"的账号，该账号经常发布投资理财和成功案例分享。不久，账号管理员私信S女士，称看到她的评论，认为她有"投资天赋"，邀请她加入一个"高净值投资者社群"。</p>
      
      <p class="mb-8 text-lg">在社群中，有多位自称金融专家和成功投资者的成员分享经验。几周后，社群创始人推出了一个"特别投资计划"，声称与国际大型基金合作，投资高端医疗科技项目，承诺年化收益20-30%且"零风险"。多位"成功投资者"晒出了收益截图，S女士被说服，分批投入了180万元退休金和积蓄。</p>
      
      <p class="mb-8 text-lg">最初几个月，S女士确实收到了部分"收益"，但当她尝试提取大额资金时，平台开始以各种理由拖延。不久后，投资平台宣布因"监管政策调整"需要"技术升级"，暂停提现。随后社群管理员和主要"专家"纷纷消失，S女士这才意识到自己被骗。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">我们的介入与追回过程</h2>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">社交媒体溯源 & 身份识别</h3>
      <p class="mb-6 text-lg">接到S女士求助后，我们的网络取证团队首先分析了所有相关社交媒体账号和社群信息。通过技术手段，我们发现多个"成功投资者"账号实际由同一组IP地址控制，使用了大量AI生成的虚假照片和编造的身份信息。</p>
      
      <p class="mb-8 text-lg">我们对社交媒体账号进行深度分析，提取了数字水印和元数据信息。通过OSINT技术和社交网络分析，我们成功识别了诈骗团伙的核心成员，发现他们经营着多个类似的诈骗社群，受害者众多。</p>
      
      <h3 class="text-xl font-bold mb-4 text-blue-600">资金追踪 & 法律行动</h3>
      <p class="mb-6 text-lg">通过分析S女士的转账记录，我们追踪资金流向，发现资金经过多层个人账户转移后，集中到几个主要账户，其中部分资金用于购买房产和豪车，部分转为数字货币，部分流入境外账户。</p>
      
      <p class="mb-6 text-lg">我们立即协助S女士向公安机关报案，提供了详细的证据报告，包括社交媒体取证、资金流向分析和诈骗团伙身份信息。由于案情重大且受害者众多，警方迅速立案并开展专案调查。</p>
      
      <p class="mb-8 text-lg">同时，我们联合多名受害者，向相关社交媒体平台举报诈骗账号，并通过媒体曝光此类诈骗手法，防止更多人受骗。我们还协助警方追踪数字货币流向，并申请冻结涉案银行账户和财产。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">成功追回资金</h2>
      <p class="mb-8 text-lg">经过4个月的努力，我们帮助S女士追回了约153万元资金，追回率达85%。其中包括：通过银行账户冻结追回的85万元；诈骗团伙被抓获后退还的40万元；通过查封房产追回的25万元；以及通过数字货币交易所合作追回的3万元。</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">客户感言</h2>
      <p class="mb-6 text-lg">S女士激动地表示："作为一名退休教师，被骗走毕生积蓄后我几乎陷入绝望。全球反诈骗组织不仅专业高效，还给了我莫大的精神支持。他们帮我追回了大部分资金，让我重拾了生活的希望。最感动的是，他们还在案件结束后，安排了专业人士为我提供免费的投资安全培训，防止再次受骗。我要特别感谢他们对老年人权益的保护！"</p>
      
      <h2 class="text-2xl font-bold mb-6 text-blue-700 border-b pb-3">防范建议</h2>
      <p class="mb-6 text-lg">针对社交媒体投资诈骗，我们特别提醒：警惕社交媒体上声称"高收益无风险"的投资项目；不要轻信陌生人的私信推荐；对"精准画像"和过分夸赞保持警惕；投资前核实对方身份和资质；谨慎对待晒收益截图的投资推荐；不要被"专属邀请"和"名额有限"等营销话术催促；远离承诺固定回报的投资；保存所有通讯和转账记录；如发现被骗，立即向公安机关报案。特别提醒老年人群体，投资决策前最好咨询家人或专业理财顾问的意见。</p>
    `,
  }
];

const CaseDetail = () => {
  const { id } = useParams();
  const [caseItem, setCaseItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟从API获取数据
    const fetchCase = () => {
      setLoading(true);
      // 通过id查找对应案例
      const foundCase = casesData.find(c => c.id === parseInt(id));
      if (foundCase) {
        setCaseItem(foundCase);
      }
      setLoading(false);
    };

    fetchCase();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!caseItem) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-6">案例未找到</h1>
          <p className="mb-8 text-lg">抱歉，您查找的案例不存在或已被移除。</p>
          <Link to="/cases" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            返回案例列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* 顶部案例信息 */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{caseItem.title}</h1>
            <Link 
              to="/cases" 
              className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              返回案例列表
            </Link>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <LazyImage
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                  {caseItem.category === 'financial' ? '金融诈骗' : 
                   caseItem.category === 'cyber' ? '网络诈骗' : '传销诈骗'}
                </span>
              </div>
              <p className="text-gray-700 mb-6 text-lg">{caseItem.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">追回金额</p>
                  <p className="text-xl font-bold text-blue-600">{caseItem.amount}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-500">用时</p>
                  <p className="text-xl font-bold text-blue-600">{caseItem.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 案例详情内容 */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <div 
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: caseItem.fullContent }}
          />
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">遇到类似问题？我们可以帮助您</h2>
          <p className="mb-6 text-lg">我们的专业团队随时为您提供免费咨询，帮助您追回损失</p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            立即咨询
          </Link>
        </div>

        {/* 相关案例 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">相关案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casesData
              .filter(c => c.id !== caseItem.id && c.category === caseItem.category)
              .slice(0, 3)
              .map(relatedCase => (
                <Link 
                  to={`/case/${relatedCase.id}`} 
                  key={relatedCase.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300"
                >
                  <div className="relative aspect-[16/9]">
                    <LazyImage
                      src={relatedCase.image}
                      alt={relatedCase.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{relatedCase.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>追回: {relatedCase.amount}</span>
                      <span>用时: {relatedCase.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* 移动端返回按钮 */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/cases" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            返回案例列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail; 