import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <a className="text-2xl font-bold text-gray-900 dark:text-white">Your Logo</a>
    </Link>
  );
};