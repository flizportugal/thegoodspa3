/*
  # Fix RLS Policy Security Issue

  1. Changes
    - Drop overly permissive RLS policy on bookings table
    - Create restrictive policy that validates booking data
    
  2. Security Improvements
    - Validate that all required fields are not empty
    - Validate email format using regex pattern
    - Validate field lengths to prevent abuse
    - Validate that service, date, and time fields contain reasonable values
    - Limit message length to prevent spam
    - Prevent insertion of malicious or invalid data
    
  3. Validation Rules
    - Name: 1-100 characters, not empty
    - Email: Valid email format, max 255 characters
    - Phone: 1-20 characters, not empty
    - Service: 1-200 characters, not empty
    - Preferred date: 1-50 characters, not empty
    - Preferred time: 1-50 characters, not empty
    - Message: Optional, max 1000 characters
*/

DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;

CREATE POLICY "Allow valid booking submissions"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND 
    length(trim(name)) > 0 AND
    length(name) <= 100 AND
    email IS NOT NULL AND 
    length(trim(email)) > 0 AND
    length(email) <= 255 AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    phone IS NOT NULL AND 
    length(trim(phone)) > 0 AND
    length(phone) <= 20 AND
    service IS NOT NULL AND 
    length(trim(service)) > 0 AND
    length(service) <= 200 AND
    preferred_date IS NOT NULL AND 
    length(trim(preferred_date)) > 0 AND
    length(preferred_date) <= 50 AND
    preferred_time IS NOT NULL AND 
    length(trim(preferred_time)) > 0 AND
    length(preferred_time) <= 50 AND
    (message IS NULL OR length(message) <= 1000)
  );
