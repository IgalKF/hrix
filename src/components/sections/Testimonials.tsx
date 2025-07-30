import React from 'react';

const testimonials = [
  {
    quote: 'השירות של HRiX שינה את הדרך בה אנו מנהלים את הצוות. מקצועיות, זמינות ויחס אישי!',
    author: 'דנה, מנכ"לית סטארטאפ',
  },
  {
    quote: 'קיבלנו ייעוץ מדויק והטמעה מהירה של תהליכים. ממליץ בחום!',
    author: 'יוסי, מנהל משאבי אנוש',
  },
  {
    quote: 'היחס האישי והמקצועיות של אביטל מורגשים בכל שלב. תודה רבה!',
    author: 'רונית, בעלת עסק',
  },
];

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
    <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400 animate-fadeIn">לקוחות ממליצים</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition animate-fadeIn" style={{ animationDelay: `${0.2 + i * 0.2}s` }}>
          <div className="text-lg italic mb-2 text-gray-700 dark:text-gray-200">"{t.quote}"</div>
          <div className="font-semibold text-blue-600 dark:text-blue-400">- {t.author}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
