// import bannerImg from "./../assets/banner.jpg";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="2xl:container mx-auto">
      <section className=" bg-[url(https://i.ibb.co/H2RQbpb/banner.jpg)] bg-cover bg-center bg-no-repeat text-black">
        <div className="bg-gray-100 opacity-90">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl/tight sm:text-4xl/tight font-extrabold lg:text-5xl/snug px-2">
                Creating Unforgettable Sporting Experiences, Every Time
              </h1>

              <p className="mx-auto mt-4 max-w-2xl px-6 sm:text-xl/relaxed">
                We are passionate about sports and dedicated to delivering
                flawless event management services. From tournaments and leagues
                to tailored experiences, we blend expertise with enthusiasm to
                create events that leave a lasting impact.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block rounded border border-blue-700 bg-blue-700 px-8 py-2 font-medium text-white focus:outline-none focus:ring active:text-opacity-75 w-auto"
                  to="/login"
                >
                  Connected With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
