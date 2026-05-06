import { IPage } from "../types";

export const Page = (props: IPage) => {
  const { children } = props;

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
};