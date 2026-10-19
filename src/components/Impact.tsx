import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "20K+", label: t("impact.stats.individuals") },
    { number: "30K+", label: t("impact.stats.refugees") },
    { number: "50+", label: t("impact.stats.clinics") },
    { number: "5K+", label: t("impact.stats.workers") },
  ];

  const testimonials = [1, 2, 3].map((id) => ({
    quote: t(`impact.testimonials.${id}.quote`),
    author: t(`impact.testimonials.${id}.author`),
  }));

  return (
    <section id="impact" className="bg-[#002e6d] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-white sm:mb-16">
          {t("impact.title")}
        </h2>

        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 sm:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-[#ffe600] sm:text-4xl">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)]">
          <figure className="relative min-h-72 overflow-hidden rounded-3xl">
            <img
              src="https://images.pexels.com/photos/29521026/pexels-photo-29521026.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Community members gathered together at an event in Rwanda"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </figure>

          <div className="grid gap-5">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <blockquote className="text-sm leading-relaxed text-white">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-[#ffe600]">
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
