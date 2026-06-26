function Testimonials() {
  const reviews = [
    {
      name: "John Smith",
      company: "Google",
      review:
        "Amazing AI platform. It helped our team automate workflows efficiently.",
    },
    {
      name: "Sarah Johnson",
      company: "Microsoft",
      review:
        "Beautiful UI and excellent performance. Highly recommended.",
    },
    {
      name: "David Lee",
      company: "Meta",
      review:
        "The best AI workflow platform we've used this year.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#D9E8E2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#172B36]">
            What Our Users Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-gray-600">
                "{item.review}"
              </p>

              <h4 className="mt-8 font-bold text-xl">
                {item.name}
              </h4>

              <p className="text-[#114C5A]">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;