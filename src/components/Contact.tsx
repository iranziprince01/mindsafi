import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${t("contact.info.email")}?subject=${encodeURIComponent(
      `Message from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#e7eef6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-900 sm:mb-16">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-2xl font-semibold text-[#002e6d]">
              {t("contact.subtitle")}
            </h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              {t("contact.description")}
            </p>

            <div className="space-y-4 text-sm text-gray-700">
              <a
                href={`mailto:${t("contact.info.email")}`}
                className="flex items-center gap-3 hover:text-[#002e6d]"
              >
                <Mail className="h-4 w-4 text-[#002e6d]" />
                {t("contact.info.email")}
              </a>
              <a
                href="tel:+250782485566"
                className="flex items-center gap-3 hover:text-[#002e6d]"
              >
                <Phone className="h-4 w-4 text-[#002e6d]" />
                {t("contact.info.phone")}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#002e6d]" />
                {t("contact.info.location")}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-gray-700">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-gray-700">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-gray-700"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#002e6d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003d91]"
            >
              {t("contact.form.submit")}
            </button>
            {sent && (
              <p className="text-sm text-gray-600">
                Your email app should open with this message. If it does not,
                write to {t("contact.info.email")}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
