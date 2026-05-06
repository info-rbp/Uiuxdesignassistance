import { IPublicPage } from "../types";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PublicPage = (props: IPublicPage) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};