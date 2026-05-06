import {
  Logo,
  Nav,
  Search,
  ThemeToggle,
  Button,
  SocialNav,
} from "./components";
import { navLinks, socialLinks } from "../data";

export const Header = () => {
  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Nav links={navLinks} />
        <div className="flex items-center space-x-4">
          <Search />
          <ThemeToggle />
          <Button
            label="Sign In"
            path="/signin"
            variant="secondary"
            className="hidden sm:inline-flex"
          />
          <Button label="Sign Up" path="/signup" variant="primary" />
          <SocialNav links={socialLinks} />
        </div>
      </div>
    </header>
  );
};