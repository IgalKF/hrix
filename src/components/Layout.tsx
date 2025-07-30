import React from "react";
import { useThemeStore } from "../store/useThemeStore";

const navItems = [
  { name: "בית", path: "/#home" },
  { name: "אודות", path: "/#about" },
  { name: "צור קשר", path: "/#contact" },
  { name: "בלוג", path: "/#blog" },
];

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Enable smooth scroll for anchor navigation
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Close menu on navigation
  React.useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  // Close menu on navigation
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col"
    >
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/60 shadow-md backdrop-blur-md">
        <nav className="mx-auto flex justify-between items-center p-4 relative">
          <div className="flex items-center gap-2">
            <svg
              height="30"
              viewBox="0 0 726 593"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="100%" stopColor="#9333ea" /> {/* Purple */}
              </linearGradient>
              </defs>
              <ellipse
              cx="363.434"
              cy="105.274"
              rx="103.055"
              ry="105.222"
              fill="url(#gradient)"
              />
              <path
              d="M423.979 226.124C441.655 226.124 519.052 252.736 534.898 318.482C534.898 318.482 540.075 369.608 540.075 415.233C540.075 482.948 369.313 482.948 359.412 482.948C349.506 482.948 178.75 482.947 178.75 415.233C178.75 369.608 183.928 318.482 183.928 318.482C199.773 252.736 277.17 226.124 294.847 226.124C308.365 226.125 323.847 242.124 359.412 242.124C394.978 242.124 410.46 226.125 423.979 226.124Z"
              fill="url(#gradient)"
              />
              <ellipse
              cx="568.216"
              cy="171.182"
              rx="66.9233"
              ry="68.3303"
              fill="url(#gradient)"
              />
              <ellipse
              cx="158.651"
              cy="171.182"
              rx="66.9233"
              ry="68.3303"
              fill="url(#gradient)"
              />
              <path
              d="M676.12 373.762C676.12 415.533 564.787 417.517 559.168 415.533C570.111 351.118 542.871 271.94 522.761 258.841C526.754 255.646 536.749 251.273 559.362 258.841C569.933 258.841 589.302 258.579 600.965 257.108C623.56 257.108 662.511 273.523 672.768 314.08C672.768 314.08 676.12 345.617 676.12 373.762Z"
              fill="url(#gradient)"
              />
              <path
              d="M50.1692 373.725C50.1692 415.496 161.502 417.48 167.121 415.496C158.029 349.462 183.142 269.863 203.528 258.804C199.535 255.609 189.539 251.236 166.927 258.804C156.355 258.804 136.987 258.542 125.324 257.071C102.728 257.071 63.7782 273.486 53.5207 314.043C53.5207 314.043 50.1692 345.58 50.1692 373.725Z"
              fill="url(#gradient)"
              />
              <path
              d="M725.613 365.083C730.3 454.146 621.539 592.094 392.798 592.094C145.029 592.094 -2.96343 468.209 0.543525 365.083C105.966 492.198 194.186 530.956 392.798 541.2C556.446 541.2 636.165 492.198 725.613 365.083Z"
              fill="url(#gradient)"
              />
            </svg>

            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              HRiX
            </span>
          </div>
          <button
            className="menu-toggle md:hidden"
            aria-label="Toggle menu"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMenuOpen(!menuOpen);
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
          <ul
            className={`md:flex space-x-6 space-x-reverse md:static absolute top-full right-0 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent w-48 md:w-auto rounded-b-md md:rounded-none shadow-md md:shadow-none transition-transform duration-300 ease-in-out transform md:translate-y-0 ${
              menuOpen ? "translate-y-0" : "-translate-y-96"
            } md:opacity-100 opacity-95`}
          >
            {navItems.map((item) => (
              <li
                key={item.path}
                className="md:inline-block block border-b border-gray-200 dark:border-gray-700 md:border-none last:border-none"
              >
                <a
                  href={item.path}
                  className="block px-4 py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-semibold"
                  onClick={(e) => {
                    setMenuOpen(false);
                    // Smooth scroll for anchor links
                    if (item.path.startsWith("/#")) {
                      e.preventDefault();
                      const id = item.path.replace("/#", "");
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-xl"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex-1 w-full">{children}</main>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-white mt-8 animate-fadeIn bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800">
        &copy; 2025 HRiX - אביטל חוץ' | כל הזכויות שמורות
      </footer>
    </div>
  );
};
