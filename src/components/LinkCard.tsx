export interface LinkCardProp {
  links: {
    originalUrl: string;
    shortUrl: string;
    fullShortUrl: string;
  };
}

const LinkCard = ({
  links = {
    originalUrl: "",
    shortUrl: "",
    fullShortUrl: "",
  },
}: LinkCardProp) => {
  const { originalUrl, shortUrl, fullShortUrl } = links;

  return (
    <div className="grid w-full divide-y rounded-lg bg-white md:grid-cols-12">
      <div className="grid w-full place-items-center justify-start overflow-hidden p-4 md:col-span-8">
        <p className="overflow-hidden text-ellipsis break-all">{originalUrl}</p>
      </div>
      <div className="flex w-full flex-col gap-y-3 p-4 md:col-span-4 md:flex-row md:items-center md:justify-end md:gap-x-3">
        <a
          href={fullShortUrl}
          target="_blank"
          className="text-[#2acfcf] underline"
        >
          {shortUrl}
        </a>
        <button className="grid w-full place-items-center rounded-lg bg-[#2acfcf] px-8 py-3 text-center text-xl font-bold text-white md:w-fit md:px-4 md:text-base">
          Copy
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
