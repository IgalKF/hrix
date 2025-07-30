import React from 'react';

const Hero: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 animate-fadeIn">
    <h1 className="text-5xl drop-shadow-lg">ברוכים הבאים ל-HRiX</h1>
    <p className="text-2xl max-w-2xl mx-auto mt-4">ניהול משאבי אנוש חכם, מקצועי ומותאם אישית לעסק שלך.<br />שירותי ייעוץ, ליווי והטמעה עם יחס אישי.</p>
    <a href="#contact" className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">צור קשר</a>
  </section>
);

export default Hero;
