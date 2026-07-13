import { useLocation, Link } from 'react-router-dom';

function AIReviewPage() {
  const location = useLocation();
  const formData = location.state?.formData || {};

  // The AI summary is simulated with simple keyword-based rules for a frontend-only demo.
  const symptoms = (formData.symptoms || '').toLowerCase();
  const detectedSymptoms = [...new Set(symptoms.split(/[,.;\n]+/).filter(Boolean))];

  let department = 'General Medicine';
  let priority = 'Medium';
  let responseTime = 'Within 2 hours';
  let summary = 'Please proceed with standard volunteer support and monitor the patient closely.';

  if (symptoms.includes('fever') || symptoms.includes('headache')) {
    department = 'General Medicine';
    priority = 'Medium';
    responseTime = 'Within 1 hour';
    summary = 'The symptoms suggest a common medical concern that may benefit from quick review and home-care guidance.';
  }

  if (symptoms.includes('cough') || symptoms.includes('cold')) {
    department = 'Respiratory Care';
    priority = 'Medium';
    responseTime = 'Within 90 minutes';
    summary = 'Respiratory symptoms have been noted and should be managed with calm support and observation.';
  }

  if (symptoms.includes('pregnancy')) {
    department = 'Gynecology';
    priority = 'High';
    responseTime = 'Within 30 minutes';
    summary = 'Pregnancy-related concerns require prompt attention from a specialist volunteer team.';
  }

  if (symptoms.includes('fracture') || symptoms.includes('accident') || symptoms.includes('bleeding')) {
    department = 'Emergency Care';
    priority = 'High';
    responseTime = 'Immediate';
    summary = 'The case appears urgent and may require rapid emergency coordination.';
  }

  if (symptoms.includes('child') || symptoms.includes('baby')) {
    department = 'Pediatrics';
    priority = 'High';
    responseTime = 'Within 45 minutes';
    summary = 'A pediatric case has been identified and should be handled with extra care.';
  }

  return (
    <section className="form-page">
      <div className="container">
        <div className="summary-card">
          <p style={{ color: '#1d9b71', fontWeight: 700, marginBottom: '0.4rem' }}>AI-generated preliminary summary for volunteer assistance.</p>
          <h2 className="section-title">Case Summary Review</h2>
          <p className="section-copy">
            This summary uses simple rule-based logic to help volunteers understand the likely care area.
          </p>

          <div className="summary-list">
            <div className="summary-item">
              <strong>Detected Symptoms</strong>
              <span>{detectedSymptoms.length ? detectedSymptoms.join(', ') : 'No symptoms detected'}</span>
            </div>
            <div className="summary-item">
              <strong>Estimated Priority</strong>
              <span>{priority}</span>
            </div>
            <div className="summary-item">
              <strong>Suggested Department</strong>
              <span>{department}</span>
            </div>
            <div className="summary-item">
              <strong>Recommended Volunteer Response Time</strong>
              <span>{responseTime}</span>
            </div>
          </div>

          <div className="feature-card" style={{ marginTop: '1rem' }}>
            <h3>AI Summary</h3>
            <p>{summary}</p>
            <p>
              Patient: <strong>{formData.fullName || 'Anonymous'}</strong> · City: <strong>{formData.city || 'Unknown'}</strong>
            </p>
          </div>

          <div className="actions" style={{ marginTop: '1rem' }}>
            <Link className="btn btn-primary" to="/success">
              Continue to Success
            </Link>
            <Link className="btn btn-secondary" to="/support">
              Edit Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIReviewPage;
