import { useContext } from "react";
import ServiceCard from "./ServiceCard";
import { DataContext } from "../providers/DataProvider";

const Services = () => {
  const { services } = useContext(DataContext);

  return (
    <div className="container mx-auto px-4 md:px-10 mb-20">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
