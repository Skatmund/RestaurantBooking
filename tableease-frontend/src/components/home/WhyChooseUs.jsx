import {
  Clock3,
  UtensilsCrossed,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Easy Reservations",
    description:
      "Book your table in just a few clicks anytime, anywhere.",
  },
  {
    icon: UtensilsCrossed,
    title: "Delicious Cuisine",
    description:
      "Fresh ingredients and expertly prepared dishes for every occasion.",
  },
  {
    icon: Star,
    title: "Top Rated Service",
    description:
      "Friendly staff dedicated to giving every guest a memorable experience.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-orange-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            More Than Just Great Food
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine delicious cuisine, exceptional service,
            and a seamless reservation experience to make every visit special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-600 flex items-center justify-center mb-6">
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;