import type { ReactNode } from "react"

const asset = (name: string) => `/assets/${name}`

function Icon({ name }: { name: "mail" | "globe" | "phone" | "calendar" | "user" | "folder" | "arrow" }) {
  const paths: Record<typeof name, ReactNode> = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    phone: <><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M10 18.5h4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    folder: <path d="M3 6.5h6l2 2h10v10H3z" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  }
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">{paths[name]}</svg>
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

const projects = [
  { image: "project-1.png", title: "Interactive Data Dashboard", date: "Jan 24, 2024", role: "Frontend Lead", type: "Internal Tools", href: "https://www.google.com/" },
  { image: "project-2.png", title: "Personal Finance Tracker", date: "Mar 15, 2024", role: "Frontend Developer", type: "Fintech", href: "https://www.figma.com/" },
]

const experiences = [
  { logo: "alpha.png", date: "Jan 24 – Present", company: "Alpha", place: "Cupertino, CA", role: "Frontend Engineer", description: "Spearheaded the development of a suite of progressive web applications using React and Swift, and GraphQL." },
  { logo: "sigma.png", date: "Sep 22 – Dec 23", company: "Sigma", place: "New York, NY", role: "Frontend Engineer", description: "Enhanced user interfaces for the Sigma Web Player using React and Redux, achieving a 25% increase in user engagement." },
  { logo: "omega.png", date: "Feb 20 – Dec 23", company: "Omega", place: "Menlo Park, CA", role: "Junior Software Engineer", description: "Involved in the lifecycle of feature development from conception to deployment, emphasizing responsive design and accessibility standards." },
]

function Meta({ date, role, type }: { date: string; role: string; type: string }) {
  return <div className="meta"><span><Icon name="calendar" />{date}</span><span><Icon name="user" />{role}</span><span><Icon name="folder" />{type}</span></div>
}

function Sidebar() {
  const skills = ["JavaScript", "React", "Python", "Git", "Agile", "CI/CD", "Node.js", "Docker", "MongoDB", "Typescript", "AWS"]
  return <aside className="sidebar">
    <div className="sidebar-main">
      <img className="avatar" src={asset("avatar.png")} alt="Henry Walker" />
      <h1>Henry Walker</h1>
      <p className="pronouns">he/him</p>
      <div className="side-block"><Eyebrow>About</Eyebrow><p>Brooklyn based full-stack software engineer with 7+ years of experience in building web and mobile apps.</p></div>
      <div className="side-block"><Eyebrow>Contact</Eyebrow><div className="contact-list">
        <a href="mailto:hey@henrywalker.com"><Icon name="mail" />hey@henrywalker.com</a>
        <a href="https://henrywalker.com"><Icon name="globe" />henrywalker.com</a>
        <a href="tel:55512345678"><Icon name="phone" />555-1234-5678</a>
      </div></div>
      <div className="side-block"><Eyebrow>Skills</Eyebrow><div className="pills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      <div className="side-block"><Eyebrow>Languages</Eyebrow><div className="pills language-pills"><span>🇬🇧 English</span><span>🇩🇪 German</span><span>🇫🇷 French</span><span>🇨🇳 Chinese</span></div></div>
    </div>
    <nav className="socials" aria-label="Social links">
      <a href="#" aria-label="X">𝕏</a><a href="#" aria-label="Threads">@</a><a href="#" aria-label="Instagram">◎</a>
      <a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="GitHub">◉</a><a href="#" aria-label="YouTube">▶</a>
    </nav>
  </aside>
}

function App() {
  return <main className="page">
    <Sidebar />
    <article className="content">
      <section className="intro section"><Eyebrow>Intro</Eyebrow><div className="intro-copy">
        <p>I'm Henry Walker, a product engineer from Brooklyn, New York City. My expertise lies in developing innovative and user-focused products for both web and mobile platforms, where I emphasize intuitive design and robust functionality.</p>
        <p>Holding a Master's degree in Computer Science from the Nova University of Science and Technology, my journey began in a dynamic startup, progressing to lead positions in established tech firms.</p>
      </div></section>

      <section className="section projects-section"><Eyebrow>Projects</Eyebrow><div className="projects">
        {projects.map((project) => <a className="project" href={project.href} key={project.title}><img src={asset(project.image)} alt="" /><div className="project-info"><h2>{project.title}</h2><Meta date={project.date} role={project.role} type={project.type} /></div></a>)}
      </div></section>

      <section className="section"><Eyebrow>Experience</Eyebrow><div className="rows">
        {experiences.map((item) => <div className="experience" key={item.company}><img src={asset(item.logo)} alt="" /><div className="experience-date">{item.date}</div><div className="experience-main"><div className="company-line"><h2>{item.company}</h2><span>{item.place}</span></div><p>{item.description}</p><span className="role">{item.role}</span></div></div>)}
      </div></section>

      <section className="section"><Eyebrow>Education</Eyebrow><div className="rows education">
        <div className="education-row"><div><h2>Master of Science in Computer Science</h2><span>Sep 18 – Jun 20</span></div><div><div className="company-line"><h3>Astra University</h3><span>Stanford, CA</span></div><p>Specialized in Software Engineering. Completed thesis on "Scalable Architectures for Real-Time Web Applications" and graduated with distinction.</p></div></div>
        <div className="education-row"><div><h2>Bachelor of Science in Software Engineering</h2><span>Sep 15 – Sep 18</span></div><div><div className="company-line"><h3>Nova University</h3><span>Providence, RI</span></div><p>Graduated with honors. Relevant coursework included Advanced Algorithms, Web Development, and User Interface Design.</p></div></div>
      </div></section>

      <section className="section"><Eyebrow>License &amp; Certification</Eyebrow><div className="certifications">
        <div><img src={asset("cert-1.png")} alt="" /><p>Alpha Certified<br />Developer Associate</p><span>Issued 2019</span></div>
        <div><img src={asset("cert-2.png")} alt="" /><p>Beta Certified<br />Developer Associate</p><span>Issued 2023</span></div>
      </div></section>

      <section className="section"><Eyebrow>Testimonials</Eyebrow><div className="testimonials">
        <blockquote><p>Having worked alongside Henry at Sigma, I've been consistently impressed by his exceptional skills as a frontend engineer. Henry's hands-on approach and dedication to building robust web and mobile applications have greatly contributed to our project's success.</p><footer><img src={asset("evelyn.jpg")} alt="" /><span><strong>Evelyn Brooks</strong>Lead Engineer at Sigma, managed Henry directly</span></footer></blockquote>
        <blockquote><p>Henry’s expertise has been crucial in turning our ambitious project ideas into reality at Omega. His proficiency in both front-end and back-end development ensures a seamless integration of features, delivering a user experience that's both intuitive and high-performing.</p><footer><img src={asset("raj.jpg")} alt="" /><span><strong>Raj Patel</strong>Junior Software Engineer at Omega, worked with Henry on the same team</span></footer></blockquote>
      </div></section>

      <section className="section connect"><div className="connect-grid">
        <a href="mailto:hey@henrywalker.com"><span>Email</span><strong>hey@henrywalker.com</strong><Icon name="arrow" /></a>
        <a href="tel:+5551234567"><span>Phone</span><strong>+555 123 4567</strong><Icon name="arrow" /></a>
        <a href="#"><span>Meeting</span><strong>Book call</strong><Icon name="arrow" /></a>
        <a href="https://henrywalker.com"><span>Website</span><strong>henrywalker.com</strong><Icon name="arrow" /></a>
        <a href="#"><span>X (Twitter)</span><strong>@henrywalker</strong><Icon name="arrow" /></a>
        <a href="#"><span>LinkedIn</span><strong>/henryw</strong><Icon name="arrow" /></a>
      </div></section>

      <footer className="footer"><p>© 2025 Resumx by <a href="#">Jus</a></p><a href="#">Built using <strong>Framer</strong></a></footer>
    </article>
  </main>
}

export default App
