import { MouseEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
interface LinkCardProps {
  links: {
    originalUrl: string;
    shortUrl: string;
    fullShortUrl: string;
  };
}

const MySwal = withReactContent(Swal);

const LinkCard = ({
  links = {
    originalUrl: "",
    shortUrl: "",
    fullShortUrl: "",
  },
}: LinkCardProps) => {
  const { originalUrl, shortUrl, fullShortUrl } = links;
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const link = btn.previousSibling?.textContent;

    if (link) {
      try {
        await navigator.clipboard.writeText(link);
        MySwal.fire({
          title: "Link copied!",
          toast: true,
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", () => Swal.stopTimer());
            toast.addEventListener("mouseleave", () => Swal.resumeTimer());
          },
        });
        return setCopied(true);
      } catch (error) {
        return setCopied(false);
      }
    }

    return setCopied(false);
  };

  useEffect(() => {
    const clearCopied = setInterval(() => {
      setCopied(false);
    }, 3000);

    return () => clearInterval(clearCopied);
  }, [copied]);

  return (
    <div className="grid w-full divide-y rounded-lg bg-white md:grid-cols-12">
      <div className="grid w-full place-items-center justify-start overflow-hidden p-4 md:col-span-8">
        <p className="overflow-hidden text-ellipsis break-all text-[#35323e]">
          {originalUrl}
        </p>
      </div>
      <div className="flex w-full flex-col gap-y-3 p-4 md:col-span-4 md:flex-row md:items-center md:justify-end md:gap-x-3">
        <a
          href={fullShortUrl}
          target="_blank"
          className="text-[#2acfcf] underline"
        >
          {shortUrl}
        </a>
        <button
          onClick={handleClick}
          className={`${
            copied
              ? "bg-[#3b3054] hover:bg-[rgba(59,48,84,80%)]"
              : "bg-[#2acfcf]"
          } btn grid w-full place-items-center rounded-lg px-8 py-2 text-center text-lg font-bold text-white hover:bg-[rgba(42,207,207,80%)] md:w-fit md:px-4 md:text-base`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
