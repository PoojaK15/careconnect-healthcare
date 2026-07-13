import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <section className="success-page">
      <div className="container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2 className="section-title">Thank you for contacting Jarurat Care Foundation.</h2>
          <p className="section-copy">
            Your request has been successfully recorded. A volunteer will contact you shortly.
          </p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessPage;
