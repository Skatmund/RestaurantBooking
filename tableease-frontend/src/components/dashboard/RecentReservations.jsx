const recentReservations = [
  {
    id: 1,
    customer: "Juan Dela Cruz",
    guests: 2,
    time: "6:00 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Maria Santos",
    guests: 4,
    time: "7:30 PM",
    status: "Pending",
  },
  {
    id: 3,
    customer: "John Smith",
    guests: 5,
    time: "8:00 PM",
    status: "Completed",
  },
];

function RecentReservations() {
  return (
    <div className="bg-white rounded-xl shadow mt-8 p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Reservations
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Customer</th>
            <th>Guests</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {recentReservations.map((reservation) => (
            <tr key={reservation.id} className="border-b">
              <td className="py-4">{reservation.customer}</td>
              <td className="text-center">{reservation.guests}</td>
              <td className="text-center">{reservation.time}</td>
              <td className="text-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {reservation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentReservations;