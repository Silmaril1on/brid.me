import ClientLogos from "./ClientLogos";
import Headline from "./Headline";
import UserForm from "./UserForm";

const HomeForm = () => {
  return (
    <section id="footer" className="h-screen pt-14 flex flex-col">
      <Headline />
      <UserForm />
      <ClientLogos />
    </section>
  );
};

export default HomeForm;
