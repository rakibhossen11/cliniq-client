import React from "react";
import banner from "../../../assets/images/banner_girl.png";
import { CalendarIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="px-10 grid grid-cols-2 bg-gradient-to-r from-orange-100 to-sky-100 rounded-b-[100px]">
      <div className="mt-16 pb-16">
        <h2 className="font-medium text-7xl text-blue-700">
          <span className="text-green-500">Caring</span> for your <br /> child
          from infant <br /> to adult
        </h2>
        <div className="flex gap-5 font-medium text-base text-white mt-10">
          <button className="bg-green-600 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 px-5 py-4 rounded-2xl">
            Our Facilities
          </button>
          <button className="bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 px-5 py-4 rounded-2xl">
            Our Services
          </button>
        </div>
        <div className="flex items-center mt-10 gap-4">
          <div>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Pick your appointment
              </option>
              <option>Cardiovascular Examination</option>
              <option>Cardiac Imaging and Testing</option>
              <option>Peripheral Vascular Disease Treatment</option>
            </select>
          </div>
          <div>
            <button className="flex gap-2 text-white font-display bg-green-600 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 px-6 py-4 rounded-2xl">
              <CalendarIcon className="h-6 w-6" />
              Our Facilities
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pb-0">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
