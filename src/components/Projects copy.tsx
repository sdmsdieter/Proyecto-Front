export default function Projects() {
  return (
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
  );
}