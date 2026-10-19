import { Heart, Phone, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-[#002e6d] pb-28 pt-32 sm:pb-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <span className="text-sm font-medium text-[#ffe600]">
                {t("hero.subtitle")}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Healing <span className="text-[#ffe600]">Minds</span>,
              <br />
              Building Hope
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
              {t("hero.description")}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
              {[
                { number: "20K+", label: t("hero.stats.lives") },
                { number: "15+", label: t("hero.stats.countries") },
                { number: "24/7", label: t("hero.stats.support") },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-semibold text-white sm:text-3xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs text-white/60 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center rounded-full bg-[#ffe600] px-6 py-3 text-sm font-semibold text-[#002e6d] transition-colors hover:bg-[#fff36a]"
              >
                <Heart className="mr-2 h-4 w-4" />
                {t("hero.cta.support")}
              </button>
              <button
                onClick={() => scrollTo("get-involved")}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Users className="mr-2 h-4 w-4" />
                {t("hero.cta.join")}
              </button>
            </div>

            <a
              href="tel:+250782485566"
              className="mt-6 inline-flex items-center gap-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-4 w-4 text-[#ffe600]" />
              </span>
              <span>
                <span className="block text-sm text-white/70">
                  {t("hero.emergency.title")}
                </span>
                <span className="block text-sm font-semibold text-white">
                  {t("hero.emergency.phone")}
                </span>
              </span>
            </a>
          </div>

          <div className="relative min-h-64 sm:min-h-80 lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1462&auto=format&fit=crop"
              alt="Children gathered together outdoors"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:absolute lg:inset-0 lg:h-full lg:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
