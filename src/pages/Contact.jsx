// src/pages/Contact.jsx
import React, { useState } from 'react';
import LazyImage from '../components/common/LazyImage';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 新增联系卡片数据
  const contactCards = [
    {
      icon: 'location',
      title: '总律师地址',
      content: '55 Tiong Bahru Rd, #01-59, Singapore 160055'
    },
    {
      icon: 'email',
      title: '给我们发电子邮件',
      content: '我们密切关注请求并致力于在 24 小时内回复所有询问。'
    },
    {
      icon: 'phone',
      title: '联系我们',
      content: '让我们共同努力，实现一个目标——保持联系！'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner Image */}
      <div className="relative h-[400px] overflow-hidden">
        <LazyImage
          src="/assets/images/banner28.jpg"
          alt="联系我们"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
          loading="eager"
          priority="high"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl text-center max-w-3xl px-4">全球追踪，精准打击诈骗犯罪</p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="mb-6 text-center">
                {card.icon === 'location' && (
                  <div className="inline-block p-4 rounded-full bg-gray-100 text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
                {card.icon === 'email' && (
                  <div className="inline-block p-4 rounded-full bg-gray-100 text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {card.icon === 'phone' && (
                  <div className="inline-block p-4 rounded-full bg-gray-100 text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">在线咨询</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">电子邮箱</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">电话</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">咨询内容</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  提交咨询
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;