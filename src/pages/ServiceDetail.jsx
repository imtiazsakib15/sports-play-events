import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const { services } = useContext(DataContext);

  const service = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <div className="container mx-auto px-4 md:px-10 my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div>
          <img className="w-full rounded-md" src={service?.image} alt="" />
        </div>
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-3xl font-bold">{service?.serviceName}</h3>
          <p>{service?.description}</p>
          <p className="font-bold text-blue-700 text-xl">$ {service?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
