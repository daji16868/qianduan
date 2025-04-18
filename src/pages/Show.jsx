// src/pages/Show.jsx
import React from 'react';

const Show = () => {
  const services = [
    {
      id: 1,
      title: '服务项目 1',
      description: '这是服务项目的详细描述，介绍我们提供的专业服务内容。',
    },
    {
      id: 2,
      title: '服务项目 2',
      description: '这是服务项目的详细描述，介绍我们提供的专业服务内容。',
    },
    // More services...
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">服务展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;