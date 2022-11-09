import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [admin, setAdmin] = useState();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const logout = () => {
    localStorage.removeItem("profile");
  };

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("profile")));
  }, [router.query]);

  return (
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <header className="flex justify-between items-center py-4">
        <Link
          href={"/"}
          className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
          aria-label="logo"
        >
          <span>
            <NavLogo color={"#3E1FFF"} height={30} />
          </span>
        </Link>

        <nav className="hidden lg:flex gap-12">
          {menuItems.map((menu, index) => (
            <Link
              href={menu.href}
              key={index}
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-700 text-lg transition duration-100"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {admin ? (
          <div className="flex">
            <Link
              href={"/admin"}
              className="hidden lg:inline-block text-gray-500 ring-indigo-300  font-semibold text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Dashboard
            </Link>
            <Link
              href={"/"}
              className="hidden lg:inline-block bg-[#6B54F5] hover:bg-[#4e38cc] focus-visible:ring ring-indigo-300 text-white font-semibold text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              onClick={logout}
            >
              Logout
            </Link>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="hidden lg:inline-block bg-[#6B54F5] hover:bg-[#4e38cc] focus-visible:ring ring-indigo-300 text-white font-semibold text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Admin login
          </Link>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } w-full absolute justify-center top-16 left-0`}
        >
          <div className="w-[92%] flex flex-col bg-white px-3 py-2 rounded-lg shadow-2xl border space-y-3">
            {menuItems.map((menu, index) => (
              <Link
                href={menu.href}
                key={index}
                onClick={() => setOpen((prev) => !prev)}
                className="text-gray-700 hover:text-indigo-500 active:text-indigo-700 text-sm font-semibold transition duration-100"
              >
                {menu.name}
              </Link>
            ))}

            {admin ? (
              <>
                <Link
                  href={"/admin"}
                  className="text-gray-700 font-semibold text-sm md:text-base rounded-lg outline-none transition duration-100"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Dashboard
                </Link>
                <div onClick={() => setOpen((prev) => !prev)}>
                  <Link
                    href={"/"}
                    className="block bg-color bg-[#010851] text-white font-semibold  text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <Link
                href={"/login"}
                onClick={() => setOpen((prev) => !prev)}
                className="block bg-color bg-[#010851] text-white font-semibold  text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Admin login
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
