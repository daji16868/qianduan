// src/pages/Services.jsx
import React from 'react';
import LazyImage from '../components/common/LazyImage';

const Services = () => {
  // Service sections with images from mapping
  const services = [
    {
      id: 'enforcement',
      title: '全球执法合作',
      description: '联合国际刑警、各国警方、金融监管机构，协同破案',
      images: [
        '/assets/images/k1.jpg',
        '/assets/images/k2.jpg',
        '/assets/images/k3.jpg',
        '/assets/images/k4.jpg'
      ]
    },
    {
      id: 'legal',
      title: '全球律师联盟',
      description: '超过50+国家的专业律师提供跨境法律援助',
      images: [
        '/assets/images/y5.jpg',
        '/assets/images/y6.jpg',
        '/assets/images/y7.jpg',
        '/assets/images/y8.jpg'
      ]
    },
    {
      id: 'tracking',
      title: '跨境资金追踪',
      description: '与各国银行、金融机构合作，冻结非法资金，阻止诈骗分子转移资产',
      images: [
        '/assets/images/p1.jpg',
        '/assets/images/p2.jpg',
        '/assets/images/p3.jpg',
        '/assets/images/p4.jpg'
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
            alt="全球服务网络"
            className="w-full h-full object-cover object-center opacity-70"
            style={{ objectPosition: "center 85%" }}
            loading="eager"
            priority="high"
          />
        </div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold mb-4">全球服务网络</h1>
          <p className="text-xl max-w-2xl">
            依托全球反诈资源，为受害者提供专业、高效的维权服务
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-xl text-gray-600">{service.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.images.map((image, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <LazyImage
                    src={image}
                    alt={`${service.title} - Image ${idx + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">需要我们的帮助？</h2>
          <p className="text-xl mb-8">
            我们的专业团队随时准备为您提供援助，帮您追回损失
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
          >
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;