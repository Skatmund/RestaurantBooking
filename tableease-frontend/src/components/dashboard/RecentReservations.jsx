import { useEffect, useState } from "react";
import axios from "axios";

function RecentReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/reservations"
      );

      setReservations(response.data);
    } catch (error) {
      console.error("Failed to fetch reservations:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/reservations/${id}`,
        { status }
      );

      // Reload reservations after updating
      const response = await axios.get(
        "http://127.0.0.1:8000/api/reservations"
      );

      setReservations(response.data);

    } catch (error) {
      console.error("Failed to update reservation:", error);
      alert("Could not update reservation.");
    }
  };

useEffect(() => {
  const loadReservations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/reservations"
      );

      setReservations(response.data);
    } catch (error) {
      console.error("Failed to fetch reservations:", error);
    } finally {
      setLoading(false);
    }
  };

  loadReservations();
}, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 mt-8">
        <p className="text-gray-500">Loading reservations...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Recent Reservations
        </h2>

        <button
          onClick={fetchReservations}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Refresh
        </button>
      </div>

      {reservations.length === 0 ? (
        <p className="text-gray-500">
          No reservations yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">Customer</th>
                <th className="py-3">Guests</th>
                <th className="py-3">Date</th>
                <th className="py-3">Time</th>
                <th className="py-3">Status</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="border-b last:border-b-0"
                >
                  <td className="py-4">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {reservation.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {reservation.email}
                      </p>
                    </div>
                  </td>

                  <td className="py-4">
                    {reservation.guests}
                  </td>

                  <td className="py-4">
                    {reservation.date}
                  </td>

                  <td className="py-4">
                    {reservation.time}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        reservation.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : reservation.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>
                  <td className="py-4">
                    {reservation.status === "pending" && (
                    <div className="flex gap-2">
                    <button
                    onClick={() => updateStatus(reservation.id, "confirmed")}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                    >
                    Confirm
                    </button>

                    <button
                    onClick={() => updateStatus(reservation.id, "cancelled")}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                    >
                    Cancel
                    </button>
                    </div>
                    )}

                    {reservation.status !== "pending" && (
                    <span className="text-gray-400 text-sm">
                    No actions
                    </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

}

export default RecentReservations;