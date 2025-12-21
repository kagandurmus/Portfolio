import React from 'react';
import { Card } from './ui/card';
import { Database, Brain, Code2, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Orchestration',
      description: 'Designing and implementing intelligent AI systems'
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Optimizing data architecture and performance'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable applications from front to back'
    },
    {
      icon: Globe,
      title: 'Machine Learning',
      description: 'Creating ML models for real-world applications'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-8">
            I am currently working as an Assistant Researcher at the Technical University of Munich (TUM), 
            where I specialize in AI orchestration, database systems, and machine learning. My work focuses 
            on developing intelligent systems that bridge the gap between theoretical AI research and 
            practical applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            As a student of Information Systems at TUM, I combine technical expertise with business acumen 
            to create solutions that are not only technically sound but also commercially viable. I'm 
            particularly passionate about applying AI to finance and automation challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
