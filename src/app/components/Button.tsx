import Link from "next/link";
import { IButton } from "../types";

export const Button = (props: IButton) => {
  const { label, path, variant, className } = props;

  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8";

  const variantClasses = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700",
    secondary:
      "text-indigo-700 bg-indigo-100 hover:bg-indigo-200",
  };

  return (
    <Link href={path}>
      <a className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        {label}
      </a>
    </Link>
  );
};