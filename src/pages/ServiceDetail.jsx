import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const { services, purchased, setPurchased } = useContext(DataContext);

  const service = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  const handlePurchase = () => {
    const alreadyPurchased = purchased.includes(parseInt(serviceId));
    if (alreadyPurchased) {
      toast.error("Already Purchased!");
      return;
    }
    toast.success("Congratulations, Purchased Successfully!");
    setPurchased([...purchased, parseInt(serviceId)]);
  };

  return (
    <div className="container mx-auto px-4 md:px-10 my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div>
          <img className="w-full rounded-md" src={service?.image} alt="" />
        </div>
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-3xl font-bold">{service?.serviceName}</h3>
          <p>{service?.description}</p>
          <p className="font-bold text-blue-700 text-xl">$ {service?.price}</p>
          <button
            onClick={handlePurchase}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 flex items-center gap-2"
          >
            <FaShoppingCart />
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
