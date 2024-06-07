import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col px-36 pt-28 pb-20">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-3">
            <p className="font-medium text-white1 opacity-50">
              Tetap Terhubung
            </p>
            <h1 className="font-bold text-4xl text-white1">
              Explore Destinations With Us !
            </h1>
          </div>
          <div className="mt-8">
            <NavLink
              to="/tour"
              className="btn bg-white1 font-bold text-black rounded-3xl"
            >
              Mulai Tour <FaArrowRightLong style={{ margin: 10 }} />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="divider px-36"></div>
      <div className="flex flex-col px-36 pt-20 pb-20">
        <div className="flex justify-between">
          <div className="flex-initial w-2/4 flex flex-col gap-y-6 pr-24">
            <h1 className="font-bold text-xl text-white1 ">
              Outrek Tour Travel
            </h1>
            <p className="font-medium text-white1 opacity-50  text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis deserunt optio sequi ducimus culpa ut nulla. Assumenda
              dignissimos sint neque, sapiente inventore obcaecati natus libero
              fugiat vero nihil earum praesentium ducimus aperiam nemo debitis
              tempore. Cum iure sit repellat non.
            </p>
          </div>
          <div className="flex gap-20 ">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold text-xl text-white1 ">SiteMap</h1>
              <div className="flex flex-col gap-y-3 font-medium text-white1 opacity-50 ">
                <p>Discover</p>
                <p>Event</p>
                <p>Wisata</p>
                <p>About Us</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold text-xl text-white1 ">Company</h1>
              <div className="flex flex-col gap-y-3 font-medium text-white1 opacity-50 ">
                <p>Careers</p>
                <p>Our Teams</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="font-bold text-xl text-white1 ">Support</h1>
              <div className="flex flex-col gap-y-3 font-medium text-white1 opacity-50 ">
                <p>
                  Tower A, Block-C
                  <br />
                  Cempaka, Jakarta-3409
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider px-36"></div>
      <div className="flex flex-col px-36 pt-9 pb-60">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-3">
            <p className="font-medium text-white1 opacity-50">
              Tetap Terhubung
            </p>
          </div>
          <div className="flex flex-col gap-y-3 text-white1">
            <p className="font-medium">Tetap Terhubung</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
