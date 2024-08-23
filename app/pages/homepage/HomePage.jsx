import Awards from "./homeawards/Awards";
import Carousel from "./homecarousel/Carousel";
import HomeForm from "./homeform/HomeForm";
import Header from "./homeheader/Header";
import Services from "./homeservice/Services";

const HomePage = () => {
  return (
    <section className="mt-14">
      <Header />
      <Services />
      <Carousel />
      <Awards />
      <HomeForm />
    </section>
  );
};

export default HomePage;
