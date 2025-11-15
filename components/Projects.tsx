export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with shopping cart and payment processing.",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management and reporting.",
      image: "/project2.jpg"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application for team collaboration and task tracking.",
      image: "/project3.jpg"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}