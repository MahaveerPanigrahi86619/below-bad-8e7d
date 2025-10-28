import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import DescriptionComponent from '../components/DescriptionComponent';

const HomePage = () => {
  // TODO: Connect to the backend API when ready.
  // const fetchWelcomeData = async () => {
  //   try {
  //     const response = await fetch('/api/welcome');
  //     const data = await response.json();
  //     setWelcomeData(data);
  //   } catch (error) {
  //     console.error('Error fetching welcome data:', error);
  //   }
  // };

  // Using mock data for now
  const welcomeData = {
    title: "Hello World",
    subtitle: "Welcome to our React Application",
    description: "This is a modern, clean, and responsive homepage built with React 18, Vite, and Tailwind CSS. We're excited to have you here and look forward to showing you what we've built."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <HeaderComponent title={welcomeData.title} />
            <DescriptionComponent 
              subtitle={welcomeData.subtitle}
              description={welcomeData.description}
            />
            <div className="mt-10 flex justify-center">
              <div className="flex space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;