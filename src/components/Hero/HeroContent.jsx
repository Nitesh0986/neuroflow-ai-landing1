import TrustedCompanies from "./TrustedCompanies";

function HeroContent() {
  return (
    <>
      {/* Badge */}
      <span className="inline-flex items-center rounded-full bg-[#D9E8E2] px-4 py-2 text-sm font-semibold text-[#114C5A] transition-all duration-300 hover:bg-[#114C5A] hover:text-white hover:scale-105 cursor-pointer">
        🚀 AI Workflow Platform
      </span>

      {/* Heading */}
      <h1 className="mt-8 text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#172B36]">
        Power your
        <br />
        future with
        <span className="text-[#114C5A] transition-colors duration-300 hover:text-[#FF9932]">
          {" "}AI
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
        Build intelligent workflows, automate repetitive work,
        and empower your team with AI-powered automation.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">

        <button
          className="rounded-xl bg-[#FFC801] px-7 py-4 font-semibold transition-all duration-300 hover:bg-[#FF9932] hover:scale-105 hover:shadow-xl"
        >
          Get Started
        </button>

        <button
          className="rounded-xl border-2 border-[#114C5A] px-7 py-4 font-semibold transition-all duration-300 hover:bg-[#114C5A] hover:text-white hover:scale-105 hover:shadow-xl"
        >
          Live Demo
        </button>

      </div>

      <TrustedCompanies />
    </>
  );
}

export default HeroContent;