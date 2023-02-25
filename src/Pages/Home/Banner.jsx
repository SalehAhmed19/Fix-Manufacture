import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/Banner.css";
import img1 from "../../assets/Banner/img1.jpg";
import img2 from "../../assets/Banner/img2.jpg";
import img3 from "../../assets/Banner/img3.jpg";
import img4 from "../../assets/Banner/img4.jpg";
import img5 from "../../assets/Banner/img5.jpg";
import img6 from "../../assets/Banner/img6.jpg";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const BannerImg = [
    {
      _id: 1,
      img: img1,
      title: "Your One-Stop Shop for Quality Mobile Phone Parts - Shop Now!",
      content: "lorem ipsum",
    },
    {
      _id: 2,
      img: img2,
      title:
        "Shop the Best Quality Mobile Phone Parts at our Manufacturer Website - Shop Now!",
      content: "lorem ipsum",
    },
    {
      _id: 3,
      img: img3,
      title: "Get the Best Quality Mobile Phone Parts - Shop Now!",
      content: "lorem ipsum",
    },
    {
      _id: 4,
      img: img4,
      title:
        "Find High-Quality Mobile Phone Parts at Competitive Prices - Shop Now!",
      content: "lorem ipsum",
    },
    {
      _id: 5,
      img: img5,
      title: "Get Your Phone Running Again with High-Quality Parts - Shop Now!",
      content: "lorem ipsum",
    },
    {
      _id: 6,
      img: img6,
      title:
        "Shop the Best Quality Mobile Phone Parts at Affordable Prices - Your One-Stop Destination for Replacement Parts!",
      content: "lorem ipsum",
    },
  ];
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {BannerImg.map((bi) => (
            <div
              className="keen-slider__slide lg:p-20 p-10"
              style={{
                backgroundImage: `url(${bi.img})`,
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={bi._id}
            >
              <div className="lg:mx-20">
                <h1 className="text-3xl lg:text-5xl text-[#FEC002] font-bold my-5">
                  {bi.title}
                </h1>
                <p className="text-[#FEC002] text-xl font-bold">{bi.content}</p>
                <button className="bg-[#FEC002] py-3 px-10 rounded my-5 hover:bg-transparent hover:text-[#FEC002] hover:border hover:border-[#FEC002] h">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Banner;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
