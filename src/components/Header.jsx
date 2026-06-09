import './Header.css'

const navLinks = [
  'How It Works',
  'Find Work',
  'Find Contractors',
  'Pricing',
  'Resources',
]

function Logo() {
  return (
    <a href="/" className="logo" aria-label="CREWUP home">
      <svg
        className="logo-icon"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14c3.866 0 7.366-1.566 9.9-4.1"
          stroke="#0066FF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M18 4c7.732 0 14 6.268 14 14s-6.268 14-14 14"
          stroke="#1a1a1a"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="logo-text">
        <span className="logo-crew">CREW</span>
        <span className="logo-up">UP</span>
      </span>
    </a>
  )
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Logo />

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="nav-link">
                  {link}
                  {link === 'Resources' && (
                    <svg
                      className="nav-chevron"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn-text">
            Log In
          </a>
          <a href="#" className="btn-primary btn-sm">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  )
}
