// src/pages/Info.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../utils/animations';

const Info = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">反诈资讯中心</h1>
      
      <div className="grid gap-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">全球反诈维权服务</h2>
          <p className="text-gray-700 mb-6">
            全球诈骗犯罪日益猖獗，受害者往往面临跨国追踪难、法律诉讼复杂、资金追回无门等困境。为此，我们建立了一个覆盖全球的反诈骗执法与法律合作网络，联合国际刑警、各国执法机构、金融监管部门、知名律师事务所，为受害者提供全方位的维权支持。
          </p>
          <p className="text-gray-700 mb-6">
            我们的合作网络遍布北美、欧洲、亚洲、澳大利亚及其他主要金融市场，与多个国家的政府机构和法律团队紧密协作，通过区块链资金追踪、大数据分析、国际通缉、资产冻结等手段，我们大幅提高了追回被骗资金的成功率。
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">资金追回服务</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">专业团队支持</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>国际刑警合作</li>
                <li>跨境法律援助</li>
                <li>资金追踪定位</li>
                <li>资产冻结止付</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">快速响应流程</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>24小时快速立案</li>
                <li>专人全程跟进</li>
                <li>定期进度通报</li>
                <li>透明收费标准</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">隐私保护政策</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              我们非常重视您的个人信息安全，承诺依法保护您在使用我们服务时提供的个人信息。我们采取严格的数据安全措施：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>数据加密存储和传输</li>
              <li>严格的访问控制机制</li>
              <li>定期安全审计和评估</li>
              <li>员工保密培训和管理</li>
            </ul>
            <p>
              未经您的同意，我们不会向任何第三方分享您的个人信息，除非法律法规另有规定。
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">联系我们</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">24小时服务热线</h3>
              <p className="text-gray-700">
                电话：400-000-0000<br />
                邮箱：contact@ga-fg.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">在线咨询</h3>
              <p className="text-gray-700">
                工作时间：24小时在线<br />
                微信：GA-FG001
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Info;