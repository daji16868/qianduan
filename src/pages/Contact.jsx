// src/pages/Contact.jsx
import React, { useState } from 'react';

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

  const offices = [
    {
      city: '北京总部',
      address: '北京市朝阳区东三环中路XX号XX大厦XX层',
      phone: '010-XXXX-XXXX',
      email: 'beijing@ga-fg.com'
    },
    {
      city: '上海分部',
      address: '上海市浦东新区陆家嘴XX路XX号XX大厦XX层',
      phone: '021-XXXX-XXXX',
      email: 'shanghai@ga-fg.com'
    },
    {
      city: '深圳分部',
      address: '深圳市南山区高新科技园XX路XX号XX大厦XX层',
      phone: '0755-XXXX-XXXX',
      email: 'shenzhen@ga-fg.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl opacity-90">随时为您提供专业的反欺诈服务支持</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">办公地点</h2>
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3">{office.city}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-start">
                      <span className="mr-2">📍</span>
                      {office.address}
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2">📞</span>
                      {office.phone}
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2">📧</span>
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">24小时紧急热线</h3>
              <p className="text-red-600 text-2xl font-bold">400-888-8888</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">在线咨询</h2>
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