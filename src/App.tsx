import type { ReactNode } from "react"

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d={diagonal ? "M5 15 15 5m-8 0h8v8" : "M3 10h14m-5-5 5 5-5 5"} /></svg>
}

function LocationPin() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return <div className="section-title"><h2>{children}</h2>{action}</div>
}

const projects = [
  {
    title: "Interactive Data Dashboard",
    type: "Internal Tools",
    image: "project-1.png",
    href: "#/work/brandify",
  },
  {
    title: "Personal Finance Tracker",
    type: "Fintech Product",
    image: "project-2.png",
    href: "https://www.figma.com/",
  },
  {
    title: "Collaborative Coding Environment",
    type: "Developer Tools",
    image: "project-3.png",
    href: "#",
  },
  {
    title: "Design System Library",
    type: "Product Design",
    image: "project-1.png",
    href: "#",
  },
  {
    title: "Mobile Banking Experience",
    type: "Mobile Product",
    image: "project-2.png",
    href: "#",
  },
  {
    title: "AI Workspace",
    type: "SaaS Platform",
    image: "project-3.png",
    href: "#",
  },
]

const experience = [
  {
    place: "Cupertino, CA",
    company: "Alpha",
    period: "Jan 2024 – Present",
    role: "Frontend Engineer",
    points: [
      "Spearheaded the development of progressive web applications using React, Swift and GraphQL.",
      "Built reusable interface systems that improved consistency across product teams.",
      "Collaborated with designers and engineers to ship accessible, responsive experiences.",
    ],
  },
  {
    place: "New York, NY",
    company: "Sigma",
    period: "Sep 2022 – Dec 2023",
    role: "Frontend Engineer",
    points: [
      "Enhanced user interfaces for the Sigma Web Player using React and Redux.",
      "Improved product performance and helped achieve a 25% increase in user engagement.",
      "Translated complex product requirements into simple, maintainable interactions.",
    ],
  },
  {
    place: "Menlo Park, CA",
    company: "Omega",
    period: "Feb 2020 – Aug 2022",
    role: "Junior Software Engineer",
    points: [
      "Contributed to feature development from early concepts through production deployment.",
      "Championed responsive design and accessibility standards across the product.",
    ],
  },
]

export function HomePage() {
  return <main>
    <nav className="top-nav" aria-label="Page sections">
      <a href="#intro">Intro</a>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
    </nav>

    <div className="shell">
      <header className="profile" id="intro">
        <div className="profile-top">
          <div className="profile-photo"><img src={asset("avatar.png")} alt="Nate Yeh" /></div>
          <div className="identity">
            <h1>Nate Yeh</h1>
            <p className="job-title">Product designer</p>
            <p className="location"><LocationPin /><span>Taipei, Taiwan</span></p>
          </div>
        </div>
      </header>

      <section className="page-section about" id="about">
        <SectionTitle>About</SectionTitle>
        <div className="body-copy">
          <p>A product designer who loves bringing ideas to life by blending software and hardware to create intuitive experiences. Collaborates with designers, engineers, and PMs to turn complex challenges into seamless user solutions.</p>
        </div>
      </section>

      <section className="page-section" id="work">
        <SectionTitle>Projects</SectionTitle>
        <div className="project-grid">
          {projects.map((project) => <a className="project-card" href={project.href} key={project.title}>
            <div className="project-image"><img src={asset(project.image)} alt="" /></div>
            <div className="project-caption"><span><strong>{project.title}</strong><small>{project.type}</small></span><Arrow diagonal /></div>
          </a>)}
        </div>
      </section>

      <section className="page-section" id="experience">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={item.company}>
            <div className="timeline-meta"><span>{item.place}</span><strong>{item.company}</strong><span>{item.period}</span></div>
            <div className="timeline-content"><h3>{item.role}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="page-section" id="education">
        <SectionTitle>Education</SectionTitle>
        <div className="education-list">
          <article><div><span>Stanford, CA</span><strong>2018 – 2020</strong></div><div><h3>Master of Science in Computer Science</h3><p>Astra University</p><small>Specialized in software engineering and scalable architectures for real-time web applications.</small></div></article>
          <article><div><span>Providence, RI</span><strong>2015 – 2018</strong></div><div><h3>Bachelor of Science in Software Engineering</h3><p>Nova University</p><small>Graduated with honors. Coursework included algorithms, web development and interface design.</small></div></article>
        </div>
      </section>
    </div>

  </main>
}
