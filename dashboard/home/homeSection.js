import Button from "@/components/button/button";
import "./homeSection.css";
const HomeSection = () => {
  return (
    <>
      <div className="dashboardParent">
        <div className="titleContentParent">
          <div className="titleParent">
            <p className="mainTitle">We are at the forefront of AI</p>
            <p className="titleDescription">
              From Conserving Wildlife to Automatically Generating Caricatures -{" "}
              <span className="boldText">We Do It All</span>
            </p>
            <Button fill={true} text={"Learn More"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSection;
