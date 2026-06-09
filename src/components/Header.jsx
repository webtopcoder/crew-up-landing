import crewupLogo from '../assets/crewup-logo-horizontal.png'
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
      <img src={crewupLogo} alt="CREWUP — a robb building materials co." className="logo-image" />
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
