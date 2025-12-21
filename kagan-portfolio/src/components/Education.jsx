import React from 'react';
import { Card } from './ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Information Systems',
      institution: 'Technical University of Munich (TUM)',
      location: 'Munich, Germany',
      status: 'Currently Pursuing',
      description: 'Specializing in AI, machine learning, database systems, and software engineering. Combining technical computer science expertise with business and management principles.'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-900 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span>{edu.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
