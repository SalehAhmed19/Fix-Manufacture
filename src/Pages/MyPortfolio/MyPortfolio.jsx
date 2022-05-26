import React from "react";
import sa from "../../assets/image/sa.jpg";

const MyPortfolio = () => {
  return (
    <div className="border-2 rounded-md mx-20 p-5">
      <h2 className="text-3xl text-primary text-center font-bold">
        My Portfolio
      </h2>
      <div>
        <div class="avatar flex justify-center">
          <div class="w-56 mask mask-squircle">
            <img src={sa} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-primary font-bold">Saleh Ahmed Mahin</h2>
          <p>saleh.ahmed.mahin@gmail.com</p>
          <p>
            <span className="font-bold">Phone: </span>+880 1745 880048
          </p>
        </div>
        <div className="my-4">
          <h4 className="font-bold text-xl">Skills:</h4>
          <p className="font-bold">Technology</p>
          <div className="grid grid-cols-2">
            <ul className="list-disc ml-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
            </ul>
            <ul className="list-disc ml-4">
              <li>React Bootstrap</li>
              <li>React Router Dom</li>
              <li>React Hook Form</li>
              <li>React Firebase Hooks</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Tools:</p>
            <ul className="list-disc ml-4">
              <li>GitHub</li>
              <li>Firebase</li>
              <li>Netlify</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">Projects:</h2>
          <div>
            <ul>
              <li>
                <span className="font-bold">Doctors-Portal -</span>{" "}
                <a
                  className="text-primary"
                  href="https://doctors-portal-7f9c4.web.app/"
                >
                  Live Link
                </a>{" "}
                ||{" "}
                <a
                  className="text-primary"
                  href="https://github.com/SalehAhmed19/doctors-portal-client-side"
                >
                  GitHub Client Side
                </a>{" "}
                ||{" "}
                <a
                  className="text-primary"
                  href="https://github.com/SalehAhmed19/doctors-portal-server-side"
                >
                  GitHub Server Side
                </a>
              </li>
              <li>
                <span className="font-bold">Cars-Empire -</span>{" "}
                <a className="text-primary" href="https://cars-empire.web.app/">
                  Live Link
                </a>{" "}
                ||{" "}
                <a
                  className="text-primary"
                  href="https://github.com/SalehAhmed19/cars-empire-client-side-repos-portal-client-side"
                >
                  GitHub Client Side
                </a>{" "}
                ||{" "}
                <a
                  className="text-primary"
                  href="https://github.com/SalehAhmed19/cars-empire-server-side-reportal-server-side"
                >
                  GitHub Server Side
                </a>
              </li>
              <li>
                <span className="font-bold">Tech-Land -</span>{" "}
                <a
                  className="text-primary"
                  href="https://techland-react.netlify.app/"
                >
                  Live Link
                </a>{" "}
                ||{" "}
                <a
                  className="text-primary"
                  href="https://github.com/SalehAhmed19/techland-react"
                >
                  GitHub Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-4">
          <h4 className="font-bold text-xl">Education:</h4>
          <p>
            <span className="font-bold">Degree: </span> Diploma in Computer
            Engineering
          </p>
          <p>
            <span className="font-bold">Institute: </span>Institute of
            Information Technology Bogra - (IITB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
