// import { useState } from 'react'
import './App.css'

function Home() {
  // const projects = [
  // {
  //   id: 'dashboard',
  //   title: 'Industrial Automation Dashboard',
  //   year: '2026',
  //   description:
  //     'A web platform for monitoring industrial equipment, managing maintenance tasks, and visualizing production metrics through a FastAPI backend and a responsive React dashboard.',
  //   technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
  //   featured: true,
  // },
  // {
  //   id: 'cad',
  //   title: 'CAD/CAM Mechanical Design',
  //   description:
  //     'Design and optimization of mechanical components and manufacturing-ready assemblies using SolidWorks.',
  //   technologies: ['SolidWorks', 'CAD/CAM'],
  // },
  // {
  //   id: 'iot',
  //   title: 'IoT Monitoring System',
  //   description:
  //     'Sensor data acquisition and monitoring prototype using ESP32, MQTT, Python, and FastAPI.',
  //   technologies: ['IoT', 'Python', 'MQTT'],
  // },
// ];

  return (
    <>
      <main className='page'>
        <nav className='navbar'>
          <div className='navbar-container'>
            <a href='#hero' className='logo'>
              Stefan Morejon
            </a>

            <div className='nav-links'>
              <a href='#about'>About</a>
              <a href='#projects'>Projects</a>
              <a href='#experience'>Experience</a>
              <a href='#skills'>Skills</a>
              <a href='#contact'>Contact</a>
            </div>
          </div>
        </nav>
      <section id='hero' className='hero-page'>
        <div className='hero-content'>
          <p className='hero-tag'>Open to opportunities • Bolivia</p>

          <h1>
            Stefan Morejon
          </h1>

          <h2>Mechatronics Engineer & Full-Stack Developer | CAD/CAM Designer | IoT Developer</h2>

          <p className='hero-description'>
            I build modern web applications using React and FastAPI, while also
            developing automation and mechanical design solutions with
            SolidWorks. I enjoy creating clean, scalable, and practical software
            that solves real-world problems.
          </p>

          <div className='hero-buttons'>
            <button className='btn-primary'>View Projects</button>
            <button className='btn-secondary'>Download Resume</button>
          </div>
        </div>

        <div className='hero-card'>
          <div className='card-glow'></div>

          <div className='profile-circle'>SM</div>

          <h3>Main Stack</h3>

          <div className='stack-grid'>
            <span>React</span>
            <span>TypeScript</span>
            <span>FastAPI</span>
            <span>Python</span>
            <span>SolidWorks</span>
            <span>Git</span>
          </div>
        </div>
      </section>
       <section id='about' className='about-section'>
        <div className='about-left'>
          <p className='section-label'>About me</p>

          <h2>Engineering systems that connect hardware and software.</h2>

          <p>
            I'm a Mechatronics Engineer with a strong interest in software
            engineering, industrial automation, and intelligent systems. My
            background allows me to understand both the physical and digital
            sides of a project—from CAD/CAM design and manufacturing processes
            to web applications, APIs, and data-driven automation.
          </p>

          <p>
            I enjoy building practical solutions that connect hardware and
            software, whether through IoT systems, automation workflows, or
            full-stack applications. I'm currently focused on expanding my
            expertise in React, FastAPI, TypeScript, and modern software
            architecture while continuing to develop engineering-focused
            projects.
          </p>
        </div>

        <div className='about-right'>
          <div className='info-card'>
            <span>Location</span>
            <strong>La Paz, Bolivia</strong>
          </div>

          <div className='info-card'>
            <span>Languages</span>
            <strong>English (B2) / Spanish (Native)</strong>
          </div>

          <div className='info-card'>
            <span>Focus</span>
            <strong>Full-Stack • CAD/CAM • IoT • Automation</strong>
          </div>

          <div className='info-card'>
            <span>Availability</span>
            <strong>Open to remote and international opportunities</strong>
          </div>
        </div>
      </section>
            {/* PROJECTS SECTION */}
      <section id='projects' className='projects-section'>
        <div className='projects-header'>
          <div>
            <p className='section-label'>Projects</p>
            <h2>Selected projects</h2>
            <p className='projects-intro'>
              A curated selection of software, automation, and engineering
              projects that reflect my approach to building practical,
              scalable, and technically grounded solutions.
            </p>
          </div>

          <button className='btn-secondary'>View all projects</button>
        </div>

        <div className='featured-project'>
          <div className='project-image'></div>

          <div className='project-content'>
            <div className='project-meta'>
              <span>Featured project</span>
              <span>2026</span>
            </div>

            <h3>Industrial Automation Dashboard</h3>

            <p>
              A web platform for monitoring industrial equipment, managing
              maintenance tasks, and visualizing production metrics through a
              FastAPI backend and a responsive React dashboard.
            </p>

            <div className='project-stack'>
              <span>React</span>
              <span>TypeScript</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
            </div>

            <div className='project-links'>
              <button className='btn-primary'>Live Demo</button>
              <button className='btn-secondary'>GitHub</button>
            </div>
          </div>
        </div>

        <div className='projects-grid'>
          <article className='project-card'>
            <div className='project-thumb'></div>

            <h4>CAD/CAM Mechanical Design</h4>

            <p>
              Design and optimization of mechanical components and
              manufacturing-ready assemblies using SolidWorks.
            </p>

            <div className='project-stack'>
              <span>SolidWorks</span>
              <span>CAD/CAM</span>
            </div>
          </article>

          <article className='project-card'>
            <div className='project-thumb'></div>

            <h4>IoT Monitoring System</h4>

            <p>
              Sensor data acquisition and monitoring prototype using ESP32,
              MQTT, Python, and FastAPI.
            </p>

            <div className='project-stack'>
              <span>IoT</span>
              <span>Python</span>
              <span>MQTT</span>
            </div>
          </article>
        </div>
      </section>
            {/* EXPERIENCE SECTION */}
      <section id='experience' className='experience-section'>
        <div className='experience-header'>
          <div>
            <p className='section-label'>Experience</p>
            <h2>Engineering & software experience</h2>
            <p className='experience-intro'>
              My experience combines mechanical design, automation, and
              full-stack software development, with a strong focus on building
              practical engineering solutions.
            </p>
          </div>
        </div>

        <div className='timeline'>
          <div className='timeline-item'>
            <div className='timeline-marker'></div>

            <div className='timeline-content'>
              <div className='timeline-date'>2023 – Present</div>

              <h3>Mechanical Design & Automation Projects</h3>

              <h4>Independent / Academic Projects</h4>

              <p>
                Designed mechanical components and manufacturing-ready assemblies
                in SolidWorks, developed automation-oriented engineering
                projects, and integrated software concepts with hardware-focused
                workflows.
              </p>

              <div className='timeline-tags'>
                <span>SolidWorks</span>
                <span>Automation</span>
                <span>CAD/CAM</span>
              </div>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-marker'></div>

            <div className='timeline-content'>
              <div className='timeline-date'>2025 – Present</div>

              <h3>Full-Stack Development Projects</h3>

              <h4>Personal Portfolio & Web Applications</h4>

              <p>
                Built responsive web applications using React, TypeScript, and
                FastAPI, created REST APIs and modular frontend components, and
                focused on scalable architecture and practical engineering
                solutions.
              </p>

              <div className='timeline-tags'>
                <span>React</span>
                <span>FastAPI</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* SKILLS SECTION */}
      <section id='skills' className='skills-section'>
        <div className='skills-header'>
          <div>
            <p className='section-label'>Skills</p>
            <h2>Technical toolkit</h2>
            <p className='skills-intro'>
              The technologies and tools I use across software development,
              mechanical design, and automation projects.
            </p>
          </div>
        </div>

        <div className='skills-grid'>
          <div className='skill-card'>
            <h3>Frontend Development</h3>

            <div className='skill-tags'>
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Vite</span>
            </div>
          </div>

          <div className='skill-card'>
            <h3>Backend & APIs</h3>

            <div className='skill-tags'>
              <span>FastAPI</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>Firebase</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className='skill-card'>
            <h3>Engineering & CAD</h3>

            <div className='skill-tags'>
              <span>SolidWorks</span>
              <span>CAD/CAM</span>
              <span>Mechanical Design</span>
              <span>Manufacturing</span>
            </div>
          </div>

          <div className='skill-card'>
            <h3>Automation & IoT</h3>

            <div className='skill-tags'>
              <span>ESP32</span>
              <span>Arduino</span>
              <span>MQTT</span>
              <span>Sensors</span>
              <span>Industrial Automation</span>
            </div>
          </div>
        </div>
      </section>
            {/* CONTACT SECTION */}
      <section id='contact' className='contact-section'>
        <div className='contact-header'>
          <div>
            <p className='section-label'>Contact</p>
            <h2>Let's build something together</h2>
            <p className='contact-intro'>
              I'm interested in full-stack development, automation, CAD/CAM,
              and IoT projects. If you have an opportunity or collaboration in
              mind, I'd be happy to hear from you.
            </p>
          </div>
        </div>

        <div className='contact-grid'>
          <div className='contact-info-card'>
            <h3>Contact details</h3>

            <div className='contact-item'>
              <span>Email</span>
              <strong>stefan@example.com</strong>
            </div>

            <div className='contact-item'>
              <span>Location</span>
              <strong>La Paz, Bolivia</strong>
            </div>

            <div className='contact-item'>
              <span>Languages</span>
              <strong>English (B2) / Spanish (Native)</strong>
            </div>

            <div className='contact-item'>
              <span>Availability</span>
              <strong>Open to remote and international opportunities</strong>
            </div>
          </div>

          <form className='contact-form'>
            <div className='form-group'>
              <label>Your name</label>
              <input type='text' placeholder='John Smith' />
            </div>

            <div className='form-group'>
              <label>Your email</label>
              <input type='email' placeholder='john@example.com' />
            </div>

            <div className='form-group'>
              <label>Message</label>
              <textarea
                rows={6}
                placeholder='Tell me about your project or opportunity...'
              ></textarea>
            </div>

            <button type='submit' className='btn-primary'>
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
    </>
  )
}
export default Home
