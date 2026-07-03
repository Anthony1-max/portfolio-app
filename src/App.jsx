import profilePicture from './Proffessional pic.jpeg';

const projects = [
  {
    title: 'Modern UI Dashboard',
    description: 'A responsive React dashboard with charts, cards, and clean user interactions.',
    url: '#projects',
  },
  {
    title: 'E-commerce Landing Page',
    description: 'A polished product showcase with animations and easy navigation.',
    url: '#projects',
  },
  {
    title: 'Personal Blog Template',
    description: 'A content-focused template optimized for readability and speed.',
    url: '#projects',
  },
];

const education = [
  {
    degree: 'Diploma in Information & Communication Technology',
    school: 'Walter Sisulu University',
    year: '2023',
    description: 'Focus on Software Development and Systems Development.',
  },
  {
    degree: 'Advanced React Development Certification',
    school: 'Online Learning Platform',
    year: '2023',
    description: 'Mastered React hooks, state management, and performance optimization.',
  },
];

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML & CSS',
  'Responsive Design',
  'Vite',
  'Git',
  'UI/UX',
  'Cisco Packet Tracer',
  'Network Fundamentals',
  'TCP/IP',
  'Network Troubleshooting',
  'Basic Switching & Routing',
];

const experience = [
  {
    role: 'Lead Facilitator',
    company: 'Lindamahle Innovation Center',
    period: '2024 - 2025',
    description: `Led and mentored students in Systems Development and Software Engineering projects, guiding them through the full software development lifecycle including system analysis, design, coding, testing, and deployment. Supervised the development of a School Inventory Management System and a Bed & Breakfast (BnB) website while providing technical support, project guidance, and practical training in programming, web development, and database concepts.`,
    technologies: ['C#', '.NET', 'JavaScript', 'Python', 'SQL','Adobe Acrobat','Word','Outlook', 'Microsoft Azure', 'Power BI', 'React', 'Git'],
  },
  {
    role: 'Junior Sales & Technical Manager',
    company: 'Madiri Business Enterprise (Pty) Ltd',
    period: '2025 - Present',
    description: `Supported both sales and technical operations by managing RFQs (Requests for Quotations), coordinating client requirements, and contributing to systems and software development initiatives. Assisted in delivering technical solutions, preparing quotations and proposals, providing client support, and bridging business needs with technical implementation to ensure efficient service delivery and project execution.`,
    technologies: ['C#', '.NET', 'JavaScript', 'SQL','Excel', 'Microsoft Azure', 'Power BI', 'Power Apps', 'Azure DevOps'],
  },
];

const certifications = [
  {
    title: 'Microsoft Certified Fabric Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2025',
  },
  {
    title: 'Microsoft Certified Azure Data Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2024',
  },
];

const socialMedia = [
  { platform: 'GitHub', url: 'https://github.com/Anthony1-max', icon: '🔗' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sibabalwe-rayi-anthony', icon: '💼' },
  { platform: 'Instagram', url: 'https://instagram.com/sibabalwe.rayi', icon: '📸' },
  { platform: 'Email', url: 'mailto:sibaanthony1@gmail.com', icon: '✉️' },
];

const resumeLink = '/resume.pdf';

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow pulse">Full-Stack Developer</p>
            <h1>Hi, I'm Sibabalwe Rayi.</h1>
            <p className="hero-description">
              Software Developer passionate about 
              building innovative, scalable, and 
              user-focused solutions. Experienced 
              in C#, .NET, JavaScript, Python, SQL, 
              Microsoft Azure, and Power BI, with a 
              strong background in ICT solutions, 
              system implementation, and software 
              development. I enjoy solving complex 
              business challenges through technology 
              and continuously expanding my skills 
              to deliver impactful digital solutions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Work with me
              </a>
              <a className="button secondary" href="#projects">
                View projects
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src={profilePicture}
              alt="Sibabalwe Rayi"
              className="hero-image"
            />
          </div>
        </div>
      </header>

      <main>
        <section id="Profile" className="section-card">
          <h2>About Me</h2>
          <p>
            I am a passionate and results-driven Full Stack Software Developer with
            expertise in cloud-based data systems, integrated digital platforms, and
            AI-driven solutions. My experience spans software engineering, data
            management, and cloud deployment using Microsoft Azure. I take pride in
            designing scalable applications, optimizing data flows, and mentoring
            teams to deliver impactful, data-driven results. Currently contributing to
            technology innovation and development initiatives at Madiri Business
            Enterprise (Pty) Ltd, I aim to expand my impact globally by building
            intelligent software systems that enhance sustainable development.
          </p>
        </section>

        <section id="skills" className="section-card">
          <div className="section-header">
            <h2>Skills</h2>
            <p>Technical strengths I use every day to build fast and usable experiences.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Selected work that demonstrates my design and development capabilities.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="project-link" href={project.url}>
                  View details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-card">
          <div className="section-header">
            <h2>Education</h2>
            <p>My academic background and professional certifications.</p>
          </div>
          <div className="education-grid">
            {education.map((edu) => (
              <article key={edu.degree} className="education-card">
                <h3>{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
                <p className="education-description">{edu.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-card">
          <div className="section-header">
            <h2>Experience</h2>
            <p>Professional roles where I’ve built and shipped web solutions.</p>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="experience-card">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-period">{item.period}</p>
                <p>{item.description}</p>
                <p className="experience-technologies">
                  <strong>Technologies:</strong> {item.technologies.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-card">
          <div className="section-header">
            <h2>Certifications</h2>
            <p>Verified training and certifications that back my technical skills.</p>
          </div> 
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="certification-card">
                <h3>{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-year">{cert.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section-card resume-section">
          <div>
            <h2>Download My CV</h2>
            <p>
              Recruiters can download my CV directly from the site to review my experience,
              skills, and qualifications instantly.
            </p>
          </div>
          <a className="button primary" href={resumeLink} download>
            Download CV
          </a>
        </section>

        <section id="social" className="section-card">
          <div className="section-header">
            <h2>Connect with Me</h2>
            <p>Find me on these platforms and let's connect.</p>
          </div>
          <div className="social-grid">
            {socialMedia.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-label">{social.platform}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-section">
          <div>
            <h2>Let’s build something together</h2>
            <p>
              I’m available for freelance and full-time opportunities. Reach out and let’s talk about your next
              project.
            </p>
          </div>
          <a className="button primary" href="mailto:sibaanthony1@gmail.com">
            Email me
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Sibabalwe Rayi. Designed with React.</p>
      </footer>
    </div>
  );
}

export default App;
