import Link from "next/link";
import { ChhatreshKhatri } from "./icons";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center w-full shadow-top bg-navbarBg dark:bg-darker py-2 px-3 xs:px-6 md:px-12 lg:px-20 mt-auto space-y-0.5">
      <div className="flex justify-center items-center" title="Chhatresh Khatri">
        <ChhatreshKhatri className={`flex`} alt="Chhatresh Khatri Logo" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center">
        <p>
          Developed By <strong>Chhatresh Khatri&nbsp;</strong>
        </p>
        <p>&copy; 2023 All Rights Reserved</p>
      </div>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
