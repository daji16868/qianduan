// src/pages/Services.jsx
import React from 'react';

function Services() {
  const services = [
    {
      title: '电信诈骗追赃',
      description: '针对电信诈骗案件提供专业的资金追回服务，运用先进的技术手段追踪资金流向。',
      icon: '📱'
    },
    {
      title: '投资诈骗处理',
      description: '协助处理各类投资理财诈骗案件，通过法律手段维护受害者权益。',
      icon: '💰'
    },
    {
      title: '网络诈骗防范',
      description: '提供网络诈骗预防咨询，帮助个人和企业建立防诈骗体系。',
      icon: '🔒'
    },
    {
      title: '资产追踪',
      description: '使用专业工具追踪被骗资金流向，提高资金追回成功率。',
      icon: '🔍'
    },
    {
      title: '法律援助',
      description: '提供专业的法律咨询和诉讼支持，保障受害者合法权益。',
      icon: '⚖️'
    },
    {
      title: '紧急响应',
      description: '24小时紧急响应服务，第一时间处理诈骗案件。',
      icon: '🚨'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的服务</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            提供全方位的反欺诈服务，保护您的财产安全
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">专业团队</h3>
              <p className="text-gray-600">
                拥有经验丰富的法律专家和技术团队
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">快速响应</h3>
              <p className="text-gray-600">
                24小时待命，及时处理紧急情况
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">高效追赃</h3>
              <p className="text-gray-600">
                采用先进技术手段，提高追赃成功率
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;