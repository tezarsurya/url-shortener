import { useAtomValue } from "jotai";
import { readOnlyUrlAtom } from "../lib/jotai/atoms";
import FeatureCard from "./FeatureCard";
import LinkCard from "./LinkCard";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const Features = () => {
  const urls = useAtomValue(readOnlyUrlAtom);

  return (
    <section
      id="features"
      className="mt-28 grid w-full bg-gray-200 px-6 py-28 md:mt-16 md:py-20 md:px-10 lg:py-20 lg:px-28 xl:mt-36 xl:py-24 xl:px-40"
    >
      <div className="grid w-full gap-y-4">
        {urls.map((url: any, id) => (
          <LinkCard links={url} key={id} />
        ))}
      </div>
      <div className="mt-20 grid w-full">
        <div className="grid w-full place-items-center">
          <h2 className="text-center text-3xl font-bold text-[#35323e]">
            Advanced Statistics
          </h2>
          <p className="mt-5 max-w-md text-center font-semibold leading-7 text-[#9e9aa7]">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className="relative mt-20 grid gap-y-20 md:mt-32 md:grid-cols-3 md:gap-x-6 xl:gap-x-10">
          <FeatureCard title="Brand Recognition" icon={brandRecognition}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </FeatureCard>
          <span className="absolute left-1/2 top-1/2 h-[560px] w-2 origin-center -translate-y-1/2 -translate-x-1/2 bg-[#2acfcf] md:rotate-90"></span>
          <FeatureCard title="Detailed Records" icon={detailedRecords}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decicions.
          </FeatureCard>
          <FeatureCard title="Fully Customizable" icon={fullyCustomizable}>
            Improve brand awareness and content discoverability through
            customizable links, supercharghing audience engagement.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
