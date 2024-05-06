import "./miniHeading.css";

const MiniHeading = ({ heading }) => {
  return (
    <>
      <div className="miniHeadingParent">
        <p className="miniHeading">{heading}</p>
        <div className="gradiantBorder"></div>
      </div>
    </>
  );
};

export default MiniHeading;
