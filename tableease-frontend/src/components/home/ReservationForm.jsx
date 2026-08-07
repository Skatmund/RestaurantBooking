function ReservationForm() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Reserve Your Table
          </h2>
          <p className="text-gray-600 mt-3">
            Book your dining experience in just a few clicks.
          </p>
        </div>

        <form className="bg-orange-50 p-8 rounded-2xl shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="john@email.com"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="09XXXXXXXXX"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Number of Guests
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Reservation Date
              </label>

              <input
                type="date"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Reservation Time
              </label>

              <input
                type="time"
                className="w-full border rounded-lg p-3"
              />
            </div>

          </div>

          <button
            className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            Reserve Table
          </button>

        </form>

      </div>
    </section>
  );
}

export default ReservationForm;