import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("about.whoWeAre.title"),
      description: t("about.whoWeAre.description"),
    },
    {
      title: t("about.mission.title"),
      description: t("about.mission.description"),
    },
    {
      title: t("about.vision.title"),
      description: t("about.vision.description"),
    },
  ];

  return (
    <section id="about" className="bg-[#002e6d] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-white sm:mb-16">
          {t("about.title")}
        </h2>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)]">
          <img
            src="https://images.pexels.com/photos/31602729/pexels-photo-31602729.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Women sitting together in conversation outside a home"
            className="h-80 w-full rounded-3xl object-cover object-[center_20%] sm:h-96 lg:h-full lg:min-h-[28rem]"
          />

          <div className="grid gap-5">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7">
                <h3 className="mb-3 text-xl font-semibold text-[#002e6d]">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
