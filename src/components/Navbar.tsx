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
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100/50 bg-white/60 px-6 pt-8 pb-4 shadow-lg shadow-gray-200/30 backdrop-blur-xl md:px-10 lg:space-x-8 lg:px-28 xl:px-40">
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
          className="rounded-full bg-[#2acfcf] px-5 py-2 font-bold text-white transition-colors duration-150 ease-linear hover:bg-[rgba(42,207,207,80%)]"
        >
          Sign Up
        </a>
      </div>
      <button className="lg:hidden">
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
      </button>
    </nav>
  );
};

export default Navbar;
