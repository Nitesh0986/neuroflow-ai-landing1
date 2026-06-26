import {
  ChartPieIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  ArrowTrendingUpIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI Automation",
    desc: "Automate repetitive tasks with intelligent workflows.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Data Intelligence",
    desc: "Transform raw data into meaningful insights instantly.",
    icon: ChartPieIcon,
  },
  {
    title: "Smart Search",
    desc: "Find information quickly using AI-powered search.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Workflow Builder",
    desc: "Create scalable workflows with visual automation.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Cloud Integration",
    desc: "Connect your favorite tools with a single click.",
    icon: LinkIcon,
  },
  {
    title: "Secure Platform",
    desc: "Enterprise-grade security with reliable performance.",
    icon: CubeIcon,
  },
];

function Features() {
  return (
    <section id="features" className="bg-[#D9E8E2] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#114C5A] font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl font-bold text-[#172B36] mt-4">
            Everything you need
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Build, automate and scale your AI workflow with powerful tools
            designed for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white rounded-3xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#114C5A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFC801]">
                  <Icon className="w-7 h-7 text-[#FFC801] transition-all duration-300 group-hover:text-[#114C5A]" />
                </div>

                <h3 className="text-2xl font-bold text-[#172B36] mt-6 transition-colors duration-300 group-hover:text-[#114C5A]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;