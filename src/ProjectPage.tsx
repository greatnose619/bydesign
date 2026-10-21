import { useEffect } from "react"

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

function Arrow({ back = false }: { back?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d={back ? "M17 10H3m5-5-5 5 5 5" : "M5 15 15 5m-8 0h8v8"} /></svg>
}

const moreProjects = [
  { title: "Personal Finance Tracker", type: "Fintech Product", image: "project-2.png" },
  { title: "Collaborative Coding Environment", type: "Developer Tools", image: "project-3.png" },
  { title: "Design System Library", type: "Product Design", image: "project-1.png" },
  { title: "AI Workspace", type: "SaaS Platform", image: "project-3.png" },
]

export default function ProjectPage() {
  useEffect(() => {
    document.title = "Brandify — Nate Yeh"
    window.scrollTo(0, 0)
    return () => { document.title = "Nate Yeh — Product Designer" }
  }, [])

  return <main className="project-page">
    <nav className="top-nav project-nav" aria-label="Page navigation">
      <a href="#/">Intro</a>
      <a href="#/">About</a>
      <a href="#/">Work</a>
      <a href="#/">Experience</a>
      <a href="#/">Education</a>
    </nav>

    <article className="project-detail-shell">
      <a className="project-back" href="#/"><Arrow back />Projects</a>

      <header className="project-hero-copy">
        <h1>Brandify - Modern Agency Template</h1>
        <a className="project-visit" href="https://brandify.framer.website/" target="_blank" rel="noreferrer">Visit Website</a>
        <p>Brandify is a modern template designed for digital marketing agencies, creative studios, freelancers, and personal portfolios. Its sleek, dark-themed design is ideal for highlighting your services and showcasing projects with style.</p>
      </header>

      <dl className="project-meta">
        <div><dt>Category</dt><dd>Agency Website</dd></div>
        <div><dt>Services</dt><dd>Web Design</dd></div>
        <div><dt>Client</dt><dd>Framer Template</dd></div>
        <div><dt>Year</dt><dd>2024</dd></div>
      </dl>

      <img className="project-detail-image" src={asset("projects/brandify/hero.jpg")} alt="Brandify agency website homepage" />

      <div className="project-description">
        <p>Brandify is not only visually striking but also functionally robust, providing intuitive layouts and customizable features to ensure your content stands out. Whether you're showcasing your services, presenting your portfolio, or highlighting your latest projects, it ensures everything is displayed with clarity and style.</p>
        <p>With seamless navigation and responsive design, Brandify delivers an engaging user experience across all devices. Its adaptability makes it an ideal choice for creatives, freelancers, and agencies looking to elevate their online presence while maintaining a polished and modern brand image.</p>
      </div>

      <div className="project-gallery">
        <img src={asset("projects/brandify/detail-1.jpg")} alt="Brandify website detail" />
        <img src={asset("projects/brandify/detail-2.jpg")} alt="Brandify website services section" />
        <img src={asset("projects/brandify/detail-3.jpg")} alt="Brandify website mobile views" />
      </div>

      <section className="more-projects">
        <div className="more-projects-title"><h2>View more projects</h2><a href="#/">View all</a></div>
        <div className="more-project-grid">
          {moreProjects.map((project) => <a href="#/" className="more-project-card" key={project.title}>
            <img src={asset(project.image)} alt="" />
            <span><strong>{project.title}</strong><small>{project.type}</small></span>
            <Arrow />
          </a>)}
        </div>
      </section>
    </article>
  </main>
}
