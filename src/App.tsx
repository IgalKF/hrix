import "./App.css";
import { Layout } from "./components/Layout";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import BlogSection from "./components/sections/BlogSection";
import Testimonials from "./components/sections/Testimonials";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div
      dir="rtl"
      className="font-sans bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500"
    >
      <Layout>
        <div id="home">
          <Hero />
        </div>
        <div id="sections" className="container mx-auto">
          <AboutSection />
          <BlogSection />
          <Testimonials />
          <ContactSection />
        </div>
      </Layout>
    </div>
  );
}

export default App;
