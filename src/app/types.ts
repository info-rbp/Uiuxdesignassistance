import { SVGProps } from "react";

export interface INavLink {
  label: string;
  path: string;
}

export interface ISocialLink {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface IButton {
  label: string;
  path: string;
  variant: "primary" | "secondary";
  className?: string;
}

export interface INav {
  links: INavLink[];
}

export interface ISocialNav {
  links: ISocialLink[];
}
