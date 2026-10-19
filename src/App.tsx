import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GetInvolved from "./components/GetInvolved";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Blogs from "./pages/Blogs";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";

// Layout component to wrap all pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatBot />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 bg-[#ffe600] text-[#002e6d] p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/donate"
          element={
            <Layout>
              <Donate />
            </Layout>
          }
        />
        <Route
          path="/volunteer"
          element={
            <Layout>
              <Volunteer />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Stats />
              <About />
              <Programs />
              <Impact />
              <Team />
              <GetInvolved />
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
