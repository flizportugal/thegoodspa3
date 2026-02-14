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