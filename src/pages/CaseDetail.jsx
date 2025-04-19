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
    fullContent: '<p class="text-lg mb-8">这里将是二元期权骗局资金追回的详细内容，包括案例背景、追回过程和结果。</p>',
  },
  {
    id: 3,
    title: '传销与庞氏骗局资金追回',
    category: 'fraud',
    image: '/assets/images/1742988567.jpg',
    description: '成功瓦解大型传销组织，帮助多名受害者追回投资款',
    amount: '￥3,000,000',
    duration: '6个月',
    fullContent: '<p class="text-lg mb-8">这里将是传销与庞氏骗局资金追回的详细内容，包括案例背景、追回过程和结果。</p>',
  },
  {
    id: 4,
    title: '跨国投资骗局维权与资金追回',
    category: 'financial',
    image: '/assets/images/1742985793.jpg',
    description: '通过国际司法合作，成功追回海外投资诈骗资金',
    amount: '￥5,000,000',
    duration: '8个月',
    fullContent: '<p class="text-lg mb-8">这里将是跨国投资骗局维权与资金追回的详细内容，包括案例背景、追回过程和结果。</p>',
  },
  {
    id: 5,
    title: '成功追回刷单诈骗资金',
    category: 'cyber',
    image: '/assets/images/1742988815.jpg',
    description: '帮助电商刷单受害者追回损失，并协助警方打击诈骗团伙',
    amount: '￥800,000',
    duration: '2个月',
    fullContent: '<p class="text-lg mb-8">这里将是成功追回刷单诈骗资金的详细内容，包括案例背景、追回过程和结果。</p>',
  },
  {
    id: 6,
    title: '成功追回信用卡诈骗资金',
    category: 'financial',
    image: '/assets/images/1742463776.jpg',
    description: '协助受害者追回信用卡诈骗资金，并提供相关法律支持',
    amount: '￥500,000',
    duration: '1个月',
    fullContent: '<p class="text-lg mb-8">这里将是成功追回信用卡诈骗资金的详细内容，包括案例背景、追回过程和结果。</p>',
  },
  {
    id: 7,
    title: '虚假贷款诈骗资金追回',
    category: 'financial',
    image: '/assets/images/1742990103.jpg',
    description: '帮助受害者追回虚假贷款诈骗资金，打击非法贷款平台',
    amount: '￥350,000',
    duration: '3个月',
    fullContent: '<p class="text-lg mb-8">预留位置：虚假贷款诈骗资金追回的详细内容</p>',
  },
  {
    id: 8,
    title: '网络赌博诈骗资金追回',
    category: 'cyber',
    image: '/assets/images/1742991751.jpg',
    description: '成功追回在非法网络赌博平台的损失资金',
    amount: '￥1,200,000',
    duration: '4个月',
    fullContent: '<p class="text-lg mb-8">预留位置：网络赌博诈骗资金追回的详细内容</p>',
  },
  {
    id: 9,
    title: '虚拟货币交易诈骗追回',
    category: 'cyber',
    image: '/assets/images/1742990554.jpg',
    description: '通过技术手段追回虚拟货币交易诈骗损失',
    amount: '￥2,500,000',
    duration: '5个月',
    fullContent: '<p class="text-lg mb-8">预留位置：虚拟货币交易诈骗追回的详细内容</p>',
  },
  {
    id: 10,
    title: '跨境电商诈骗资金追回',
    category: 'fraud',
    image: '/assets/images/1742989430.jpg',
    description: '协助跨境电商受害者追回被骗资金，促成国际合作打击诈骗',
    amount: '￥900,000',
    duration: '3个月',
    fullContent: '<p class="text-lg mb-8">预留位置：跨境电商诈骗资金追回的详细内容</p>',
  },
  {
    id: 11,
    title: '社交媒体投资诈骗资金追回',
    category: 'fraud',
    image: '/assets/images/1742989665.jpg',
    description: '追回通过社交媒体推广的虚假投资项目诈骗资金',
    amount: '￥1,800,000',
    duration: '4个月',
    fullContent: '<p class="text-lg mb-8">预留位置：社交媒体投资诈骗资金追回的详细内容</p>',
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