import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-8 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Welcome to TableEase
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
            Reserve Your
            <br />
            Perfect Table
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Experience unforgettable dining with delicious meals,
            warm hospitality, and hassle-free reservations.
          </p>

          <Link
            to="/reservation"
            className="inline-block mt-8 bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition duration-300"
          >
            Reserve Now
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
            alt="Restaurant"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;