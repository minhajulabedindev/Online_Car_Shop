import React, { useRef, useState } from "react";
import "./Date.css";
// import ItemsCarousel from "react-items-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Date = () => {
  const [arrow, setArrow] = useState(false);
  const ref = useRef();

  const boxWidth = "250px";

  const scrollUp = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setArrow(!arrow);
  };
  return (
    <div className="my-3 ">
      {" "}
      <div
        className="scrollUp"
        style={{
          overflow: "auto",
          height: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          paddingLeft: "30px",

          width: "100%",
        }}
      >
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          <img className="w-100" src="https://i.ibb.co/xGGTsZT/max-brinton-k-U2-MOj-Kob-Ng-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          <img className="w-100" src="https://i.ibb.co/L06Nv4N/toni-zaat-h1-I6-kw-At-LU-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/MRz4yJg/toni-zaat-36-Tnchci-HFE-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/PxFTKSt/nathan-van-egmond-uwr-Tw-Max-VR4-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
            position: "relative",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/dtPNf8C/toni-zaat-T8-Euw-T8-ZEn-I-unsplash.jpg"></img>
          {!arrow ? (
            <div
              style={{
                position: "absolute",
                width: "40px",
                height: "45px",
                backgroundColor: "dodgerblue",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "-0px",
                top: "100px",
              }}
              onClick={() => scrollUp(400)}
            >
              <AiOutlineArrowRight size={20} />
            </div>
          ) : null}
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/FzzW2Gd/tyrell-james-n-Ok-I10-Vfm-BY-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/98XzRSD/hakon-sataoen-W1-PF7ll-Lx-Mc-unsplash-1.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          <img className="w-100" src="https://i.ibb.co/DrrkHX1/tesla-fans-schweiz-7-OQMgo-Gz-Dw-unsplash.jpg"></img>
        </div>
        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            marginRight: "20px",
            display: "inline-block",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/7WfGHHD/jannis-lucas-o-N661-Kw9-ZOY-unsplash.jpg"></img>
        </div>

        <div
          style={{
            width: boxWidth,
            height: "100%",
            backgroundColor: "black",
            display: "inline-block",
            marginRight: "20px",
          }}
        >
          {" "}
          <img className="w-100" src="https://i.ibb.co/0cHK5Sw/charlie-deets-D1-W5-Qen-Bzl-U-unsplash.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Date;
