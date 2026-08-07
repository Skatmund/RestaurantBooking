const menuItems = [
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    price: "$28",
    description: "Premium grilled ribeye served with vegetables.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
  },
  {
    id: 2,
    name: "Creamy Truffle Pasta",
    price: "$18",
    description: "Fresh pasta tossed in creamy truffle sauce.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: "$16",
    description: "Classic Italian pizza with fresh mozzarella.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    price: "$10",
    description: "Warm chocolate cake with a molten center.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
  },
];

function FeaturedMenu() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Menu
          </h2>

          <p className="text-gray-600 mt-3">
            Discover our chef's most loved dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-3 text-sm">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-orange-600 text-2xl font-bold">
                    {item.price}
                  </span>

                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                    View
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMenu;