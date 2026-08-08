import { useState } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/reservations",
      formData
    );

    console.log(response.data);

    alert("Reservation submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      requests: "",
    });

  } catch (error) {
    console.error(error);

    alert("Something went wrong. Please try again.");
  }
};

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-orange-50 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Book Your Table
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Fill in the details below to reserve your table.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                required
              />
            </div>

            {/* Guests, Date, Time */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="font-medium">Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                  min="1"
                  max="12"
                  required
                />
              </div>

              <div>
                <label className="font-medium">Reservation Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>

              <div>
                <label className="font-medium">Reservation Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                  required
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="font-medium">Special Requests</label>
              <textarea
                rows="5"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
                placeholder="Optional..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg text-lg font-semibold transition"
            >
              Reserve Table
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Reservation;