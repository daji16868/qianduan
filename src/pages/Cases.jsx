// src/pages/Cases.jsx
import React, { useState } from 'react';

function Cases() {
  const [filter, setFilter] = useState('all');

  const cases = [
    {
      id: 1,
      title: '跨境电信诈骗案件',
      category: 'telecom',
      amount: '￥500,000',
      status: '已追回',
      description: '成功协助客户追回被跨境电信诈骗的50万元资金。',
      date: '2023-12-15'
    },
    {
      id: 2,
      title: '投资理财诈骗案件',
      category: 'investment',
      amount: '￥2,000,000',
      status: '处理中',
      description: '正在处理一起大规模投资理财诈骗案件，涉及多名受害者。',
      date: '2024-01-20'
    },
    // More cases...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">案例展示</h1>
          <p className="text-xl opacity-90">查看我们成功处理的反欺诈案例</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            全部案例
          </button>
          <button
            onClick={() => setFilter('telecom')}
            className={`px-4 py-2 rounded-full ${
              filter === 'telecom'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            电信诈骗
          </button>
          <button
            onClick={() => setFilter('investment')}
            className={`px-4 py-2 rounded-full ${
              filter === 'investment'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            投资诈骗
          </button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases
            .filter(c => filter === 'all' || c.category === filter)
            .map(caseItem => (
              <div
                key={caseItem.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      caseItem.status === '已追回' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{caseItem.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>涉案金额: {caseItem.amount}</span>
                    <span>{caseItem.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Cases;