import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="space-y-6 bg-white dark:bg-gray-900 rounded-lg py-8 transition-colors duration-500 animate-fadeIn">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">אודות HRiX</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      HRiX היא חברה בראשות אביטל חוץ' המתמחה בניהול משאבי אנוש, עם דגש על פתרונות מותאמים אישית וחדשניים.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      המטרה שלנו היא לספק שירות מקצועי, אמין ויעיל לכל לקוח, תוך שימוש בטכנולוגיות מתקדמות ושיטות עבודה מודרניות.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      אנו מאמינים בשיתוף פעולה הדוק עם לקוחותינו, כדי להבין את הצרכים הייחודיים שלהם ולספק פתרונות שמביאים ערך אמיתי.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">
      הצוות שלנו מורכב מאנשי מקצוע מנוסים ומסורים, המחויבים להצלחת הלקוחות שלנו בכל שלב.
    </p>
  </section>
);

export default AboutSection;
