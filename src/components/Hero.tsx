import heroImg from "../assets/illustration-working.svg";
import ShortenInput from "./ShortenInput";

const Hero = () => {
  return (
    <section id="hero" className="relative grid w-full">
      <div className="relative grid w-full overflow-hidden pt-16 md:flex md:flex-row-reverse md:items-center md:justify-between md:py-20 md:px-10 md:pt-32 lg:px-28 xl:px-40 xl:pt-40">
        <div className="grid place-items-center">
          <img
            src={heroImg}
            alt="Hero image"
            width={375}
            height={250}
            className="h-80 w-auto object-cover object-left-bottom pl-6 md:absolute md:-right-24 md:h-auto md:w-[480px] lg:w-[540px] xl:w-[720px]"
          />
        </div>
        <div className="px-6 py-10 md:w-2/3 md:p-0">
          <h1 className="text-center text-4xl font-bold text-[#35323e] md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
            More than just shorter links
          </h1>
          <p className="mt-4 px-2 text-center font-semibold leading-7 tracking-wide text-[#9e9aa7] md:mt-2 md:w-[80%] md:px-0 md:text-left md:text-sm xl:w-[70%] xl:text-lg">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div className="grid w-full place-items-center py-8 md:place-items-start">
            <button className="btn rounded-full bg-[#2acfcf] px-8 py-3 text-lg font-bold text-white hover:bg-[rgba(42,207,207,80%)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <ShortenInput />
    </section>
  );
};

export default Hero;
