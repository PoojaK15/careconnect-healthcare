import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  fullName: '',
  age: '',
  gender: '',
  phone: '',
  email: '',
  city: '',
  symptoms: '',
  urgency: 'Medium',
  contactMethod: 'Phone',
  notes: '',
};

function SupportFormPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the patient form before generating a summary or submitting the request.
  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.age) nextErrors.age = 'Age is required.';
    if (!formData.gender) nextErrors.gender = 'Please select a gender.';
    if (!/^[0-9]{10}$/.test(formData.phone)) nextErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email.';
    if (!formData.city.trim()) nextErrors.city = 'City is required.';
    if (!formData.symptoms.trim()) nextErrors.symptoms = 'Please describe the health issue.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleGenerateSummary = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    navigate('/summary', { state: { formData } });
  };

  const handleSubmitRequest = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    navigate('/success');
  };

  return (
    <section className="form-page">
      <div className="container">
        <div className="form-card">
          <h2 className="section-title">Patient Support Form</h2>
          <p className="section-copy">
            Share a few details so our volunteer team can prepare the best support.
          </p>

          <form>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="field">
                <label htmlFor="age">Age</label>
                <input id="age" name="age" type="number" value={formData.age} onChange={handleChange} />
                {errors.age && <span className="error-text">{errors.age}</span>}
              </div>

              <div className="field">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="city">City</label>
                <input id="city" name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <span className="error-text">{errors.city}</span>}
              </div>

              <div className="field full-width">
                <label htmlFor="symptoms">Health Issue / Symptoms</label>
                <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} />
                {errors.symptoms && <span className="error-text">{errors.symptoms}</span>}
              </div>

              <div className="field">
                <label htmlFor="urgency">Urgency Level</label>
                <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="contactMethod">Preferred Contact Method</label>
                <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>

              <div className="field full-width">
                <label htmlFor="notes">Additional Notes</label>
                <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-secondary" onClick={handleGenerateSummary}>
                Generate AI Summary
              </button>
              <button className="btn btn-primary" onClick={handleSubmitRequest}>
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SupportFormPage;
