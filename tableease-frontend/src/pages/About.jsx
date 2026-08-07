import Navbar from "../components/layout/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center text-gray-800">
            About TableEase
          </h1>

          <p className="mt-4 text-center text-gray-600">
            We make restaurant reservations simple, fast, and convenient.
          </p>

        </div>
      </section>
    </>
  );
}

export default About;