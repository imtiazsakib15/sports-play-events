import { useEffect, useState } from "react";
import WhyUsCard from "./WhyUsCard";

const WhyChooseUs = () => {
  const [whyChoose, setWhyChoose] = useState([]);
  useEffect(() => {
    fetch("/whyChooseUs.json")
      .then((res) => res.json())
      .then((data) => setWhyChoose(data));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-10 mb-20">
      <h2 className="text-4xl font-bold text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-14">
        {whyChoose.map((singleWhyChoose) => (
          <WhyUsCard key={singleWhyChoose.id} whyChoose={singleWhyChoose} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
