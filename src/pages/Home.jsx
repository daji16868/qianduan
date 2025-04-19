import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/common/LazyImage';

const Home = () => {
  // Hero section images
  const heroImage = {
    src: '/assets/images/banner28.jpg',
    alt: '全球反欺诈组织专业团队',
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
      description: '专业团队全方位调查取证'
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

  // 案例数据
  const successCases = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <LazyImage
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            loading="eager"
            priority={heroImage.priority}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 text-shadow-lg">
              顶级律师团队坐镇
            </h1>
            <p className="text-xl mb-8 text-shadow">
              联手全球顶级律师，跨境追查诈骗案件。致力于打击全球诈骗犯罪，维护受害者权益。无论资金损失金额大小，我们的专业团队将利用法律手段，锁定诈骗分子，最大化追回损失。
            </p>
            <Link 
              to="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </section>

      {/* 成功案例部分 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">成功案例</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            我们已经帮助众多受害者成功追回损失，以下是部分典型案例
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map(caseItem => (
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
          
          <div className="text-center mt-10">
            <Link 
              to="/cases"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              查看更多案例
            </Link>
          </div>
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
                    style={{ objectFit: "cover" }}
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
              <h3 className="text-4xl font-bold mb-2">85%</h3>
              <p>追回成功率</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>合作国家</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
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
            我们的专业团队24/7为您提供援助，帮助您追回损失
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
