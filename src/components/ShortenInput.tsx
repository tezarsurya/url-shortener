import { FormEvent, useState } from "react";

const ShortenInput = () => {
  const [{ invalid, message }, setValidation] = useState({
    invalid: false,
    message: null || "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (!data.get("url") || data.get("url") == "") {
      setValidation((current) => ({
        ...current,
        invalid: true,
        message: "Please enter a URL",
      }));
    }
  };

  return (
    <div className="absolute -bottom-64 w-full px-6 py-8 md:-bottom-40 md:px-10 lg:px-28 xl:-bottom-72 xl:px-40 xl:py-20">
      <form
        onSubmit={handleSubmit}
        className={`${
          invalid ? "md:pb-10" : null
        } group relative isolate grid w-full gap-6 overflow-hidden rounded-xl bg-[#3b3054] p-7 before:absolute before:bottom-0 before:left-24 before:-top-14 before:-right-20 before:-z-10 before:bg-[url('/src/assets/bg-shorten-mobile.svg')] before:bg-contain before:bg-right-top before:bg-no-repeat md:grid-cols-6 md:gap-4 md:before:inset-0 md:before:bg-[url('/src/assets/bg-shorten-desktop.svg')] md:before:bg-cover md:before:bg-left-bottom md:invalid:pb-10 lg:py-8 lg:px-12 xl:grid-cols-12 xl:px-12 xl:py-10 xl:invalid:pb-10`}
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
            } w-full rounded-lg px-6 py-4 text-lg outline-none focus:ring-2 group-invalid:ring-red-500`}
          />
          <span
            className={`${
              invalid ? "visible" : "invisible"
            } absolute -bottom-7 origin-top-left text-red-500 group-invalid:visible`}
          >
            {invalid ? message : "Please enter a valid URL"}
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#2acfcf] px-8 py-4 text-xl font-bold text-white md:col-span-2 xl:col-span-3"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
};

export default ShortenInput;
