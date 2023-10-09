import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, serviceName, image, price, description } = service;
  
  return (
    <div
      data-aos="zoom-in"
      className="p-4 border rounded-md space-y-5 flex flex-col"
    >
      <img className="w-full h-48 rounded" src={image} alt={serviceName} />
      <h3 className="text-2xl font-semibold flex-1">{serviceName}</h3>
      <p className="flex-1">{description}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/services/${id}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
        >
          View Details
        </Link>
        <p className="text-xl font-bold text-blue-700">$ {price}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
