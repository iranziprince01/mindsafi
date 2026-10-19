import {
  Brain,
  GraduationCap,
  HandHeart,
  Heart,
  LineChart,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: Brain,
      title: t("programs.awareness.title"),
      description: t("programs.awareness.description"),
    },
    {
      icon: Heart,
      title: t("programs.access.title"),
      description: t("programs.access.description"),
    },
    {
      icon: HandHeart,
      title: t("programs.trauma.title"),
      description: t("programs.trauma.description"),
    },
    {
      icon: GraduationCap,
      title: t("programs.youth.title"),
      description: t("programs.youth.description"),
    },
    {
      icon: LineChart,
      title: t("programs.research.title"),
      description: t("programs.research.description"),
    },
    {
      icon: Users,
      title: t("programs.support.title"),
      description: t("programs.support.description"),
    },
  ];

  return (
    <section id="programs" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-900 sm:mb-16">
          {t("programs.title")}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#002e6d]/5 text-[#002e6d]">
                <program.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#002e6d]">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
