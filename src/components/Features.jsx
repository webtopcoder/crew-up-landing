import './Features.css'

const features = [
  {
    title: 'Find Trusted Pros',
    description: 'Connect with verified subcontractors you can count on.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 3L4 7.5V13.5C4 19.5 8.5 24.5 14 26C19.5 24.5 24 19.5 24 13.5V7.5L14 3Z"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M10 14L12.5 16.5L18 11"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Post & Find Work',
    description: 'Post projects or find opportunities that match your skills.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect
          x="6"
          y="4"
          width="16"
          height="20"
          rx="2"
          stroke="#0066FF"
          strokeWidth="1.75"
        />
        <path
          d="M10 9H18M10 13H16"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="19" cy="19" r="4.5" stroke="#0066FF" strokeWidth="1.75" />
        <path
          d="M21.5 21.5L24 24"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Build Relationships',
    description: 'Network, communicate, and build long-term partnerships.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="3.5" stroke="#0066FF" strokeWidth="1.75" />
        <circle cx="18" cy="10" r="3.5" stroke="#0066FF" strokeWidth="1.75" />
        <path
          d="M4.5 22C4.5 18.5 6.8 16 10 16C11.5 16 12.8 16.5 14 17.3"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M18 16C21.2 16 23.5 18.5 23.5 22"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="20" cy="18" r="2.5" stroke="#0066FF" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: 'Grow Your Business',
    description: 'Win more jobs and scale your business with CrewUp.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="16"
          width="4"
          height="8"
          rx="1"
          stroke="#0066FF"
          strokeWidth="1.75"
        />
        <rect
          x="12"
          y="11"
          width="4"
          height="13"
          rx="1"
          stroke="#0066FF"
          strokeWidth="1.75"
        />
        <rect
          x="20"
          y="6"
          width="4"
          height="18"
          rx="1"
          stroke="#0066FF"
          strokeWidth="1.75"
        />
        <path
          d="M6 10L13 7L20 4"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 4H22V8"
          stroke="#0066FF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-card">
        {features.map((feature) => (
          <div key={feature.title} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
