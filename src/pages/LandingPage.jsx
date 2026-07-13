import { Link } from 'react-router-dom';

const features = [
  {
    icon: '📝',
    title: 'Quick Registration',
    description: 'A simple form helps patients share their needs in minutes.',
  },
  {
    icon: '🤖',
    title: 'AI Assisted Case Summary',
    description: 'The portal creates a preliminary summary for volunteer triage.',
  },
  {
    icon: '🤝',
    title: 'Volunteer Support',
    description: 'Connect patients with caring volunteers for immediate assistance.',
  },
];

function LandingPage() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-card">
          <p style={{ color: '#1d9b71', fontWeight: 700, marginBottom: '0.5rem' }}>CareConnect</p>
          <h1>Mini Healthcare Support Portal</h1>
          <p>
            Helping patients connect with volunteers for timely healthcare support through Jarurat Care Foundation.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/support">
              Request Support
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <strong>24/7</strong>
              <span>Volunteer help</span>
            </div>
            <div className="stat-box">
              <strong>100+</strong>
              <span>Support cases</span>
            </div>
            <div className="stat-box">
              <strong>3</strong>
              <span>Care departments</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <h3>Why this portal matters</h3>
            <p>
              The experience is designed to make healthcare support feel approachable, organized, and human-centered.
            </p>
            <div className="feature-grid" style={{ marginTop: '0.5rem' }}>
              {features.map((feature) => (
                <div key={feature.title} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
