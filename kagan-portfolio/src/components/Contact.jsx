import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Linkedin, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <Card className="p-12 border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm currently open to full-time positions and freelance opportunities within the EU. 
              Whether you have a project in mind or just want to connect, feel free to reach out on LinkedIn.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin size={20} className="text-blue-900" />
              <span>Munich, Germany</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Globe size={20} className="text-blue-900" />
              <span>Available for EU Opportunities</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => window.open('https://www.linkedin.com/in/kagan-durmus', '_blank')}
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-6 text-base transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
