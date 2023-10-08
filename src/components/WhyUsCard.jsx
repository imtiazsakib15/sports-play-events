import PropTypes from "prop-types";

const WhyUsCard = ({ whyChoose }) => {
  const { id, title, detail } = whyChoose;
  return (
    <div data-aos="fade-up" className="bg-neutral-200 px-10 py-16 space-y-5">
      <span className="w-12 h-12 grid place-items-center bg-blue-700 text-white font-semibold rounded-full">
        0{id}
      </span>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

WhyUsCard.propTypes = {
  whyChoose: PropTypes.object,
};

export default WhyUsCard;
