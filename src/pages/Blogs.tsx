import { Calendar, MapPin } from "lucide-react";
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
      <div className="bg-[#002e6d] px-4 pb-24 pt-36 text-white sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold">Our Stories</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            Discover how we're making a difference in communities across Rwanda
          </p>
        </div>
      </div>

      {/* Blog Posts with Enhanced Layout */}
      <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-64 md:min-h-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{blog.location}</span>
                      </div>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-[#002e6d]">
                      {blog.title}
                    </h2>
                    <div>
                      {blog.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-sm leading-relaxed text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
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
