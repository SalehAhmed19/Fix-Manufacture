import React from "react";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/solid";
import bg from "../../assets/image/bg.png";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="my-5 grid bg-accent grid-cols-1 lg:grid-cols-2 mx-5 p-8"
    >
      <div>
        <h2 className="text-primary font-bold text-3xl">
          Call Us or Fill the Form
        </h2>
        <div className="my-5">
          <h6 className="text-xl font-bold text-gray-400">
            <PhoneIcon className="h-6 inline-block" /> 646-872-4210
          </h6>
          <h6 className="text-xl text-gray-400">
            Don’t hesitate to contact us
          </h6>
        </div>
        <div className="my-5">
          <h6 className="text-xl font-bold text-gray-400">
            <LocationMarkerIcon className="h-6 inline-block" /> Factory Address
          </h6>
          <h6 className="text-xl text-gray-400">5022 Forest Avenue</h6>
          <h6 className="text-xl text-gray-400">New York 10013</h6>
        </div>
      </div>
      <div className="bg-base-100 p-8 rounded-md">
        <div className="w-full">
          <input
            placeholder="Name"
            className="input input-bordered block my-3 border rounded-md w-full h-8 mr-2"
            type="text"
          />
          <input
            placeholder="Company"
            className="input input-bordered block my-3 border rounded-md w-full h-8"
            type="text"
          />
          <input
            placeholder="Email"
            className="input input-bordered block my-3 rounded-md h-8 w-full"
            type="email"
          />
          <input
            placeholder="Phone"
            className="input input-bordered block my-3 rounded-md h-8 w-full"
            type="text"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            placeholder="How can we help?"
          ></textarea>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
