// src/pages/Blog.jsx
import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '博客标题 1',
      excerpt: '这是博客文章的摘要内容，描述文章的主要内容和要点。',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: '博客标题 2',
      excerpt: '这是博客文章的摘要内容，描述文章的主要内容和要点。',
      date: '2024-01-14',
    },
    // More posts...
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">博客资讯</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="text-blue-600 hover:text-blue-800">
                  阅读更多
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;