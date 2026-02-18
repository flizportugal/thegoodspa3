/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `service` (text) - Selected service type
      - `preferred_date` (text) - Preferred appointment date
      - `preferred_time` (text) - Preferred appointment time
      - `message` (text, nullable) - Optional additional message from customer
      - `created_at` (timestamptz) - Timestamp when booking was created
      
  2. Security
    - Enable RLS on `bookings` table
    - Add policy to allow anyone to create bookings (public form submission)
    - Add policy to allow authenticated users to read all bookings (admin access)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  preferred_date text NOT NULL,
  preferred_time text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);