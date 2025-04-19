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
          content: `
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
          tags: ['爱情诈骗', '网络安全', '防骗指南']
        },
        {
          id: 2,
          title: '常见税务骗局和帮助纳税人避免这些骗局的提示',
          image: '/assets/images/1742991999.jpg',
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
          tags: ['税务诈骗', '财务安全', '防骗指南']
        },
        {
          id: 3,
          title: '常见骗局有哪些，如何识别？',
          image: '/assets/images/1742990554.jpg',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <LazyImage
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center object-position-bottom opacity-70"
            style={{ objectPosition: "center 30%" }}
            loading="eager"
            priority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center text-sm md:text-base">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full mr-4 mb-2">{article.date}</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full mr-4 mb-2">作者：{article.author}</span>
              <div className="flex flex-wrap mt-2 md:mt-0">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-600 px-3 py-1 rounded-full mr-2 mb-2 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-li:text-gray-700 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
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
      </section>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">相关资讯</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].filter(relatedId => relatedId !== parseInt(id)).slice(0, 2).map(relatedId => {
              const relatedArticle = [
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
                }
              ].find(a => a.id === relatedId);
              
              return (
                <Link 
                  key={relatedId} 
                  to={`/blog/${relatedId}`} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 duration-300"
                >
                  <div className="relative h-56">
                    <LazyImage
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-sm text-white">{relatedArticle.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedArticle.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedArticle.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail; 