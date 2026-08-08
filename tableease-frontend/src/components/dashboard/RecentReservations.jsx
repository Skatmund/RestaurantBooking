import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

function RecentReservations({ searchTerm, statusFilter,}) {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);


  const filteredReservations = reservations.filter(
    (reservation) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        reservation.name?.toLowerCase().includes(search) ||
        reservation.email?.toLowerCase().includes(search) ||
        reservation.phone?.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "all" ||
        reservation.status === statusFilter;

      return matchesSearch && matchesStatus;
    }
  );

  const getToken = () => {
    return localStorage.getItem("staffToken");
  };

  const fetchReservations = async () => {
    try {
      const token = getToken();

      const response = await axios.get(
        `${API_URL}/reservations`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReservations(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch reservations:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = getToken();

      await axios.patch(
        `${API_URL}/reservations/${id}`,
        { status },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchReservations();

    } catch (error) {
      console.error(
        "Failed to update reservation:",
        error
      );

      alert("Could not update reservation.");
    }
  };

  const deleteReservation = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const token = getToken();

      await axios.delete(
        `${API_URL}/reservations/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove it immediately from the screen
      setReservations((currentReservations) =>
        currentReservations.filter(
          (reservation) => reservation.id !== id
        )
      );

    } catch (error) {
      console.error(
        "Failed to delete reservation:",
        error
      );

      alert("Could not delete reservation.");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <p className="text-gray-500">
          Loading reservations...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Recent Reservations
        </h2>

        <button
          onClick={fetchReservations}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Refresh
        </button>

      </div>

      {filteredReservations.length === 0 ? (
        <p className="text-gray-500">
          No reservations yet.
        </p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b text-left text-gray-500">

                <th className="py-3">
                  Customer
                </th>

                <th className="py-3">
                  Guests
                </th>

                <th className="py-3">
                  Date
                </th>

                <th className="py-3">
                  Time
                </th>

                <th className="py-3">
                  Status
                </th>

                <th className="py-3">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredReservations.map((reservation) => (

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

                    <div className="flex gap-2 flex-wrap">

                      {reservation.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              updateStatus(
                                reservation.id,
                                "confirmed"
                              )
                            }
                            className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                          >
                            Confirm
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(
                                reservation.id,
                                "cancelled"
                              )
                            }
                            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      <button
                        onClick={() =>
                          deleteReservation(reservation.id)
                        }
                        className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-800"
                      >
                        Delete
                      </button>

                    </div>

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