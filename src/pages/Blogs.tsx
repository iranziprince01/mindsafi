import { ArrowRight, Calendar, MapPin } from "lucide-react";
import blog3 from "../assets/blog 3.jpg";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.jpg";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Mahama Refugee Families crave for Hope, Mental Stability, and Resilience for a Brighter Future",
      content: `Family representatives second that, creating a healthy family goes with mutual respect and accountability.

In November 2024, an inspiring program took place at Mahama Refugee Camp in Kirehe District, Eastern Rwanda. The camp, home to thousands of displaced people (Congolese, Burundians, and others), became a center of hope as they participated in a life-changing campaign.

The initiative brought together 32 householders, including volunteers, teachers, and community leaders, with a shared goal to give young people the resources and opportunities they need to succeed. Through fun workshops like "Igire sessions", which means Prosper, and group activities, the program was to encourage their talents and dreams to ignite their problem-solving skills, giving them a fresh sense of hope and purpose.

The images capture the excitement and togetherness that filled the camp. Proud mothers, fathers, and young adults gathered with enthusiasm and determination. This powerful moment highlights how community-driven projects can transform lives and create a brighter future for refugees. Through their opinions, they showed a solid dedication to building mentally stable and resilient families.`,
      image: blog1,
      date: "November 2024",
      location: "Mahama Refugee Camp, Kirehe District",
    },
    {
      id: 2,
      title: "Building a Stronger Community contributes to sustainability",
      content: `In Rwanda's capital, Kigali, a community-driven program was launched in the Remera neighborhood to bring people together and promote self-reliance and unity. With around 18 youngsters, young moms and fathers, the main focus is a welcoming community.

The images show the energy and excitement of the participants, who gathered in an open space to take part in the campaign. Enthusiastically, they joined hands in workshops, discussions, and teamwork activities. The goal was to equip the community with skills and resources to solve local problems and create lasting change.

This initiative shows the power of people working together. By inspiring a sense of responsibility and pride, it encourages other communities to take action and build a more inclusive and prosperous society.`,
      image: blog2,
      date: "2024",
      location: "Remera, Kigali",
    },
    {
      id: 3,
      title:
        "Empowering Education at Kigeme Refugee Camp Through Mental Wellness",
      content: `In Southern Rwanda, the Kigeme Refugee Camp has become a place of strength. A recent campaign focused on students at GS Kigeme B High School, aiming to improve their education and give them the tools to build a better future.

The images reflect the excitement of students as they gathered in their school courtyard after deep conversations. Wearing their bright green and blue uniforms, they participated in interactive lessons, mentorship programs, and learning activities. This initiative sent love and helped them develop new skills, confidence, and motivation to succeed.

By investing in refugee students' education, we strive to change lives and strengthen the entire community. This approach serves as a model for other refugee camps, showing how education and empowerment can create a lasting impact for those in need.`,
      image: blog3,
      date: "2024",
      location: "Kigeme Refugee Camp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Parallax Effect */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('/src/assets/blog1.png')] bg-cover bg-center opacity-20 animate-slow-zoom" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Our Stories
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-delay">
              Discover how we're making a difference in communities across
              Rwanda
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts with Enhanced Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative h-[400px] md:h-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{blog.location}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6 group-hover:text-orange-500 transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {blog.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
