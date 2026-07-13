function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-card">
          <h2 className="section-title">About Jarurat Care Foundation</h2>
          <p className="section-copy">
            Jarurat Care Foundation focuses on compassionate community healthcare support, ensuring vulnerable patients can access guidance, assistance, and human connection when it matters most.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Mission</h3>
              <p>Bring timely support to patients and families through a caring network of volunteers.</p>
            </div>
            <div className="info-card">
              <h3>Approach</h3>
              <p>Use simple digital tools to streamline the intake experience and inform response teams.</p>
            </div>
            <div className="info-card">
              <h3>Vision</h3>
              <p>Create a friendly, accessible healthcare support experience for every community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
