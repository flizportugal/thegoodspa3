import { useEffect, useState } from 'react';
import { supabase, type Booking } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 space-y-4">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Booking Requests</CardTitle>
          <p className="text-sm text-gray-600">
            Total bookings: {bookings.length}
          </p>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No bookings yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Date Submitted</th>
                    <th className="text-left p-3 font-semibold">Name</th>
                    <th className="text-left p-3 font-semibold">Email</th>
                    <th className="text-left p-3 font-semibold">Phone</th>
                    <th className="text-left p-3 font-semibold">Service</th>
                    <th className="text-left p-3 font-semibold">Preferred Date</th>
                    <th className="text-left p-3 font-semibold">Preferred Time</th>
                    <th className="text-left p-3 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 text-sm">
                        {format(new Date(booking.created_at), 'MMM d, yyyy h:mm a')}
                      </td>
                      <td className="p-3">{booking.name}</td>
                      <td className="p-3 text-sm">{booking.email}</td>
                      <td className="p-3 text-sm">{booking.phone}</td>
                      <td className="p-3">
                        <Badge variant="secondary" className="whitespace-nowrap">
                          {booking.service}
                        </Badge>
                      </td>
                      <td className="p-3 text-sm">{booking.preferred_date}</td>
                      <td className="p-3 text-sm">{booking.preferred_time}</td>
                      <td className="p-3 text-sm max-w-xs">
                        {booking.message || <span className="text-gray-400">No message</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
