import { companies } from "./heroData";

function TrustedCompanies() {
  return (
    <div className="mt-12">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
        Trusted by teams worldwide
      </p>

      <div className="flex flex-wrap gap-4">
        {companies.map((company) => (
          <div
            key={company}
            className="px-5 py-3 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <span className="font-semibold text-[#114C5A]">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedCompanies;