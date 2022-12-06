import { lazy, Suspense } from "react";

const Logo = lazy(() => import("./Logo"));

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-100/50 bg-gray-100/30 px-6 pt-8 pb-4 shadow-lg shadow-gray-200/30 backdrop-blur-xl md:px-10 lg:px-28 xl:px-40">
      <a href="/">
        <Suspense>
          <Logo />
        </Suspense>
      </a>
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
