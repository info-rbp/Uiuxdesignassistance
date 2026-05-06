import { INavLink, ISocialLink } from "./types";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export const navLinks: INavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const socialLinks: ISocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
];
