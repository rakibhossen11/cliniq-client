import React from "react";
import Card from "../../../component/Card";

const BannerCard = () => {
  return (
    <div >
      <div className="mx-10 mt-10 grid grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-400">
        <figure className="px-10 pt-10">
          <img
            src="https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2021/08/card_image_01-1280x1067.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-left text-green-600">
            Our Covid-19 Response and Updates
          </h2>
          <p className="text-left text-stone-500">
            We provide high quality, integrated healthcare services, based on a
            patient – centered care has taken center of quality.
          </p>
          <p className="text-left text-green-600">READ MORE</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-400">
        <figure className="px-10 pt-10">
          <img
            src="https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2021/08/card_image_01-1280x1067.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-left text-green-600">
            Tele medicine checkup available
          </h2>
          <p className="text-left text-stone-500">
            We provide high quality, integrated healthcare services, based on a
            patient – centered care has taken center of quality.
          </p>
          <p className="text-left text-green-600">READ MORE</p>
        </div>
      </div>
      <div className="card w-96 p-10 bg-blue-800 text-white shadow-xl border-2 border-slate-400">
        <h2 className="text-3xl mb-2">Working Hours</h2>
        <hr />
        <table>
          <tbody className="font-semibold text-xl">
            <tr className="border-b-2 h-10">
              <td>Sun - Wed </td>
              <td>8AM - 7PM</td>
            </tr>
            <tr className="border-b-2 h-10">
              <td> Thusday </td>
              <td>8AM - 9PM</td>
            </tr>
            <tr className="border-b-2 h-10">
              <td>Fri - Sat </td>
              <td> Close </td>
            </tr>
          </tbody>
        </table>
        <p className="my-5">
          Time’s not Flexible? <br /> We provide high quality, integrated healthcare
          services, based on a patient – centered
        </p>
      </div>
      </div>
      <div className="bg-gradient-to-b from-white to-stone-300 rounded-3xl grid grid-cols-3 py-16 px-10 gap-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      
    </div>
  );
};

export default BannerCard;
