const reservations = [
  {
    id: 1,
    customer: "Juan Dela Cruz",
    guests: 2,
    date: "2026-08-08",
    time: "7:00 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Maria Santos",
    guests: 4,
    date: "2026-08-09",
    time: "6:30 PM",
    status: "Pending",
  },
  {
    id: 3,
    customer: "John Smith",
    guests: 3,
    date: "2026-08-10",
    time: "8:00 PM",
    status: "Completed",
  },
];

function ReservationTable() {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Reservation Dashboard
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

          <input
            type="text"
            placeholder="Search reservation..."
            className="border rounded-lg px-4 py-3 w-full md:w-80"
          />

          <select className="border rounded-lg px-4 py-3">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-orange-600 text-white">

              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {reservations.map((reservation) => (

                <tr
                  key={reservation.id}
                  className="border-b hover:bg-orange-50"
                >
                  <td className="p-4">{reservation.customer}</td>
                  <td className="p-4">{reservation.guests}</td>
                  <td className="p-4">{reservation.date}</td>
                  <td className="p-4">{reservation.time}</td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {reservation.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-3 justify-center">

                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default ReservationTable;