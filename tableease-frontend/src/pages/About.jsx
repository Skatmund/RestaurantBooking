import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* Header */}
        <section className="bg-orange-50 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About DineIn
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            Good food, great company, and memorable moments.
          </p>
        </section>

        {/* Story */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Story
            </h2>

            <p className="text-gray-600 mt-6 leading-8 max-w-3xl mx-auto">
              DineIn was created around one simple idea: every meal
              should be an experience worth remembering. We combine
              carefully prepared dishes with a warm and welcoming
              atmosphere where guests can relax, connect, and enjoy
              good food.
            </p>

            <p className="text-gray-600 mt-4 leading-8 max-w-3xl mx-auto">
              Whether you're joining us for a casual dinner, a special
              occasion, or simply a meal with friends, our goal is to
              make every visit comfortable and memorable.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">
                Fresh Ingredients
              </h3>

              <p className="text-gray-500 mt-3">
                We believe great food starts with quality ingredients
                prepared with care.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">
                Warm Hospitality
              </h3>

              <p className="text-gray-500 mt-3">
                Every guest deserves to feel welcome and comfortable
                from the moment they arrive.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">
                Made With Care
              </h3>

              <p className="text-gray-500 mt-3">
                From our kitchen to your table, we pay attention to
                quality and detail.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16 text-center bg-orange-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              To provide delicious food, genuine hospitality, and a
              dining experience that keeps our guests coming back.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="/reservation"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Reserve a Table
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;