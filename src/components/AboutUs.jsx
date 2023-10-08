
import aboutUs from "./../assets/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 flex items-center flex-col-reverse lg:flex-row gap-12 my-20 overflow-hidden">
      <div className="lg:w-1/2" data-aos="fade-right">
        <img className="rounded-md" src={aboutUs} alt="About Us" />
      </div>
      <div className="lg:w-1/2 space-y-5" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-center lg:text-left">
          About Us - Expert Event Planners
        </h2>
        <p>
          We are a team of dedicated professionals with diverse backgrounds and
          expertise. Our collective experience in event management, sports,
          marketing, and operations empowers us to deliver exceptional services
          tailored to the unique needs of every sports event.
        </p>
        <p>
          When you choose us, you&apos;re choosing a partner committed to
          turning your sporting vision into reality. We combine creativity,
          precision, and a customer-centric approach to create seamless events
          that exceed expectations. With us, you&apos;re not just organizing an
          event, you&apos;re creating an experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
