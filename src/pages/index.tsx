import { Header, Footer } from "../app/components";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is a sample page to demonstrate the header and footer components.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;