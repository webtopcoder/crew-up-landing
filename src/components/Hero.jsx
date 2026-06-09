import heroImage from '../assets/hero-construction.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Better.
            <br />
            <span className="hero-title-accent">Together.</span>
          </h1>
          <p className="hero-subtitle">
            CrewUp is the marketplace for general contractors to find trusted
            subcontractors and build stronger teams.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.5 12.5L16 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Find Subcontractors
            </a>
            <a href="#" className="btn-outline">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 5.5V12.5M5.5 9H12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Post a Project
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Construction workers reviewing plans on a tablet at a job site"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
