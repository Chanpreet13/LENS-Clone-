import Button from "@/components/button/button";
import VectorImage from "../../public/vectorAi.webp";
import BorderImage from "../../public/border.svg";
import "./trueAi.css";
import Image from "next/image";
import { useSelector } from "react-redux";
const TrueAi = () => {
  const initialValue = useSelector((state) => state.updateMode.darkMode);

  return (
    <>
      <div className={!initialValue ? "trueAiParent" : "darkTrueAiParent"}>
        <div
          className={
            !initialValue ? "trueAiContentParent" : "darkTrueAiContentParent"
          }
        >
          <Image src={VectorImage} width={350} className="vectorImage" />
          <div className="trueAiDescriptionParent">
            <div className="heading">
              <p>Meet</p>
              <div className="gradiantTextWithBorderParent">
                <p className="gradiantHeading">Tru - AI</p>
                <Image src={BorderImage} width={200} />
              </div>
            </div>

            <div className="description">
              <p>Design. Create. Deploy.</p>
            </div>

            <div className="movingGradientParent">
              <p>
                ___{" "}
                <span className="movingGradient">
                  the Future of AI | Power to EDIT
                </span>
              </p>
            </div>

            <p className="generalDescription">
              Based On Your Website & Traffic Trends, Tru-AI Optimises Your
              Website
            </p>
            <Button
              fill={false}
              width={160}
              color={"transparent"}
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrueAi;
