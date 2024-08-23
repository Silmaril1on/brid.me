import FactoryBenefits from "./factorybenefits/FactoryBenefits";
import FactoryForm from "./factoryform/FactoryForm";
import FactoryHeader from "./factoryheader/FactoryHeader";
import FactoryWork from "./FactoryWork/FactoryWork";

const Factory = () => {
  return (
    <main>
      <FactoryHeader />
      <FactoryBenefits />
      <FactoryWork />
      <FactoryForm />
    </main>
  );
};

export default Factory;
