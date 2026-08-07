import {
  CalendarDays,
  Users,
  UtensilsCrossed,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Reservations",
    value: 128,
    icon: CalendarDays,
    color: "bg-orange-500",
  },
  {
    title: "Today's Guests",
    value: 34,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Available Tables",
    value: 12,
    icon: UtensilsCrossed,
    color: "bg-green-500",
  },
  {
    title: "Pending Requests",
    value: 5,
    icon: Clock3,
    color: "bg-red-500",
  },
];

function StatsCards() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div
                className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-5`}
              >
                <Icon className="text-white" size={28} />
              </div>

              <p className="text-gray-500">
                {card.title}
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {card.value}
              </h3>
            </div>
          );
        })}

      </div>
    </>
  );
}

export default StatsCards;