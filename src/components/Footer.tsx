import { Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const links = [
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "impact", label: "Impact" },
    { id: "team", label: "Team" },
    { id: "get-involved", label: "Get Involved" },
    { id: "contact", label: "Contact" },
  ];

  const goTo = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#002e6d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Mindsafi</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Building mental resilience and transforming lives across Africa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/mindsafi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mindsafi on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mind-safi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mindsafi on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => goTo(link.id)}
                    className="min-h-0 text-white/80 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/blogs")}
                  className="min-h-0 text-white/80 hover:text-white"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/donate")}
                  className="min-h-0 text-white/80 hover:text-white"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Kigali, Rwanda</li>
              <li>
                <a href="mailto:info.mindsafi@gmail.com" className="hover:text-white">
                  info.mindsafi@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+250782485566" className="hover:text-white">
                  +250 782 485 566
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Mindsafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
