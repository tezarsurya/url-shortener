import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import logo from "../assets/logo.svg";
interface NavlinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavlinkProps) => (
  <a
    href={href}
    className="font-bold text-[#9e9aa7] transition-colors duration-150 ease-linear hover:text-[#35323e]"
  >
    {text}
  </a>
);

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-50 flex w-full items-center justify-between bg-white/60 px-6 pt-8 pb-4 backdrop-blur-xl md:px-10 lg:space-x-8 lg:px-28 xl:px-40">
      <a href="/">
        <img src={logo} width={121} height={33} alt="Shortly Logo" />
      </a>
      <div className="hidden flex-1 items-center justify-start space-x-6 lg:flex">
        <NavLink href="#features" text="Features" />
        <NavLink href="#" text="Pricing" />
        <NavLink href="#" text="Resources" />
      </div>
      <div className="hidden items-center justify-end space-x-6 lg:flex">
        <NavLink href="#" text="Login" />
        <a
          href="#"
          className="btn rounded-full bg-[#2acfcf] px-5 py-2 font-bold text-white hover:bg-[rgba(42,207,207,80%)]"
        >
          Sign Up
        </a>
      </div>
      <Popover className="isolate lg:hidden">
        {({ open }) => (
          <>
            <Popover.Button className="rounded-md p-1 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8 stroke-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 w-[calc(100%-3rem)] origin-center -translate-x-6 translate-y-6 divide-y divide-gray-200/30 rounded-lg bg-[#3b3054] px-6 md:w-[30%] md:-translate-x-10">
                  <div className="grid place-items-center gap-y-6 px-4 py-8 text-lg font-bold text-white">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                  </div>
                  <div className="grid w-full place-items-center gap-y-6 px-2 py-8">
                    <a href="#" className="text-lg font-bold text-white">
                      Login
                    </a>
                    <a
                      href="#"
                      className="btn w-full rounded-full bg-[#2acfcf] px-5 py-3 font-bold text-white hover:bg-[rgba(42,207,207,80%)]"
                    >
                      Sign Up
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover.Button>
          </>
        )}
      </Popover>
    </nav>
  );
};

export default Navbar;
