import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <DataContext.Provider value={{ services }}>{children}</DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
