function Features() {
  const features = [
    {
      title: "Easy Booking",
      description: "Reserve your favorite table in seconds.",
      icon: "📅",
    },
    {
      title: "Fresh Cuisine",
      description: "Prepared daily by our experienced chefs.",
      icon: "🍽️",
    },
    {
      title: "Cozy Ambience",
      description: "Perfect for families, dates, and celebrations.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose TableEase?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-orange-50 rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;