import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/images/logo2.png"
              alt="GA FG Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4 text-sm">
            全球反诈组织（GA-FO）是一家致力于打击跨国诈骗、追回受害者损失的国际机构。我们联合国际刑警、顶级律师事务所、政府监管机构，通过法律诉讼、金融冻结、资产追踪等手段，帮助全球受害者维权。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">首页</Link></li>
              <li><Link to="/about" className="hover:text-white">关于我们</Link></li>
              <li><Link to="/cases" className="hover:text-white">成功案例</Link></li>
              <li><Link to="/services" className="hover:text-white">服务项目</Link></li>
              <li><Link to="/team" className="hover:text-white">团队成员</Link></li>
              <li><Link to="/help" className="hover:text-white">反诈咨询</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">服务项目</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>资金追回</li>
              <li>法律援助</li>
              <li>跨境合作</li>
              <li>犯罪预防</li>
              <li>安全咨询</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
             Copyright © 2025 全球反诈组织 版权所有
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
