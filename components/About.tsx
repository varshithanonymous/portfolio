export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full max-w-sm rounded-full mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm a dedicated developer with expertise in modern web technologies.
            I specialize in creating responsive, user-friendly applications that deliver
            exceptional user experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With a strong background in both frontend and backend development, I bring
            comprehensive solutions to complex problems, ensuring high-quality results
            that meet both user needs and business objectives.
          </p>
        </div>
      </div>
    </section>
  )
}