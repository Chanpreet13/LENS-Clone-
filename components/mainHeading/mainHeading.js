import "./mainHeading.css";
const MainHeading = ({ heading }) => {
  return (
    <>
      <div className="sectionParent">
        <h1 className="headingText">{heading}</h1>
        <div className="gradiantBorder"></div>
      </div>
    </>
  );
};

export default MainHeading;
