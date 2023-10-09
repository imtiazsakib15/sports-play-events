import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const Purchased = () => {
  const { services, purchased } = useContext(DataContext);

  if (purchased.length === 0) {
    return (
      <h1 className="text-6xl font-bold text-center my-32">
        You don&apos;t purchase any service yet!
      </h1>
    );
  }
  const purchasedServices = services.filter((service) =>
    purchased.includes(service.id)
  );
  const totalCost = purchasedServices.reduce(
    (total, current) => total + current.price,
    0
  );
  console.log(totalCost);
  return (
    <div className="container mx-auto px-4 md:px-10 my-20">
      <h3 className="text-2xl font-bold">Total Cost: {totalCost}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {purchasedServices.map((service) => (
          <div
            className="border rounded-md p-3 space-y-3 flex flex-col"
            key={service.id}
          >
            <img className="rounded h-36 w-full" src={service.image} alt="" />
            <h4 className="text-xl font-semibold flex-1">
              {service.serviceName}
            </h4>
            <p className="font-bold text-blue-700">${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchased;
