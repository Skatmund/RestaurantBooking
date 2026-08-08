import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

function StatsCards() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReservations = async () => {
      try {
        const token = localStorage.getItem("staffToken");

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

    loadReservations();
  }, []);

  const totalReservations = reservations.length;

  const pendingReservations = reservations.filter(
    (reservation) => reservation.status === "pending"
  ).length;

  const confirmedReservations = reservations.filter(
    (reservation) => reservation.status === "confirmed"
  ).length;

  const cancelledReservations = reservations.filter(
    (reservation) => reservation.status === "cancelled"
  ).length;

  const cards = [
    {
      title: "Total Reservations",
      value: totalReservations,
    },
    {
      title: "Pending",
      value: pendingReservations,
    },
    {
      title: "Confirmed",
      value: confirmedReservations,
    },
    {
      title: "Cancelled",
      value: cancelledReservations,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <p className="text-gray-500 font-medium">
            {card.title}
          </p>

          <p className="text-3xl font-bold text-gray-800 mt-2">
            {loading ? "..." : card.value}
          </p>
        </div>
      ))}

    </div>
  );
}

export default StatsCards;