import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600">
        <div className="container mx-auto px-6 py-3 text-center">
          <span className="font-bold">24/7 紧急求助热线：</span>
          <a href="tel:+86-400-XXX-XXXX" className="underline ml-2">400-XXX-XXXX</a>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <img 
              src="/assets/images/logo-white.png"
              alt="GA FG Logo"
              className="h-12 mb-4"
            />
            <h3 className="text-lg font-bold mb-4">全球反欺诈组织</h3>
            <p className="text-gray-300 mb-4">
              致力于打击全球诈骗犯罪，维护受害者权益，为受害者提供专业的法律援助和资金追回服务。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">关于我们</Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-white transition-colors">成功案例</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">服务项目</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">反诈资讯</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white transition-colors">帮助中心</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>400-XXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@ga-fg.com</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>总部地址：北京市朝阳区XX大厦</span>
              </li>
            </ul>
          </div>

          {/* WeChat QR Code */}
          <div>
            <h3 className="text-lg font-bold mb-4">关注我们</h3>
            <div className="bg-white p-2 w-32 rounded">
              <img 
                src="/assets/images/qrcode.png"
                alt="WeChat QR Code"
                className="w-full"
              />
            </div>
            <p className="mt-2 text-sm text-gray-300">
              扫描二维码关注微信公众号
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 全球反欺诈组织. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              隐私政策
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              服务条款
            </Link>
            <Link to="/disclaimer" className="text-gray-300 hover:text-white text-sm transition-colors">
              免责声明
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-xs text-gray-400 text-center">
          免责声明：本组织提供的所有服务仅供参考，不构成任何法律建议。具体法律事务请咨询专业律师。
        </div>
      </div>
    </footer>
  );
};

export default Footer;