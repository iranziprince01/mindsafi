import Fati from "../assets/Fati.jpg";
import Patrick from "../assets/Patrick.jpg";
import Prince from "../assets/Prince.jpg";
import Yvette from "../assets/Yvette.jpg";
import Clovis from "../assets/clovis.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sango Fati",
      role: "Co-Founder & Senior Counsellor",
      image: Fati,
      focusTop: true,
    },
    {
      name: "Patrick Kabahigi Sibomana",
      role: "Co-Founder & Operations Manager",
      image: Patrick,
    },
    {
      name: "Clovis Ganza",
      role: "Chief Finance Officer",
      image: Clovis,
      focusTop: true,
    },
    {
      name: "Umutoni Yvette",
      role: "Clinical Psychologist",
      image: Yvette,
    },
    {
      name: "Prince Iranzi",
      role: "IT and Communications Manager",
      image: Prince,
    },
  ];

  return (
    <section id="team" className="bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-bold text-gray-900 sm:mb-16">
          Meet Our Dedicated Team
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className={`h-64 w-full object-cover ${
                  member.focusTop ? "object-top" : "object-center"
                }`}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#002e6d]">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
