import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Kağan Durmuş</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & Machine Learning Specialist
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => window.open('https://www.linkedin.com/in/kagan-durmus', '_blank')}
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Kağan Durmuş. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
