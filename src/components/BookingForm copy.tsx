
{/* Enhanced Booking Form Component - Add to your booking page */}

import React, { useState } from 'react';

interface BookingFormData {
  // Client Info
  name: string;
  email: string;
  phone: string;
  address: string;

  // Space Requirements
  roomDimensions: string;
  hasElectricalOutlet: boolean;
  parkingDetails: string;
  preferredRoom: string;

  // Health & Safety
  medicalConditions: string;
  skinConcerns: string;
  allergies: string;
  recentProcedures: string;
  isPregnant: boolean;
  medications: string;

  // Preferences
  treatmentGoals: string;
  pressurePreference: 'light' | 'medium' | 'firm' | '';
  productPreference: 'scented' | 'unscented' | 'no-preference';

  // Additional Info
  petsPresent: boolean;
  petDetails: string;
  additionalNotes: string;
}

export default function EnhancedBookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomDimensions: '',
    hasElectricalOutlet: true,
    parkingDetails: '',
    preferredRoom: '',
    medicalConditions: '',
    skinConcerns: '',
    allergies: '',
    recentProcedures: '',
    isPregnant: false,
    medications: '',
    treatmentGoals: '',
    pressurePreference: '',
    productPreference: 'no-preference',
    petsPresent: false,
    petDetails: '',
    additionalNotes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {/* Basic Information */}
      <section className="form-section">
        <h3>Contact Information</h3>
        <input
          type="text"
          placeholder="Full Name *"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <textarea
          placeholder="Full Address *"
          required
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </section>

      {/* Space Requirements */}
      <section className="form-section">
        <h3>Space & Setup Requirements</h3>
        <p className="info-text">We need minimum 6.5 ft x 9 ft of clear floor space</p>

        <label>
          Approximate room dimensions available:
          <input
            type="text"
            placeholder="e.g., 10 ft x 12 ft"
            value={formData.roomDimensions}
            onChange={(e) => setFormData({...formData, roomDimensions: e.target.value})}
          />
        </label>

        <label>
          Preferred room for treatment:
          <select
            value={formData.preferredRoom}
            onChange={(e) => setFormData({...formData, preferredRoom: e.target.value})}
          >
            <option value="">Select a room</option>
            <option value="bedroom">Bedroom</option>
            <option value="living-room">Living Room</option>
            <option value="spare-room">Spare Room</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.hasElectricalOutlet}
            onChange={(e) => setFormData({...formData, hasElectricalOutlet: e.target.checked})}
          />
          Electrical outlet available nearby
        </label>

        <label>
          Parking details or building access codes:
          <textarea
            placeholder="Where should I park? Any access codes or special instructions?"
            value={formData.parkingDetails}
            onChange={(e) => setFormData({...formData, parkingDetails: e.target.value})}
          />
        </label>
      </section>

      {/* Health & Safety */}
      <section className="form-section">
        <h3>Health & Safety Information</h3>
        <p className="info-text">This information helps us provide safe, customized treatments</p>

        <label>
          Medical conditions or recent surgeries:
          <textarea
            placeholder="Any conditions we should know about?"
            value={formData.medicalConditions}
            onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
          />
        </label>

        <label>
          Current medications:
          <input
            type="text"
            placeholder="List any medications you're taking"
            value={formData.medications}
            onChange={(e) => setFormData({...formData, medications: e.target.value})}
          />
        </label>

        <label>
          Skin concerns or sensitivities:
          <textarea
            placeholder="Acne, dryness, sensitivity, etc."
            value={formData.skinConcerns}
            onChange={(e) => setFormData({...formData, skinConcerns: e.target.value})}
          />
        </label>

        <label>
          Allergies (products, fragrances, oils):
          <textarea
            placeholder="Any allergies we should avoid?"
            value={formData.allergies}
            onChange={(e) => setFormData({...formData, allergies: e.target.value})}
          />
        </label>

        <label>
          Recent cosmetic procedures (Botox, fillers, peels, etc.):
          <input
            type="text"
            placeholder="Any procedures in the last 3 months?"
            value={formData.recentProcedures}
            onChange={(e) => setFormData({...formData, recentProcedures: e.target.value})}
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.isPregnant}
            onChange={(e) => setFormData({...formData, isPregnant: e.target.checked})}
          />
          I am currently pregnant
        </label>
      </section>

      {/* Treatment Preferences */}
      <section className="form-section">
        <h3>Treatment Preferences</h3>

        <label>
          What are your treatment goals?
          <textarea
            placeholder="What would you like to achieve from this service?"
            value={formData.treatmentGoals}
            onChange={(e) => setFormData({...formData, treatmentGoals: e.target.value})}
          />
        </label>

        <label>
          Massage pressure preference:
          <select
            value={formData.pressurePreference}
            onChange={(e) => setFormData({...formData, pressurePreference: e.target.value as any})}
          >
            <option value="">Select preference</option>
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="firm">Firm</option>
          </select>
        </label>

        <label>
          Product preference:
          <select
            value={formData.productPreference}
            onChange={(e) => setFormData({...formData, productPreference: e.target.value as any})}
          >
            <option value="no-preference">No Preference</option>
            <option value="scented">Scented Products</option>
            <option value="unscented">Unscented Products Only</option>
          </select>
        </label>
      </section>

      {/* Additional Details */}
      <section className="form-section">
        <h3>Additional Information</h3>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.petsPresent}
            onChange={(e) => setFormData({...formData, petsPresent: e.target.checked})}
          />
          Pets will be present in the home
        </label>

        {formData.petsPresent && (
          <label>
            Pet details:
            <input
              type="text"
              placeholder="Type of pet and where they'll be during treatment"
              value={formData.petDetails}
              onChange={(e) => setFormData({...formData, petDetails: e.target.value})}
            />
          </label>
        )}

        <label>
          Any other notes or requests:
          <textarea
            placeholder="Anything else we should know?"
            value={formData.additionalNotes}
            onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
          />
        </label>
      </section>

      <button type="submit" className="submit-btn">Complete Booking</button>
    </form>
  );
}
