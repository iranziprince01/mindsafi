import { HandHeart, Heart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GetInvolved = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ways = [
    {
      icon: Heart,
      title: t("getInvolved.donate.title"),
      description: t("getInvolved.donate.description"),
      action: t("getInvolved.donate.action"),
      onClick: () => navigate("/donate"),
    },
    {
      icon: Users,
      title: t("getInvolved.volunteer.title"),
      description: t("getInvolved.volunteer.description"),
      action: t("getInvolved.volunteer.action"),
      onClick: () => navigate("/volunteer"),
    },
    {
      icon: HandHeart,
      title: t("getInvolved.partner.title"),
      description: t("getInvolved.partner.description"),
      action: t("getInvolved.partner.action"),
      onClick: () =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <section id="get-involved" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-900 sm:mb-16">
          {t("getInvolved.title")}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {ways.map((way) => (
            <div
              key={way.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#002e6d]/5 text-[#002e6d]">
                <way.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#002e6d]">
                {way.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                {way.description}
              </p>
              <button
                onClick={way.onClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#002e6d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#003d91] sm:w-auto"
              >
                {way.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
