"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";
import clsx from "clsx";
import getNavLinks from "@/lib/get-nav-links";

function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = getNavLinks();
  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <Logo />
            <span className="sr-only">Glisten.ai Home Page</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {navLinks?.map((item) => (
              <Fragment
                key={item.label}
              >
                <Link href={item.link}
                  className={
                    item.cta_button
                      ? clsx(
                          "relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2"
                        )
                      : `inline-flex min-h-11 items-center ${"page"}`
                  }
                >{item.label}</Link>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className=" hidden gap-6 md:flex">
          {navLinks?.map((item) => (
            <Fragment key={item.label}>
              <Link
                href={item.link}
                className={
                  item.cta_button
                    ? clsx(
                        "relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2"
                      )
                    : `inline-flex min-h-11 items-center ${"page"}`
                }
              >
                {item.label}
              </Link>
            </Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
