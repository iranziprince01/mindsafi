import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Use setTimeout to ensure navigation happens before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleDonateClick = () => {
    navigate("/donate");
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "programs", label: t("nav.programs") },
    { id: "impact", label: t("nav.impact") },
    { id: "get-involved", label: t("nav.getInvolved") },
    { id: "team", label: t("nav.team") },
    { id: "blogs", label: "Blogs", isPage: true },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== "/") {
                  navigate("/");
                } else {
                  handleNavClick("home");
                }
              }}
              className="flex flex-col items-start h-full"
            >
              <span
                className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  isScrolled ? "text-[#002e6d]" : "text-white"
                }`}
              >
                MINDSAFI
              </span>
              <span
                className={`text-[10px] font-medium ${
                  isScrolled ? "text-[#002e6d]" : "text-white"
                }`}
              >
                HEALING THROUGH HOPE
              </span>
            </a>
          </div>

          {/* Desktop Navigation and Actions */}
          <div className="hidden md:flex md:items-center md:justify-end flex-1">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link flex items-center h-full ${
                    isScrolled ? "scrolled" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.isPage) {
                      navigate(`/${item.id}`);
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-6">
                <LanguageSwitcher isScrolled={isScrolled} />
                <button
                  onClick={handleDonateClick}
                  className="donate-btn flex items-center justify-center"
                >
                  {t("nav.donate")}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg flex items-center justify-center ${
                isScrolled ? "text-[#002e6d]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
            <div className="py-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.isPage) {
                      navigate(`/${item.id}`);
                    } else {
                      handleNavClick(item.id);
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-3 flex items-center justify-between">
                <LanguageSwitcher isScrolled={true} />
                <button
                  onClick={handleDonateClick}
                  className="donate-btn flex items-center justify-center"
                >
                  {t("nav.donate")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
