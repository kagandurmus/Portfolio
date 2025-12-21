import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'R', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++']
    },
    {
      category: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Langchain', 'Hugging Face']
    },
    {
      category: 'Backend & Databases',
      skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'AWS', 'Azure', 'Kubernetes', 'CI/CD', 'Linux']
    },
    {
      category: 'Specializations',
      skills: ['AI Orchestration', 'Database Optimization', 'ML Model Deployment', 'REST APIs', 'Financial Analysis']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
