import React from 'react';
import { Card } from './ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chief Financial Officer',
      company: 'Gemeinnütziger Verein',
      location: 'Munich, Germany',
      period: 'Current Position',
      responsibilities: [
        'Leading financial strategy and operations for a non-profit organization',
        'Managing budgets, financial reporting, and compliance',
        'Overseeing resource allocation and financial planning',
        'Ensuring transparency and accountability in financial management',
        'Strategic planning and decision-making for organizational growth'
      ]
    },
    {
      title: 'Assistant Researcher',
      company: 'Technical University of Munich (TUM)',
      location: 'Munich, Germany',
      period: 'Current Position',
      responsibilities: [
        'Conducting research in AI orchestration and machine learning applications',
        'Designing and implementing database optimization strategies',
        'Developing intelligent systems for automated workflows',
        'Collaborating with academic teams on cutting-edge AI projects',
        'Publishing research findings and contributing to academic papers'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-900 font-medium mb-1">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-gray-600 leading-relaxed flex items-start"
                      >
                        <span className="text-blue-900 mr-2 mt-1.5 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
