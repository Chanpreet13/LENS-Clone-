import {
  ethicsCheckpoint,
  regularityCheckpoint,
  visionCheckPoints,
} from "@/constant/constant";
import "./vision.css";
import MiniHeading from "@/components/miniHeading/miniHeading";
import Image from "next/image";
import { useSelector } from "react-redux";
const Vision = () => {
  const initialValue = useSelector((state) => state.updateMode.darkMode);

  return (
    <>
      {" "}
      <div
        className={`serviceParent ${
          !initialValue ? "visionParent" : "darkVisionParent"
        } `}
      >
        <MiniHeading heading={"OUR VISION"} />
        <h1 className="serviceHeadingText lensHeading">AI for Social Good</h1>

        <p className="lensDescription">
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </p>

        <div className="checkpointParent visionCardDifferentParent ">
          {visionCheckPoints.map((value, index) => {
            return (
              <>
                <div className="visionTextParent">
                  <p className="whyLensTitle visionLensTitle">{value.title}</p>
                  <p className="lensDescription visionLensDescription ">
                    {value.description}
                  </p>
                </div>
                <div className="iconParent">
                  <Image
                    src={value.image}
                    width={40}
                    className="logoImageBorderParent"
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="checkpointParent reverseDescriptionParent">
          {regularityCheckpoint.map((value, index) => {
            return (
              <>
                <div className="visionTextParent">
                  <p className="whyLensTitle visionLensTitle">{value.title}</p>
                  <p className="lensDescription visionLensDescription">
                    {value.description}
                  </p>
                </div>
                <div className="iconParent">
                  <Image
                    src={value.image}
                    width={40}
                    className="logoImageBorderParent"
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="checkpointParent visionCardDifferentParent">
          {ethicsCheckpoint.map((value, index) => {
            return (
              <>
                <div className="visionTextParent">
                  <p className="whyLensTitle visionLensTitle">{value.title}</p>
                  <p className="lensDescription visionLensDescription ">
                    {value.description}
                  </p>
                </div>
                <div className="iconParent">
                  <Image
                    src={value.image}
                    width={40}
                    className="logoImageBorderParent"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Vision;
