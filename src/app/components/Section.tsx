import { ISection } from "../types";

export const Section = (props: ISection) => {
  const { children, className, ...rest } = props;

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
};