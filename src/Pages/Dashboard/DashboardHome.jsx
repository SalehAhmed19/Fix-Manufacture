import React from "react";
import AnimatedText from "react-animated-text-content";
import { useAuthState } from "react-firebase-hooks/auth";
import { Zoom } from "react-reveal";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <Zoom>
        <h4 className="text-xl font-bold">Hi, Welcome to</h4>
        <h1 className="text-3xl lg:text-6xl font-bold text-[#FEBF04]">
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="throw"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            {admin ? "Admin Dashboard!!" : "User Dashboard!!"}
          </AnimatedText>
        </h1>
      </Zoom>
    </div>
  );
};

export default DashboardHome;
// #FEBF04
