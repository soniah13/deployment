import React from 'react';

const WelcomeHome = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
       
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100 animate-pulse">
          • Deployment Successful
        </span>

       
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Hello from <span className="text-indigo-600">React.</span>
        </h1>

       
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          This application was built with Tailwind CSS and is now live. 
          Use this space to demonstrate how quickly you can ship modern web interfaces.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95">
            View Documentation
          </button>
          <button className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
            GitHub Repo
          </button>
        </div>

      
        <div className="mt-16 pt-8 border-t border-slate-200 text-slate-400 text-sm italic">
          Built with React 19 & Tailwind CSS v4.0
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;