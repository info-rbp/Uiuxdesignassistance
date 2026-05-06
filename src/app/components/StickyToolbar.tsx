import { IStickyToolbar } from "../types";

export const StickyToolbar = (props: IStickyToolbar) => {
  const { children } = props;

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {children}
        </div>
      </div>
    </div>
  );
};