import { Globe, GraduationCap, Heart, Users } from "lucide-react";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  experience: string;
  message: string;
}

const Volunteer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interests: [],
    experience: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Interests: ${formData.interests.join(", ") || "Not specified"}`,
      `Experience: ${formData.experience || "Not provided"}`,
      `Message: ${formData.message || "None"}`,
    ].join("\n");

    window.location.href = `mailto:info.mindsafi@gmail.com?subject=${encodeURIComponent(
      "Volunteer application"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#002e6d] pb-28 pt-36 text-white sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Users className="mx-auto mb-4 h-8 w-8 text-[#ffe600]" />
              <h1 className="text-4xl font-bold mb-4">Join Our Mission</h1>
              <p className="text-xl text-gray-200">
                Make a difference in mental health care across Africa
              </p>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-[#002e6d]" />
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">
                Community Support
              </h3>
              <p className="text-gray-600">
                Work directly with communities to provide mental health support
                and education
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#002e6d]" />
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">
                Education & Training
              </h3>
              <p className="text-gray-600">
                Help train community health workers and conduct mental health
                workshops
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-[#002e6d]" />
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">
                Global Initiatives
              </h3>
              <p className="text-gray-600">
                Participate in international mental health programs and research
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-[#002e6d] mb-6">
              Volunteer Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Community Support",
                    "Education & Training",
                    "Research",
                    "Advocacy",
                    "Event Planning",
                    "Administration",
                  ].map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={interest}
                        onChange={handleInterestChange}
                        className="rounded accent-[#002e6d]"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#ffe600] px-6 py-3 text-sm font-semibold text-[#002e6d] transition-colors hover:bg-[#fff36a]"
              >
                Submit Application
              </button>
              {sent && (
                <p className="text-sm leading-relaxed text-gray-600">
                  Your email app should open with this application. If it does
                  not, write to info.mindsafi@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pb-24 sm:pb-32"></div>
      </div>
  );
};

export default Volunteer;
