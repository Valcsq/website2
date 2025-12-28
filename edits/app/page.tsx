export default function Home() {
  const projects = [
    {
      title: "Music Video Edit",
      description: "color grading and cuts for a local artist",
      link: "#",
    },
    {
      title: "Short Film",
      description: "edited a 12 minute short for a friend",
      link: "#",
    },
    {
      title: "YouTube Video",
      description: "gaming montage with effects",
      link: "#",
    },
    {
      title: "Wedding Highlights",
      description: "3 minute highlight reel",
      link: "#",
    },
    {
      title: "Product Ad",
      description: "30 second commercial for a small business",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-2xl mb-2">hi, i'm [your name]</h1>
      <p className="text-muted mb-12">i do video editing</p>

      <p className="mb-8">here is some of my projects i have worked on</p>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="group">
            <h2 className="text-lg group-hover:underline">{project.title}</h2>
            <p className="text-muted text-sm">{project.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-foreground/20">
        <p className="text-muted text-sm">
          wanna work together? hit me up at{" "}
          <a href="mailto:your@email.com" className="text-foreground hover:underline">
            your@email.com
          </a>
        </p>
      </div>
    </main>
  )
}
