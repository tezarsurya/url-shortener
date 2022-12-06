import { useAtomValue } from "jotai";
import { readOnlyUrlAtom } from "../lib/jotai/atoms";
import LinkCard from "./LinkCard";

const Features = () => {
  const urls = useAtomValue(readOnlyUrlAtom);

  return (
    <section
      id="features"
      className="mt-28 grid w-full bg-gray-200 px-6 py-28 md:mt-16 md:py-20 md:px-10 lg:py-20 lg:px-28 xl:mt-36 xl:py-24 xl:px-40"
    >
      <div id="linksContainer" className="grid gap-y-4">
        {urls.map((url: any, id) => (
          <LinkCard links={url} key={id} />
        ))}
      </div>
      <div>Features</div>
    </section>
  );
};

export default Features;
