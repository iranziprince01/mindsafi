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
    },
    {
      name: "Patrick Kabahigi Sibomana",
      role: "Co-Founder & Operations Manager",
      image: Patrick,
    },
    {
      name: "Prince Iranzi",
      role: "Marketing Manager & CTO",
      image: Prince,
    },
    {
      name: "Umutoni Yvette",
      role: "Chief of Finance",
      image: Yvette,
    },
    {
      name: "Clovis Ganza",
      role: "Clinical Psychologist",
      image: Clovis,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 min-h-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Dedicated Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                index >= 3 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
              style={
                index >= 3 ? { gridColumn: index === 3 ? "1" : "2" } : undefined
              }
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${
                    member.name === "Clovis Ganza" ||
                    member.name === "Sango Fati"
                      ? "object-top"
                      : ""
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
