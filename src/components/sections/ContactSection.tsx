import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="space-y-6 bg-white dark:bg-gray-900 rounded-lg py-8 transition-colors duration-500 animate-fadeIn">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">צור קשר</h2>
    <form className="flex flex-col space-y-4 max-w-md mx-auto">
      <label className="text-gray-700 dark:text-gray-300">
        שם:
        <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100" />
      </label>
      <label className="text-gray-700 dark:text-gray-300">
        אימייל:
        <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100" />
      </label>
      <label className="text-gray-700 dark:text-gray-300">
        הודעה:
        <textarea name="message" rows={4} className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-700">שלח</button>
    </form>
  </section>
);

export default ContactSection;
