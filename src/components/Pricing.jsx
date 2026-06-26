function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹499",
      period: "/month",
      features: [
        "AI Workflow",
        "Basic Analytics",
        "Email Support",
        "5 Projects",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      features: [
        "Unlimited Workflows",
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Projects",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Dedicated Manager",
        "Custom AI Models",
        "24/7 Support",
        "Unlimited Everything",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F1F6F4]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#114C5A] font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="text-5xl font-bold text-[#172B36] mt-4">
            Choose your plan
          </h2>

          <p className="text-gray-600 mt-5">
            Flexible pricing for startups, teams and enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.featured
                  ? "bg-[#114C5A] text-white scale-105"
                  : "bg-white"
              }`}
            >
              {plan.featured && (
                <span className="inline-block bg-[#FFC801] text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
                  ⭐ Most Popular
                </span>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-6">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-lg ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="transition-colors duration-300 hover:text-[#FFC801]"
                  >
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${
                  plan.featured
                    ? "bg-[#FFC801] text-black hover:bg-[#FF9932]"
                    : "bg-[#114C5A] text-white hover:bg-[#172B36]"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;