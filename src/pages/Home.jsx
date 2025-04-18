import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [recoveredAmount, setRecoveredAmount] = useState(5872634);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setRecoveredAmount(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">顶级律师团队坐镇</h1>
            <p className="text-xl mb-8">
              联手全球顶级律师，跨境追查诈骗案件。无论你被骗金额大小、涉及国家多少，我们的专业团队将利用法律手段，锁定诈骗分子，最大化追回损失。
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              免费咨询
            </button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">98%</h3>
              <p className="text-gray-600 mt-2">追回成功率</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">40+</h3>
              <p className="text-gray-600 mt-2">多国执法合作</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">1M+</h3>
              <p className="text-gray-600 mt-2">诈骗黑名单数据库</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">3000+</h3>
              <p className="text-gray-600 mt-2">诈骗案例分析</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img src="/assets/images/ceo.jpg" alt="James Carter" className="w-full h-full object-cover" />
            </div>
            <blockquote className="text-2xl italic text-gray-700 mb-4">
              "我们不仅要追回你的损失，更要让诈骗分子无处藏身！"
            </blockquote>
            <p className="text-blue-900 font-semibold">By James Carter (全球反欺诈组织创始人)</p>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            我们为受害者提供损失恢复解决方案和赔偿服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "工作求职诈骗维权", cases: "12000+", icon: "x1.jpg" },
              { title: "投资诈骗维权", cases: "4000+", icon: "x2.jpg" },
              { title: "网络诈骗维权", cases: "6200+", icon: "x3.jpg" },
              { title: "爱情骗局维权", cases: "1500+", icon: "x4.jpg" },
              { title: "加密货币诈骗维权", cases: "4800+", icon: "x5.jpg" },
              { title: "信用卡诈骗维权", cases: "5000+", icon: "x6.jpg" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <img src={`/assets/images/${service.icon}`} alt={service.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">成功案例：{service.cases}</p>
                <button className="text-red-600 hover:text-red-700 font-semibold">
                  我要咨询 →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Recovery Data Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">最新追回数据实时更新</h2>
            <div className="text-5xl font-bold mb-6">
              ${recoveredAmount.toLocaleString()}
            </div>
            <h3 className="text-xl mb-6">2025年迄今追回受害者资金</h3>
            <p className="max-w-2xl mx-auto">
              我们通过跨国执法合作、资产追踪、群体诉讼等手段，帮助全球受害者追回损失，让犯罪分子无处可逃。每一笔追回的资金，都是受害者权益的胜利！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">荣誉奖项</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <img 
                  src={`/assets/images/q${num}.png`}
                  alt={`Award ${num}`}
                  className="h-24 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Lawyer Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-blue-900 mb-8"
            >
              全球顶级律师团队
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 mb-12"
            >
              我们的律师团队由全球300+ 资深律师组成，覆盖美国、英国、加拿大、欧洲、亚洲等40+国家和地区。他们精通金融诈骗、投资欺诈、跨国追讨、互联网犯罪等法律事务，与银行和支付平台紧密合作，确保每个案件都能得到专业处理。
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-900">15Y+</h3>
                <p className="text-gray-600">维权经验</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-900">3000+</h3>
                <p className="text-gray-600">今年成功案件</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-900">98%</h3>
                <p className="text-gray-600">胜诉率</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-900">300+</h3>
                <p className="text-gray-600">资深律师团队</p>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              立即咨询
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;