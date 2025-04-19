import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LazyImage from '../components/common/LazyImage';

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟从服务器获取文章数据
    const fetchArticle = () => {
      setLoading(true);
      
      // 这里使用硬编码的文章数据，实际应用中应该从API获取
      const articlesData = [
        {
          id: 1,
          title: '爱情陷阱揭秘："我们如何诈骗数百万美金"',
          image: '/assets/images/1742994741.jpg',
          views: 2499,
          content: `
            <p>实如其来的爱情和礼品，来自善于伪装力十足又专业成功的骗子人……这样看似简单的诱惑，却可能是"爱情陷阱"骗局背后的开始，近年来，全球各地沦陷爱情骗局受害者的损失达到数亿美金。</p>
            
            <p>在骗子门庭林苾的诈骗风险中，是婚恋的犯罪例证：许多网上诈骗分子有某类似入口等质量，被迫在东南亚如缅甸的边境地区进行欺诈活动。</p>
            
            <p>BBC国际频道的调查报告详细调查了内部运作，并独家采访了一位前诈骗集团专家，他揭露了他们读者受害者最常见的各种情景。</p>
            
            <p>诈骗有组织的骗徒是"旅复"骗局为情感诈骗，每出嫌犯且受害者通上电话，继们给合同后，把目标养成上，实施不道德的手多实现。</p>
            
            <h2>爱情陷阱诈骗手法详解</h2>
            <p>爱情陷阱是当今最常见也是最具欺骗性的诈骗手段之一，诈骗分子利用受害者对爱情的憧憬和信任，实施精心设计的骗局。</p>
            <p>诈骗团伙通常会创建虚假的社交媒体账号，使用盗用的照片和虚构的身份，瞄准对方可能感兴趣的特质。他们会花费数周甚至数月时间与受害者建立信任关系，通过频繁的通讯、甜言蜜语和虚假承诺来培养感情依赖。</p>
            <h3>常见的诈骗手段包括：</h3>
            <ul>
              <li>虚构紧急情况需要资金援助</li>
              <li>投资机会邀请，承诺丰厚回报</li>
              <li>要求支付旅行费用以见面</li>
              <li>声称被扣留需要支付保释金</li>
            </ul>
            <h3>防范建议：</h3>
            <ul>
              <li>警惕从未见过面的网络恋人</li>
              <li>对方急于表白或进展过快应提高警惕</li>
              <li>不要向网络恋人转账汇款</li>
              <li>利用反向图片搜索验证对方照片真实性</li>
              <li>与朋友家人分享交往情况，听取客观意见</li>
            </ul>
            <p>记住：真正的爱情不会以金钱为条件。如果您怀疑自己遭遇爱情诈骗，请立即停止与对方联系，并向有关部门报案。</p>
          `,
          date: '2025-03-26',
          author: '张安全',
          authorTitle: '金融诈骗',
          authorDesc: '全球反欺诈组织的专一位有着丰富经验的人，提供专业法律援助。',
          authorAvatar: '/assets/images/avatar1.jpg',
          tags: ['爱情诈骗', '网络安全', '防骗指南']
        },
        {
          id: 2,
          title: '常见税务骗局和帮助纳税人避免这些骗局的提示',
          image: '/assets/images/1742991999.jpg',
          views: 1875,
          content: `
            <h2>税务诈骗手法详解</h2>
            <p>税务诈骗是一种常见的金融欺诈行为，诈骗分子通常冒充税务机关人员，利用纳税人对税务问题的恐惧和不熟悉，实施各种骗局。</p>
            <h3>常见的税务诈骗手段包括：</h3>
            <ul>
              <li>电话诈骗：冒充税务机关工作人员，声称受害者有税务违规</li>
              <li>虚假退税服务：承诺能获取更多退税，但收取高额费用</li>
              <li>身份盗窃：窃取个人信息提交虚假退税申请</li>
              <li>虚假税务文件：发送看似官方的虚假税务通知或缴款单</li>
            </ul>
            <h3>防范建议：</h3>
            <ul>
              <li>官方税务机关不会通过电话或短信要求支付税款</li>
              <li>不要点击可疑邮件中的链接或下载附件</li>
              <li>查询税务状态请通过官方网站或热线</li>
              <li>妥善保管个人税务信息和身份证明材料</li>
              <li>如收到可疑税务通知，直接联系官方税务部门核实</li>
            </ul>
            <p>保护自己免受税务诈骗，最重要的是了解税务机关的工作方式，掌握辨别真伪的能力，遇到可疑情况时不急于回应，先通过官方渠道核实。</p>
          `,
          date: '2025-03-25',
          author: '李财税',
          authorTitle: '税务专家',
          authorDesc: '全球反欺诈组织的税务诈骗专家，提供专业税务咨询服务。',
          authorAvatar: '/assets/images/avatar2.jpg',
          tags: ['税务诈骗', '财务安全', '防骗指南']
        },
        {
          id: 3,
          title: '常见骗局有哪些，如何识别？',
          image: '/assets/images/1742990554.jpg',
          views: 3621,
          content: `
            <h2>2025年最新流行诈骗手法全解析</h2>
            <p>随着科技的发展，诈骗手法也在不断升级，从传统的电话诈骗到如今的AI语音克隆诈骗，诈骗分子的手段越来越隐蔽和技术化。</p>
            <h3>当前流行的诈骗手法包括：</h3>
            <ul>
              <li>AI语音克隆诈骗：利用AI技术模仿亲友声音进行诈骗</li>
              <li>投资理财诈骗：承诺高回报的虚假投资项目</li>
              <li>虚假购物网站：外观与正规网站相似但实为钓鱼网站</li>
              <li>社交媒体账号盗用：盗用亲友账号实施诈骗</li>
              <li>虚假中奖通知：声称中奖但要求支付手续费</li>
              <li>技术支持诈骗：冒充技术支持人员远程控制电脑</li>
            </ul>
            <h3>识别诈骗的一般特征：</h3>
            <ul>
              <li>要求紧急付款或转账</li>
              <li>承诺不切实际的高回报</li>
              <li>催促快速决定，制造紧迫感</li>
              <li>要求使用非常规支付方式</li>
              <li>存在语法或拼写错误的官方沟通</li>
              <li>未经请求的中奖或优惠通知</li>
            </ul>
            <p>防范诈骗的最佳方式是保持警惕，不轻信陌生人，对任何要求个人信息或财务操作的请求都要进行核实，养成良好的网络安全习惯，定期更新密码和安全软件。</p>
          `,
          date: '2025-03-24',
          author: '王安全',
          authorTitle: '网络安全专家',
          authorDesc: '全球反欺诈组织的网络安全专家，擅长分析各类诈骗手法。',
          authorAvatar: '/assets/images/avatar3.jpg',
          tags: ['诈骗识别', '网络安全', '防骗技巧']
        }
      ];

      // 根据ID找到对应文章
      const foundArticle = articlesData.find(article => article.id === parseInt(id));
      setArticle(foundArticle);
      setLoading(false);
    };

    fetchArticle();
  }, [id]);

  // 获取所有文章用于显示相关文章
  const relatedArticles = [
    {
      id: 1,
      title: '爱情陷阱揭秘："我们如何诈骗数百万美金"',
      image: '/assets/images/1742994741.jpg',
      description: '揭露跨国爱情诈骗团伙的作案手法，教你如何识别和防范',
      date: '2025-03-26'
    },
    {
      id: 2,
      title: '常见税务骗局和帮助纳税人避免这些骗局的提示',
      image: '/assets/images/1742991999.jpg',
      description: '详解各类税务诈骗手段，提供实用防范建议',
      date: '2025-03-25'
    },
    {
      id: 3,
      title: '常见骗局有哪些，如何识别？',
      image: '/assets/images/1742990554.jpg',
      description: '全面解析当前流行的诈骗手段，提供详细识别方法',
      date: '2025-03-24'
    },
    {
      id: 4,
      title: '如何应对网络诈骗，保护个人资产?',
      image: '/assets/images/1742988567.jpg',
      description: '详细介绍防范网络诈骗的方法和技巧',
      date: '2025-03-23'
    },
    {
      id: 5,
      title: '揭露社交媒体骗局：外币"生活方式"骗局',
      image: '/assets/images/1742988815.jpg',
      description: '揭露社交媒体上常见的外币投资骗局',
      date: '2025-03-22'
    }
  ].filter(article => article.id !== parseInt(id)).slice(0, 5);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="mb-8">抱歉，您请求的文章不存在或已被删除。</p>
          <Link to="/info" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            返回资讯页面
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="w-full bg-blue-900 text-white py-3">
        <div className="container mx-auto px-4 text-center text-sm">
          <span>全球反欺诈组织，同犯诈骗，追回被骗资金！</span>
          <a href="/contact" className="ml-4 underline">联系我们</a>
        </div>
      </div>

      {/* Blog Detail Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {article.date}
            </span>
            <span className="mx-3">|</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {article.views}
            </span>
            <span className="mx-3">|</span>
            <span>全球反欺诈组织</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Article Content */}
          <div className="w-full md:w-2/3">
            {/* Main Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <LazyImage
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Text */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <Link 
                  to="/info" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  返回资讯列表
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            {/* Author Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src={article.authorAvatar || '/assets/images/avatar1.jpg'} alt={article.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{article.author}</h3>
                  <p className="text-sm text-gray-600">{article.authorTitle || '金融诈骗专家'}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{article.authorDesc || '全球反欺诈组织的专一位有着丰富经验的人，提供专业法律援助。'}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                联系咨询
              </button>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">相关文章</h3>
              <div className="space-y-4">
                {relatedArticles.map(relArticle => (
                  <div key={relArticle.id} className="group">
                    <Link to={`/blog/${relArticle.id}`} className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition">
                      <div className="w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                        <LazyImage
                          src={relArticle.image}
                          alt={relArticle.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium group-hover:text-blue-600 line-clamp-2">{relArticle.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{relArticle.date}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 