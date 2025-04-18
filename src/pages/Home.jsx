import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/common/LazyImage';

const Home = () => {
  // Hero section images
  const heroImage = {
    src: '/assets/images/b3.jpg',
    alt: 'Hero background image',
    priority: 'high'
  };

  // Service/Feature images
  const serviceImages = [
    {
      src: '/assets/images/k1.jpg',
      alt: '资金追回服务',
      title: '资金追回服务',
      description: '通过法律手段追回被骗资金'
    },
    {
      src: '/assets/images/k2.jpg',
      alt: '跨境合作',
      title: '跨境合作', 
      description: '与多国执法机构合作打击诈骗'
    },
    {
      src: '/assets/images/k3.jpg',
      alt: '法律援助',
      title: '法律援助',
      description: '专业律师团队提供法律支持'
    },
    {
      src: '/assets/images/k4.jpg', 
      alt: '案件调查',
      title: '案件调查',
      description: '全方位调查取证'
    }
  ];

  // Award/Recognition images
  const awardImages = [
    '/assets/images/q1.png',
    '/assets/images/q2.png', 
    '/assets/images/q3.png',
    '/assets/images/q4.png',
    '/assets/images/q5.png',
    '/assets/images/q6.png',
    '/assets/images/q7.png',
    '/assets/images/q8.png'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[2.5/1] max-h-[600px] bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <LazyImage
            src={heroImage.src}
            alt={heroImage.alt}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            loading="eager"
            priority={heroImage.priority}
          />
        </div>
        
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold mb-6">
            全球反欺诈组织
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            致力于打击全球诈骗犯罪，维护受害者权益。无论资金损失金额大小，我们的专业团队将利用法律手段，锁定诈骗分子，最大化追回损失。
          </p>
          <Link 
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300"
          >
            立即咨询
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            我们的服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceImages.map((service) => (
              <div key={service.src} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <LazyImage
                    src={service.src}
                    alt={service.alt}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p>追回成功率</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>合作国家</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">300+</h3>
              <p>专业律师</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            荣誉认证
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awardImages.map((src, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm aspect-square">
                <LazyImage
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            需要帮助？立即联系我们
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            我们的专业团队随时为您提供援助，帮您追回损失
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            免费咨询
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;