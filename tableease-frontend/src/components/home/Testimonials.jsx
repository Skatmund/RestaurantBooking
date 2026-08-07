import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    review:
      "The reservation process was incredibly easy, and the food exceeded our expectations. We'll definitely be back!",
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    review:
      "Excellent customer service and a wonderful atmosphere. Booking a table online saved us so much time.",
  },
  {
    name: "Emily Rodriguez",
    role: "Local Customer",
    review:
      "From the delicious meals to the friendly staff, every visit has been fantastic. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-orange-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our guests are at the heart of everything we do. Here's what they
            have to say about their dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((customer) => (
            <div
              key={customer.name}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6">
                "{customer.review}"
              </p>

              <h3 className="font-bold text-lg">
                {customer.name}
              </h3>

              <p className="text-gray-500">
                {customer.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;