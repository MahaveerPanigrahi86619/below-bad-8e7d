import React from 'react';
import { Home } from 'lucide-react';

const HeaderComponent = ({ title }) => {
  return (
    <header className="flex items-center justify-center space-x-3 mb-8">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg">
        <Home className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
        {title}
      </h1>
    </header>
  );
};

export default HeaderComponent;