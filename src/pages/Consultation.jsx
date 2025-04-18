// src/pages/Consultation.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    description: '',
    files: [],
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? Array.from(files) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccessMessage('咨询请求已提交成功，我们会尽快与您联系！');
      setFormData({
        name: '',
        phone: '',
        email: '',
        caseType: '',
        description: '',
        files: [],
        agreement: false
      });
    } catch (error) {
      setErrorMessage('提交失败，请稍后重试或直接拨打咨询热线');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: '初步评估',
      description: '专业顾问对您的案件进行初步评估，分析追回可能性',
      icon: '📋'
    },
    {
      title: '方案制定',
      description: '根据案件具体情况，为您量身定制追赃方案',
      icon: '📝'
    },
    {
      title: '全程跟进',
      description: '专人负责，全程跟进案件进展，及时反馈',
      icon: '👥'
    },
    {
      title: '法律支持',
      description: '提供专业的法律咨询和支持服务',
      icon: '⚖️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>反诈咨询服务 - GA FG</title>
        <meta name="description" content="专业的反诈咨询服务，为您提供一站式反诈骗解决方案" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">反诈咨询服务</h1>
          <p className="text-xl opacity-90">专业团队为您提供一站式反诈骗解决方案</p>
        </div>
      </div>

      {/* Service Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">在线咨询</h2>
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}
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
                <label className="block text-gray-700 mb-2">联系电话</label>
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
                <label className="block text-gray-700 mb-2">案件类型</label>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">请选择案件类型</option>
                  <option value="telecom">电信诈骗</option>
                  <option value="investment">投资诈骗</option>
                  <option value="online">网络诈骗</option>
                  <option value="other">其他类型</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">案件描述</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="请详细描述您遇到的问题，包括时间、金额等关键信息..."
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">上传相关材料（选填）</label>
                <input
                  type="file"
                  name="files"
                  onChange={handleChange}
                  multiple
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                />
                <p className="text-sm text-gray-500 mt-1">
                  支持格式：PDF、JPG、PNG、DOC，单个文件不超过10MB
                </p>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <label className="ml-2 text-sm text-gray-600">
                  我同意将我的个人信息用于案件咨询，并已阅读和同意
                  <a href="/privacy" className="text-blue-600 hover:underline">隐私政策</a>
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-white transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? '提交中...' : '提交咨询'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">24小时紧急热线</h2>
          <p className="text-lg mb-4">如果您遇到紧急情况，请立即拨打：</p>
          <div className="text-3xl font-bold text-red-600">400-888-8888</div>
        </div>
      </div>

      {/* Privacy Guarantee */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">隐私保障承诺</h2>
          <div className="space-y-4 text-gray-600">
            <p>• 所有咨询信息严格保密，仅用于案件处理</p>
            <p>• 专业的数据加密存储和传输方案</p>
            <p>• 严格的内部信息访问权限控制</p>
            <p>• 完善的隐私保护制度和员工培训体系</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;