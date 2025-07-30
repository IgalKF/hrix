import React from 'react';

const BlogSection: React.FC = () => (
  <section id="blog" className="space-y-6 bg-white dark:bg-gray-900 rounded-lg py-8 transition-colors duration-500 animate-fadeIn">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">בלוג</h2>
    <article className="mt-6 p-4 border border-gray-300 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">מציאת המועמד המושלם עבור StepIn</h3>
    <p className="text-gray-700 dark:text-gray-300">
      הכל התחיל כאשר StepIn, חברת בנייה מובילה, פנתה אלינו עם אתגר ייחודי. הם חיפשו מועמד שלא רק שיש לו את המומחיות הטכנית, אלא גם חולק את החזון שלהם לחדשנות בתחום הבנייה. לאחר חיפוש מקיף וריאיונות רבים, מצאנו סוף סוף את ההתאמה המושלמת. התשוקה של המועמד לשיטות בנייה ברות קיימא והרקורד המרשים שלו הפכו אותו לבחירה האידיאלית. StepIn לא יכלה להיות מאושרת יותר, והמועמד כעת משגשג בתפקידו החדש ותורם לפרויקטים פורצי דרך.
    </p>
    </article>
  </section>
);

export default BlogSection;
