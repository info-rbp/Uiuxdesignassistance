import { socialLinks } from "../data";
import { SocialNav } from "./SocialNav";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </p>
        <SocialNav links={socialLinks} />
      </div>
    </footer>
  );
};