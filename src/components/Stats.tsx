import { Activity, Brain, Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Brain,
      title: t("stats.crisis.title"),
      description: t("stats.crisis.description"),
    },
    {
      icon: Heart,
      title: t("stats.depression.title"),
      description: t("stats.depression.description"),
    },
    {
      icon: Activity,
      title: t("stats.impact.title"),
      description: t("stats.impact.description"),
    },
    {
      icon: Users,
      title: t("stats.community.title"),
      description: t("stats.community.description"),
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-900 sm:mb-16">
          {t("stats.title")}
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#002e6d]/5 text-[#002e6d]">
                <stat.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {stat.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
