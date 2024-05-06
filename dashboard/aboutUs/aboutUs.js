import Button from "@/components/button/button";
import "./aboutUs.css";
import LensTeam from "../../public/lens_team_image.webp";
import Image from "next/image";
import { useSelector } from "react-redux";
import MainHeading from "@/components/mainHeading/mainHeading";
const AboutUs = () => {
  const initialValue = useSelector((state) => state.updateMode.darkMode);

  return (
    <>
      <div className={!initialValue ? "aboutUsWrapperParent" : "darkAboutUs"}>
        <MainHeading heading={"About Us"} />
        <div className={"aboutMainParent"}>
          <div className="aboutContentParent">
            <div className="aboutTextParent">
              <h2 className="heading">Welcome to LENS</h2>
              <p className="description">
                We put our hearts, souls and sweat into designing and developing
                custom AI - powered solutions for your business so you don't
                have to.
              </p>

              <Button fill={true} width={160} text={"Learn More"} />
            </div>
            <div className="imageParent">
              <Image className="teamImage" width={350} src={LensTeam} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
