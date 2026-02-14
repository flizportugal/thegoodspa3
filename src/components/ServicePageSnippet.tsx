
{/* Add this to individual service pages (Massage, Facial, etc.) */}

<section className="service-requirements">
  <h3>What You'll Need for Your In-Home Service</h3>
  <div className="requirements-grid">
    <div className="requirement-card">
      <h4>📏 Space</h4>
      <p>Minimum 6.5 ft x 9 ft clear floor area</p>
    </div>
    <div className="requirement-card">
      <h4>🔌 Power</h4>
      <p>Access to electrical outlet</p>
    </div>
    <div className="requirement-card">
      <h4>🚗 Parking</h4>
      <p>Parking spot or street parking nearby</p>
    </div>
    <div className="requirement-card">
      <h4>🏠 Room</h4>
      <p>Quiet, private space at comfortable temperature</p>
    </div>
  </div>
</section>

/* Add corresponding CSS: */
.service-requirements {
  margin: 3rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.service-requirements h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.requirement-card {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.requirement-card h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.requirement-card p {
  color: #555;
  font-size: 0.95rem;
}
