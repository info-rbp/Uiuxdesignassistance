import Link from "next/link";
import { INav } from "../types";

export const Nav = (props: INav) => {
  const { links } = props;

  return (
    <nav className="hidden md:flex items-center space-x-10">
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            {link.label}
          </a>
        </Link>
      ))}
    </nav>
  );
};