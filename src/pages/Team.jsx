// src/pages/Team.jsx
import React from 'react';
import LazyImage from '../components/common/LazyImage';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Robert Sinclair',
      title: '律师主席 / 金融欺诈诉讼专家',
      image: '/assets/images/1742992387.jpg',
      description: '拥有20年金融诈骗案件处理经验，曾成功办理上百起跨国诈骗案件'
    },
    {
      id: 2,
      name: '彭馥',
      title: '合伙人 / 数字货币犯罪诉讼律师',
      image: '/assets/images/1742993577.jpg',
      description: '专注于加密货币诈骗案件，具有丰富的数字资产追踪经验'
    },
    {
      id: 3,
      name: '黄建雯',
      title: '合伙人 / 资深网络诈骗诉讼律师',
      image: '/assets/images/1742994989.jpg',
      description: '擅长处理网络诈骗案件，为受害者提供专业的法律援助'
    },
    {
      id: 4,
      name: 'Riley Ingham',
      title: '合伙人 / 资深跨境法律诉讼专家',
      image: '/assets/images/1742993624.jpg',
      description: '精通国际法，在跨境资产追回方面有丰富经验'
    },
    {
      id: 5,
      name: '小林莉央',
      title: '合伙人 / 加密货币欺诈律师',
      image: '/assets/images/1742989665.jpg',
      description: '专注区块链和加密货币相关的诈骗案件调查与维权'
    },
    {
      id: 6,
      name: '姚磊',
      title: '合伙人 / 国际金融监管合规专家',
      image: '/assets/images/1742989430.jpg',
      description: '负责与各国监管机构的协调合作，推进跨境案件处理'
    },
    {
      id: 7,
      name: '栾剑琦',
      title: '合伙人 / 资产追踪专家',
      image: '/assets/images/1742988502.jpg',
      description: '专长于跨境资金流向分析和资产追踪'
    },
    {
      id: 8,
      name: 'Victoria Chen',
      title: '合伙人 / 国际法务总监',
      image: '/assets/images/1742992071.jpg',
      description: '负责国际法律事务协调和跨境案件策略制定'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">我们的团队</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            由资深律师、金融专家、技术专家组成的专业团队，为受害者提供全方位的法律援助
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                <LazyImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-blue-900 text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">300+</h3>
              <p>专业律师</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>合作国家</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p>案件胜诉率</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;