function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            TableEase
          </h2>

          <p className="mt-4 text-gray-400">
            Reserve your favorite table effortlessly and enjoy
            unforgettable dining experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Opening Hours
          </h3>

          <p className="text-gray-400">
            Monday - Friday
          </p>

          <p className="text-gray-400">
            10:00 AM - 10:00 PM
          </p>

          <p className="text-gray-400 mt-3">
            Saturday - Sunday
          </p>

          <p className="text-gray-400">
            9:00 AM - 11:00 PM
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Manila, Philippines
          </p>

          <p className="text-gray-400">
            📞 +63 912 345 6789
          </p>

          <p className="text-gray-400">
            ✉️ hello@tableease.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 TableEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;