import { useAtom } from "jotai";
import { FormEvent, useEffect, useState } from "react";
import { urlAtom } from "../lib/jotai/atoms";
import axios from "axios";
import Spinner from "./utils/Spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ShortenInput = () => {
  const [{ invalid, message }, setValidation] = useState({
    invalid: false,
    message: null || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [urls, setUrls] = useAtom(urlAtom);

  const shortenUrl = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const { result } = response.data;
      setUrls((current) => {
        if (current.length === 3)
          return [
            {
              originalUrl: result.original_link,
              shortUrl: result.short_link,
              fullShortUrl: result.full_short_link,
            },
            ...current.slice(0, 2),
          ];

        return [
          {
            originalUrl: result.original_link,
            shortUrl: result.short_link,
            fullShortUrl: result.full_short_link,
          },
          ...current,
        ];
      });

      MySwal.fire({
        title: "Short link created",
        icon: "success",
        buttonsStyling: false,
        customClass: {
          confirmButton:
            "rounded-lg bg-[#2acfcf] px-8 py-4 text-center text-xl font-bold text-white",
        },
      });
    } catch (error: any) {
      setValidation((current) => ({
        ...current,
        invalid: true,
        message:
          error.code === "ERR_NETWORK"
            ? "Network error, please check your connection"
            : error.code === "ERR_BAD_REQUEST"
            ? "Please enter a valid and accessible URL"
            : "Error occured at our end, please try again later",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const submittedUrl = data.get("url");

    if (!submittedUrl || submittedUrl == "") {
      setValidation((current) => ({
        ...current,
        invalid: true,
        message: "Please enter a URL",
      }));
    }

    if (submittedUrl && submittedUrl != "") {
      shortenUrl(submittedUrl.toString());
    }

    e.currentTarget.reset();
  };

  return (
    <div className="absolute -bottom-52 w-full px-6 md:-bottom-32 md:px-10 lg:px-28 xl:-bottom-52 xl:px-40">
      <form
        onSubmit={handleSubmit}
        className={`${
          invalid ? "md:pb-10 lg:pb-10" : null
        } group relative isolate grid w-full gap-6 overflow-hidden rounded-xl bg-[#3b3054] p-7 before:absolute before:bottom-0 before:left-24 before:-top-14 before:-right-20 before:-z-10 before:bg-[url('/src/assets/bg-shorten-mobile.svg')] before:bg-contain before:bg-right-top before:bg-no-repeat md:grid-cols-6 md:gap-4 md:before:inset-0 md:before:bg-[url('/src/assets/bg-shorten-desktop.svg')] md:before:bg-cover md:before:bg-left-bottom md:invalid:pb-10 lg:py-8 lg:px-10 xl:grid-cols-12 xl:py-10`}
      >
        <div
          className={`${
            invalid ? "mb-4 md:mb-0" : null
          } relative grid gap-1 group-invalid:mb-4 md:col-span-4 md:group-invalid:mb-0 xl:col-span-9`}
        >
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Shorten a link here..."
            onChange={() =>
              setValidation((current) => ({ ...current, invalid: false }))
            }
            className={`${
              invalid ? "ring-2 ring-red-500" : "ring-[#2acfcf]"
            } w-full rounded-lg px-6 py-3 text-lg font-medium text-[#35323e] outline-none focus:ring-2 group-invalid:ring-red-500`}
          />
          <span
            className={`${
              invalid ? "visible" : "invisible"
            } absolute -bottom-7 origin-top-left text-xs text-red-500 group-invalid:visible md:text-sm`}
          >
            {invalid ? message : "Please enter a valid URL"}
          </span>
        </div>
        <button
          type="submit"
          className="grid w-full place-items-center rounded-lg bg-[#2acfcf] px-8 py-3 text-center text-xl font-bold text-white md:col-span-2 xl:col-span-3"
        >
          {isLoading ? <Spinner /> : "Shorten It!"}
        </button>
      </form>
    </div>
  );
};

export default ShortenInput;
