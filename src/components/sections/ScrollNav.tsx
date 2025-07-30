import React from 'react';

const navItems = [
  { name: 'בית', id: 'home' },
  { name: 'אודות', id: 'about' },
  { name: 'בלוג', id: 'blog' },
  { name: 'צור קשר', id: 'contact' },
];

const ScrollNav: React.FC = () => (
  <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg p-2 animate-fadeIn">
    {navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className="px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-200 font-bold transition"
      >
        {item.name}
      </a>
    ))}
  </nav>
);

export default ScrollNav;
