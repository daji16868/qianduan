// src/pages/Info.jsx
import React from 'react';
import LazyImage from '../components/common/LazyImage';
import { Link } from 'react-router-dom';

const Info = () => {
  // Blog/News articles with images
  const articles = [
    {
      id: 1,
      title: '爱情陷阱揭秘："我们如何诈骗数百万美金"',
      image: '/assets/images/1742994741.jpg',
      description: '揭露跨国爱情诈骗团伙的作案手法，教你如何识别和防范',
      date: '2025-03-26'
    },
    {
      id: 2,
      title: '常见税务骗局和帮助纳税人避免这些骗局的提示',
      image: '/assets/images/1742991999.jpg',
      description: '详解各类税务诈骗手段，提供实用防范建议',
      date: '2025-03-26'
    },
    {
      id: 3,
      title: '常见骗局有哪些，如何识别？',
      image: '/assets/images/1742990554.jpg',
      description: '全面解析当前流行的诈骗手段，提供详细识别方法',
      date: '2025-03-26'
    }
  ];

  // Help center categories
  const helpCategories = [
    {
      title: '防骗指南',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        '识别诈骗手段和特征',
        '保护个人信息安全',
        '安全投资理财建议',
        '网络交易防骗技巧'
      ]
    },
    {
      title: '紧急处置',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: [
        '立即报警和报案',
        '冻结相关账户',
        '收集证据材料',
        '联系专业机构'
      ]
    },
    {
      title: '维权指南',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      items: [
        '法律援助渠道',
        '资金追回流程',
        '跨境维权方法',
        '群体诉讼指南'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <LazyImage
            src="/assets/images/b1.jpg"
            alt="反诈资讯中心"
            className="w-full h-full object-cover object-center opacity-70"
            style={{ objectPosition: "center 85%" }}
            loading="eager"
            priority="high"
          />
        </div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold mb-4">反诈资讯中心</h1>
          <p className="text-xl max-w-2xl">
            提供最新反诈资讯、防骗指南和维权帮助，守护您的财产安全
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">最新资讯</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <LazyImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">帮助中心</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">24/7 紧急求助热线</h2>
          <a
            href="tel:400-XXX-XXXX"
            className="text-3xl font-bold hover:text-gray-200 transition duration-300"
          >
            400-XXX-XXXX
          </a>
          <p className="mt-4 text-lg">
            如果您遭遇诈骗，请立即拨打我们的紧急求助热线获取帮助
          </p>
        </div>
      </section>
    </div>
  );
};

export default Info;