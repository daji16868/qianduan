// src/pages/Help.jsx
import React, { useState } from 'react';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: '如何识别电信诈骗？',
      answer: '警惕陌生来电，不轻易透露个人信息，对方要求转账时要提高警惕。银行工作人员不会要求您提供账号密码。'
    },
    {
      question: '遇到诈骗后应该怎么办？',
      answer: '1. 立即冻结账户\n2. 保存相关证据\n3. 及时报警\n4. 联系我们的24小时紧急热线'
    },
    {
      question: '你们的服务收费标准是怎样的？',
      answer: '我们的收费标准根据案件类型和复杂程度有所不同，具体费用将在初步咨询后确定。我们承诺收费透明，无隐藏费用。'
    },
    {
      question: '追赃成功率是多少？',
      answer: '我们的整体追赃成功率超过60%，具体要视案件情况而定。我们会在接案前评估成功率，并如实告知客户。'
    }
  ];

  const articles = [
    {
      title: '防范电信诈骗指南',
      description: '详细介绍各类电信诈骗的特征和防范方法。',
      link: '/articles/telecom-fraud-prevention'
    },
    {
      title: '投资理财防骗手册',
      description: '教您如何识别虚假投资项目，保护自己的财产安全。',
      link: '/articles/investment-fraud-prevention'
    },
    {
      title: '网络诈骗最新动态',
      description: '及时更新最新的网络诈骗手法和防范措施。',
      link: '/articles/online-fraud-updates'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">帮助中心</h1>
          <p className="text-xl opacity-90">为您提供全面的反诈骗知识和帮助</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="搜索常见问题..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            常见问题
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'articles'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            帮助文章
          </button>
        </div>

        {activeTab === 'faq' ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs
              .filter(faq =>
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {articles
              .filter(article =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <a
                    href={article.link}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    阅读更多 →
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;