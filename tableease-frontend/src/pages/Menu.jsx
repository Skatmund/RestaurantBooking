import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Menu() {
  const menuSections = [
    {
      title: "Appetizers",
      items: [
        { name: "Crispy Calamari", description: "Lightly seasoned and served with our house dip.", price: "₱280" },
        { name: "Garlic Parmesan Fries", description: "Crispy fries tossed with garlic and parmesan.", price: "₱180" },
        { name: "Bruschetta", description: "Toasted bread topped with fresh tomatoes and herbs.", price: "₱220" },
      ],
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Chicken", description: "Tender grilled chicken served with seasonal vegetables.", price: "₱420" },
        { name: "Creamy Garlic Pasta", description: "Creamy pasta finished with garlic and parmesan.", price: "₱380" },
        { name: "Classic Beef Steak", description: "Juicy steak served with roasted vegetables.", price: "₱650" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a rich molten center.", price: "₱220" },
        { name: "Classic Cheesecake", description: "Smooth and creamy cheesecake with a buttery crust.", price: "₱200" },
        { name: "Vanilla Panna Cotta", description: "Silky vanilla cream topped with fresh fruit.", price: "₱180" },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "Fresh Lemonade", description: "Freshly squeezed and lightly sweetened.", price: "₱120" },
        { name: "Iced Tea", description: "Refreshing house-brewed iced tea.", price: "₱100" },
        { name: "House Coffee", description: "Freshly brewed coffee served hot.", price: "₱140" },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* Header */}
        <section className="bg-orange-50 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Menu
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            Fresh ingredients, carefully prepared dishes, and flavors
            made to make every visit memorable.
          </p>
        </section>

        {/* Menu */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-orange-600 mb-6">
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b pb-5"
                    >
                      <div className="flex justify-between gap-4">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {item.name}
                        </h3>

                        <span className="font-semibold text-orange-600">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800">
              Ready to dine with us?
            </h2>

            <p className="text-gray-500 mt-2">
              Reserve your table and enjoy the DineIn experience.
            </p>

            <a
              href="/reservation"
              className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold"
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

export default Menu;