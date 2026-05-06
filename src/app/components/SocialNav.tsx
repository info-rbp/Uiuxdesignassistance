import { ISocialNav } from "../types";

export const SocialNav = (props: ISocialNav) => {
  const { links } = props;

  return (
    <div className="flex items-center space-x-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <span className="sr-only">{link.name}</span>
          <link.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};