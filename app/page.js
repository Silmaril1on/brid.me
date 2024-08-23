import Navigation from "./layout/Navigation";
import HomePage from "./pages/homepage/HomePage";

export default function Home() {
  return (
    <main className="flex flex-col w-full *:w-full">
      <Navigation />
      <HomePage />
    </main>
  );
}
