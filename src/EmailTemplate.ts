
{/* Email Confirmation Template - Add to your email service/backend */}

// Example for email content (use with your email service like SendGrid, etc.)

const appointmentConfirmationEmail = (bookingData) => ({
  to: bookingData.email,
  subject: "Your GoodSpa Appointment Confirmation",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #27ae60;">Your Appointment is Confirmed! ✨</h2>

      <p>Hi ${bookingData.name},</p>

      <p>We're excited to provide your in-home spa service! Here's a quick reminder of what to prepare:</p>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Before Your Appointment:</h3>
        <ul style="line-height: 1.8;">
          <li>✓ Clear 6.5 ft x 9 ft floor space in your preferred room</li>
          <li>✓ Ensure electrical outlet is accessible</li>
          <li>✓ Have parking spot ready or provide street parking details</li>
          <li>✓ Secure pets in another room (if applicable)</li>
          <li>✓ Set room to comfortable temperature</li>
        </ul>
      </div>

      <p><strong>Your Appointment Details:</strong></p>
      <p>Date: [APPOINTMENT_DATE]<br>
      Time: [APPOINTMENT_TIME]<br>
      Address: ${bookingData.address}</p>

      <p>If you need to make any changes or have questions, please contact us at [YOUR_PHONE] or reply to this email.</p>

      <p>See you soon!<br>
      The GoodSpa Team</p>
    </div>
  `
});

export default appointmentConfirmationEmail;
