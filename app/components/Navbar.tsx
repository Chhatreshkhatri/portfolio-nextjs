"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChhatreshKhatri, GitHubIcon, GmailIcon, LinkedInIcon } from "./icons";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import Image from "next/image";
const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} relative flex items-center justify-center group py-1`}>
      <p>{title}</p>
      <span
        className={`${
          path === href ? "w-full" : "w-0"
        } absolute h-0.5 bg-gradient-to-r from-blue1 to-yellow1 bottom-0.5 group-hover:w-full transition-[width] ease duration-500`}></span>
    </Link>
  );
};
const NavIcon = ({ title, href, icon, className = "" }: { title: string; href: string; icon: React.ReactNode; className?: string }) => (
  <Link
    title={title}
    aria-label={title}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex align-center justify-center transform transition-transform duration-300 hover:scale-110 w-8 ${className}`}>
    {icon}
  </Link>
);
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Call onScroll once to set the initial state
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`${
        navOpen || scrolled
          ? " bg-navbarBg/60 dark:bg-darker/70 backdrop-blur-md shadow-bottom py-1.5 transition-navBar duration-200 ease-in-out"
          : "py-2"
      } w-full flex flex-col items-center px-3 xs:px-6 md:px-12 lg:px-20 sticky z-10 top-0`}>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between w-full">
        <div className="flex justify-between">
          <Link title="Chhatresh Khatri" aria-label="Chhatresh Khatri" href={"/"} className="flex justify-center items-center">
            <ChhatreshKhatri className={``} />
          </Link>
          <button
            aria-label="Toggle Menu"
            className={`flex-col justify-center items-center flex lg:hidden`}
            onClick={() => {
              setNavOpen(!navOpen);
            }}>
            <span
              className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                navOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}></span>
            <span
              className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                navOpen ? "opacity-0" : "opacity-100"
              }`}></span>
            <span
              className={`bg-gradient-to-r from-green2 to-blue2 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                navOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}></span>
          </button>
        </div>
        <div className={`${navOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row items-center justify-center gap-x-8 text-xl font-semibold`}>
          <CustomLink href={"/"} title={"Home"} className="" />
          <CustomLink href={"/about"} title={"About"} className="" />
          <CustomLink href={"/projects"} title={"Projects"} className="" />
        </div>
        <div className={`${navOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:flex items-center justify-center py-1 lg:py-0 gap-x-5 gap-y-1`}>
          <div className="flex items-center justify-center py-1 lg:py-0 gap-x-5">
            <NavIcon title="GitHub" aria-label="Github" href={"https://github.com/Chhatreshkhatri"} icon={<GitHubIcon className="w-8" />} />
            <NavIcon
              title="LinkedIn"
              aria-label="LinkedIn"
              href={"https://www.linkedin.com/in/chhatreshkhatri"}
              icon={<LinkedInIcon className="w-8" />}
            />
            <NavIcon title="Mail" aria-label="Mail" href={"mailto:contact@chhatreshkhatri.com"} icon={<GmailIcon className="w-8" />} />
            <ThemeButton />
          </div>
          {/* image */}
          <Image src={"https://visits.chhatreshkhatri.com/ck"} alt={"visits"} width={100} height={8} className="h-8" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
