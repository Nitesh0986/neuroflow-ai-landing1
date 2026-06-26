import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <section className="bg-[#F1F6F4] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroIllustration />

      </div>
    </section>
  );
}

export default Hero;