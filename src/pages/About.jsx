// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">关于我们</h1>
          <p className="text-xl opacity-90">全球领先的反欺诈组织，致力于保护个人和企业权益</p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">我们的使命</h2>
            <p className="text-gray-700 leading-relaxed">
              通过专业的法律服务和先进的技术手段，为受害者提供最佳的追赃方案。我们致力于打击各类网络诈骗，
              保护客户的合法权益，维护公平正义。
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">核心价值观</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>专业性 - 拥有专业的法律团队和技术支持</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>高效性 - 快速响应，及时处理案件</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>可靠性 - 保证客户信息安全，提供可靠服务</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">专业律师</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">全天候服务</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们的团队</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="/assets/images/team-1.jpg" 
              alt="法律专家" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mb-2">张律师</h3>
            <p className="text-gray-600 text-center">资深法律顾问</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="/assets/images/team-2.jpg" 
              alt="技术专家" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mb-2">李工程师</h3>
            <p className="text-gray-600 text-center">技术总监</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="/assets/images/team-3.jpg" 
              alt="调查专家" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mb-2">王调查员</h3>
            <p className="text-gray-600 text-center">首席调查官</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;