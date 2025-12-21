import React, { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, TrendingUp, Brain, Database, BarChart3, LineChart, Activity } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
          <Brain size={80} className="text-blue-900" />
        </div>
        <div className="absolute top-1/3 right-16 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <TrendingUp size={80} className="text-blue-900" />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <Database size={80} className="text-blue-900" />
        </div>
        <div className="absolute bottom-1/4 right-12 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <BarChart3 size={80} className="text-blue-900" />
        </div>

        {/* Candlestick Charts - Left Side */}
        <div className="absolute top-1/2 left-24 transform -translate-y-1/2">
          <div className="flex items-end gap-2 opacity-20">
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '0s' }}>
              <div className="candlestick bullish" style={{ height: '60px' }}>
                <div className="wick" style={{ height: '20px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '15px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '0.2s' }}>
              <div className="candlestick bearish" style={{ height: '45px' }}>
                <div className="wick" style={{ height: '15px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '10px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '0.4s' }}>
              <div className="candlestick bullish" style={{ height: '70px' }}>
                <div className="wick" style={{ height: '25px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '20px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '0.6s' }}>
              <div className="candlestick bullish" style={{ height: '55px' }}>
                <div className="wick" style={{ height: '18px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '12px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Candlestick Charts - Right Side */}
        <div className="absolute top-1/2 right-24 transform -translate-y-1/2">
          <div className="flex items-end gap-2 opacity-20">
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '0.8s' }}>
              <div className="candlestick bearish" style={{ height: '50px' }}>
                <div className="wick" style={{ height: '15px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '10px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="candlestick bullish" style={{ height: '65px' }}>
                <div className="wick" style={{ height: '22px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '18px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '1.2s' }}>
              <div className="candlestick bullish" style={{ height: '75px' }}>
                <div className="wick" style={{ height: '28px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '22px' }}></div>
              </div>
            </div>
            <div className="candlestick-container animate-pulse" style={{ animationDelay: '1.4s' }}>
              <div className="candlestick bearish" style={{ height: '48px' }}>
                <div className="wick" style={{ height: '16px' }}></div>
                <div className="body"></div>
                <div className="wick" style={{ height: '12px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Line Chart Path */}
        <svg className="absolute top-20 right-1/4 opacity-10" width="200" height="100" viewBox="0 0 200 100">
          <path
            className="chart-line"
            d="M 0,80 L 40,60 L 80,70 L 120,40 L 160,50 L 200,20"
            fill="none"
            stroke="rgb(30, 58, 138)"
            strokeWidth="3"
          />
        </svg>

        {/* LLM/ML Themed Floating Text */}
        <div className="absolute bottom-32 left-32 opacity-5 text-blue-900 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
          model.predict()
        </div>
        <div className="absolute top-32 right-32 opacity-5 text-blue-900 font-mono text-sm animate-float" style={{ animationDelay: '2.5s' }}>
          benchmark.score()
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-6 animate-fade-in">
          <span className="text-sm font-medium text-blue-900 bg-blue-100 px-5 py-2.5 rounded-full shadow-sm">
            Available for Full-Time & Freelance (EU Only)
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight animate-fade-in-up">
          Kağan Durmuş
        </h1>
        
        <div className="mb-8 space-y-3">
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer & ML Specialist
          </p>
          <p className="text-xl md:text-2xl text-blue-800 font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Chief Financial Officer | AI Researcher
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="flex items-center gap-1">
              <LineChart size={16} className="text-blue-700" />
              Stock Prediction
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Brain size={16} className="text-blue-700" />
              LLM Benchmarking
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Activity size={16} className="text-blue-700" />
              Financial ML
            </span>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Bridging finance and technology through AI innovation. Assistant Researcher at TUM specializing in AI orchestration and machine learning, while leading financial strategy for a non-profit organization.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-10 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          
          <Button
            onClick={() => window.open('https://www.linkedin.com/in/kagan-durmus', '_blank')}
            variant="outline"
            size="lg"
            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-10 py-6 text-base transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="mr-2" size={20} />
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .candlestick-container {
          display: flex;
          align-items: flex-end;
        }

        .candlestick {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: candlestick-appear 1s ease-out forwards;
        }

        .candlestick .wick {
          width: 2px;
          background-color: rgb(30, 58, 138);
        }

        .candlestick .body {
          width: 12px;
          height: 30px;
          border-radius: 2px;
        }

        .candlestick.bullish .body {
          background-color: rgb(34, 197, 94);
          border: 1px solid rgb(21, 128, 61);
        }

        .candlestick.bearish .body {
          background-color: rgb(239, 68, 68);
          border: 1px solid rgb(185, 28, 28);
        }

        @keyframes candlestick-appear {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        .chart-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
