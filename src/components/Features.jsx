import { ChartNoAxesCombined, FileSearch, ShieldCheck, Users } from 'lucide-react'
import './Features.css'

const features = [
  {
    title: 'Find Trusted Pros',
    description: 'Connect with verified subcontractors you can count on.',
    Icon: ShieldCheck,
  },
  {
    title: 'Post & Find Work',
    description: 'Post projects or find opportunities that match your skills.',
    Icon: FileSearch,
  },
  {
    title: 'Build Relationships',
    description: 'Network, communicate, and build long-term partnerships.',
    Icon: Users,
  },
  {
    title: 'Grow Your Business',
    description: 'Win more jobs and scale your business with CrewUp.',
    Icon: ChartNoAxesCombined,
  },
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-card">
        {features.map(({ title, description, Icon }) => (
          <div key={title} className="feature-item">
            <div className="feature-icon">
              <Icon className="feature-icon-svg" aria-hidden="true" />
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
