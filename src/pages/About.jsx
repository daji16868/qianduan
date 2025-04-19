// src/pages/About.jsx
import React from 'react';
import LazyImage from '../components/common/LazyImage';

const About = () => {
  // Background images from mapping
  const backgroundImages = [
    {
      src: '/assets/images/bk1.jpg',
      alt: 'Global Anti-Fraud Organization background'
    },
    {
      src: '/assets/images/bk2.jpg',
      alt: 'Our mission background'
    },
    {
      src: '/assets/images/bk3.jpg',
      alt: 'Our vision background'
    }
  ];

  // Company info image
  const companyImage = {
    src: '/assets/images/pzn.jpg',
    alt: '全球反欺诈组织总部'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <LazyImage
            src="/assets/images/b1.jpg"
            alt="关于我们背景"
            className="w-full h-full object-cover object-center object-position-bottom opacity-70"
            style={{ objectPosition: "center 85%" }}
            loading="eager"
            priority="high"
          />
        </div>
        <div className="relative container mx-auto px-6 py-32">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-xl max-w-2xl">
            全球追踪，精准打击诈骗犯罪
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
              <p className="text-lg text-gray-600 mb-6">
                我们深知，许多受害者因诈骗手段隐蔽、诈骗分子藏身海外、缺乏法律支持等原因，难以追回损失。因此，我们与国际刑警、各国执法机构、全球律师事务所紧密合作，依托大数据分析、金融追踪、群体诉讼等手段，全力打击金融欺诈，追回被骗资产。
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <LazyImage
                src={backgroundImages[1].src}
                alt="Our mission"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <LazyImage
                  src={companyImage.src}
                  alt={companyImage.alt}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">全球化布局</h2>
              <p className="text-lg text-gray-600 mb-6">
                我们在全球主要金融中心设有办事处，与多个国家的政府机构和法律团队保持密切合作。通过跨境执法合作、资产追踪、国际诉讼等手段，我们为受害者提供全方位的法律援助和资金追回服务。
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  50+ 合作国家
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  300+ 专业律师
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  85% 追回成功率
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
