import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Trading Bot - BotFather',
      subtitle: 'HackaTUM 2025',
      description: 'Developed an intelligent trading bot during HackaTUM 2025 hackathon. The bot leverages machine learning algorithms to analyze market trends and execute automated trading strategies with risk management protocols.',
      technologies: ['Python', 'Machine Learning', 'APIs', 'Data Analysis'],
      link: 'https://devpost.com/software/botfather',
      linkText: 'View on Devpost'
    },
    {
      title: 'Twenty CRM Automation Assistant',
      subtitle: 'AI-Powered CRM Integration',
      description: 'AI-powered Python service that connects to Twenty CRM\'s REST API to automatically update records and suggest new workflows based on live CRM data. Enhances productivity through intelligent automation and predictive insights.',
      technologies: ['Python', 'REST APIs', 'AI/ML', 'Automation', 'CRM'],
      link: null,
      linkText: 'Private Project'
    },
    {
      title: 'FinSight AI',
      subtitle: 'Financial Portfolio Analyzer',
      description: 'An intelligent financial analysis platform that uses machine learning to assess portfolio risk, provide investment recommendations, and predict market trends. Features include real-time data processing and personalized financial insights.',
      technologies: ['Python', 'TensorFlow', 'Financial APIs', 'Data Visualization'],
      link: null,
      linkText: 'In Development'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-900 font-medium">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link ? (
                <Button
                  onClick={() => window.open(project.link, '_blank')}
                  variant="outline"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 transition-all duration-300"
                >
                  {project.linkText}
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              ) : (
                <div className="w-full py-2 text-center text-sm text-gray-500 border border-gray-200 rounded-md">
                  {project.linkText}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
