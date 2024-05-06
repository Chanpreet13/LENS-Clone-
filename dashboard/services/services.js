"use client";
import { serviceCardText } from "@/constant/constant";
import "./services.css";
import MiniHeading from "@/components/miniHeading/miniHeading";
import { useState } from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const initialValue = useSelector((state) => state.updateMode.darkMode);

  const [mouseOver, setMouseOver] = useState();
  return (
    <>
      <div className="serviceParent">
        <MiniHeading heading={"SERVICES"} />
        <h1 className="serviceHeadingText">
          We provide Artificial Intelligence Services
        </h1>

        <div className={"serviceCardParent"}>
          {serviceCardText.map((value, index) => {
            return (
              <div
                className="borderDiv"
                style={{
                  border:
                    mouseOver !== "" && mouseOver == index
                      ? `1px solid ${value.color}`
                      : " ",
                }}
              >
                <div
                  key={index}
                  className={
                    !initialValue ? "cardContentParent" : "darkServiceCards"
                  }
                  style={{
                    backgroundImage:
                      mouseOver !== "" && mouseOver == index
                        ? `linear-gradient(to right, ${value.hoverGradientColor}, #ffffff)`
                        : " ",
                  }}
                  onMouseEnter={() => setMouseOver(value.id)}
                  onMouseLeave={() => setMouseOver("")}
                >
                  <div className="headingParent">
                    <h1 className="headingNumber">
                      0
                      <span
                        className="highlightNumber"
                        style={{
                          color:
                            mouseOver !== "" && mouseOver == index
                              ? value.color
                              : " ",
                        }}
                      >
                        {value.number}
                      </span>
                      <p
                        className="title"
                        style={{
                          color:
                            mouseOver !== "" && mouseOver == index
                              ? "rgb(138, 138, 138)"
                              : value.color,
                          left:
                            mouseOver !== "" && mouseOver == index
                              ? "100px"
                              : "70px",
                        }}
                      >
                        {value.title}
                      </p>
                    </h1>
                  </div>
                  <div className="description">{value.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
