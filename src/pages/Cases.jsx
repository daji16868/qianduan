// src/pages/Cases.jsx
import React, { useState } from 'react';
import LazyImage from '../components/common/LazyImage';

const Cases = () => {
  const [filter, setFilter] = useState('all');

  // Case study data with images from mapping
  const cases = [
    {
      id: 1,
      title: '钓鱼网站诈骗资金追回',
      category: 'cyber',
      image: '/assets/images/1742992641.jpg',
      description: '成功追回被钓鱼网站诈骗的大额资金，涉及多个国家的跨境诈骗案件',
      amount: '￥2,000,000',
      duration: '3个月'
    },
    {
      id: 2,
      title: '二元期权骗局资金追回',
      category: 'financial',
      image: '/assets/images/1742986110.jpg',
      description: '协助受害者成功追回二元期权平台诈骗资金，打击跨国金融诈骗团伙',
      amount: '￥1,500,000',
      duration: '4个月'
    },
    {
      id: 3,
      title: '传销与庞氏骗局资金追回',
      category: 'fraud',
      image: '/assets/images/1742988567.jpg',
      description: '成功瓦解大型传销组织，帮助多名受害者追回投资款',
      amount: '￥3,000,000',
      duration: '6个月'
    },
    {
      id: 4,
      title: '跨国投资骗局维权与资金追回',
      category: 'financial',
      image: '/assets/images/1742985793.jpg',
      description: '通过国际司法合作，成功追回海外投资诈骗资金',
      amount: '￥5,000,000',
      duration: '8个月'
    },
    {
      id: 5,
      title: '成功追回刷单诈骗资金',
      category: 'cyber',
      image: '/assets/images/1742988815.jpg',
      description: '帮助电商刷单受害者追回损失，并协助警方打击诈骗团伙',
      amount: '￥800,000',
      duration: '2个月'
    },
    {
      id: 6,
      title: '成功追回信用卡诈骗资金',
      category: 'financial',
      image: '/assets/images/1742463776.jpg',
      description: '协助受害者追回信用卡诈骗资金，并提供相关法律支持',
      amount: '￥500,000',
      duration: '1个月'
    }
  ];

  const categories = [
    { id: 'all', name: '全部案例' },
    { id: 'financial', name: '金融诈骗' },
    { id: 'cyber', name: '网络诈骗' },
    { id: 'fraud', name: '传销诈骗' }
  ];

  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(c => c.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">成功案例</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们已经帮助众多受害者成功追回损失，以下是部分典型案例
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 text-sm font-medium first:rounded-l-md last:rounded-r-md border
                  ${filter === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map(caseItem => (
            <div key={caseItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[16/9]">
                <LazyImage
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 mb-4">{caseItem.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>追回金额: {caseItem.amount}</span>
                  <span>用时: {caseItem.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">暂无相关案例</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cases;