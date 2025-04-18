import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/assets/images/logo.png"
              alt="GA FG Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4 text-sm">
              致力于打击全球诈骗犯罪，维护受害者权益。
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center">
                <span className="mr-2">Tel:</span>
                <a href="tel:400-XXX-XXXX" className="hover:text-white">400-XXX-XXXX</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">Email:</span>
                <a href="mailto:contact@ga-fg.com" className="hover:text-white">contact@ga-fg.com</a>
              </p>
              <p>北京市朝阳区XX大厦</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">首页</Link></li>
              <li><Link to="/about" className="hover:text-white">关于我们</Link></li>
              <li><Link to="/cases" className="hover:text-white">成功案例</Link></li>
              <li><Link to="/services" className="hover:text-white">服务项目</Link></li>
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

          {/* Contact & QR Code */}
          <div>
            <h3 className="text-lg font-medium mb-4">关注我们</h3>
            <div className="flex items-center">
              <div className="bg-white p-2 w-24 rounded">
                <img 
                  src="/assets/images/qr-code.png"
                  alt="WeChat QR Code"
                  className="w-full"
                />
              </div>
              <div className="ml-4 text-sm text-gray-400">
                <p>扫描二维码</p>
                <p>关注公众号</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 全球反欺诈组织 版权所有
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white">隐私政策</Link>
              <Link to="/terms" className="hover:text-white">服务条款</Link>
              <Link to="/disclaimer" className="hover:text-white">免责声明</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;