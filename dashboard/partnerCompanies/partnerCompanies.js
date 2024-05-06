import "./partnerCompanies.css";
import { partnerLogos } from "@/constant/constant";
import Image from "next/image";
import { useSelector } from "react-redux";

const PartnerCompanies = () => {
  const initialValue = useSelector((state) => state.updateMode.darkMode);

  return (
    <>
      <div className={!initialValue ? "partnerParent" : "darkPartnerParent"}>
        <p className="partnerHeading">We Work With Amazing Clients</p>
        <div className="imagesParent">
          {partnerLogos.map((value, index) => {
            return (
              <>
                <Image
                  src={!initialValue ? value.image : value.dark}
                  width={200}
                  className="image"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PartnerCompanies;
