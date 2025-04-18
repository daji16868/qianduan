// src/pages/Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: '张三',
      position: '首席执行官',
      description: '拥有多年行业经验，带领团队不断创新发展。',
    },
    {
      id: 2,
      name: '李四',
      position: '技术总监',
      description: '技术专家，负责公司技术战略规划和实施。',
    },
    // More team members...
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">团队介绍</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-blue-600 mb-4">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;