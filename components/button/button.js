import "./button.css";
const Button = ({ text, fill, width, color }) => {
  return (
    <>
      {fill ? (
        <button className="buttonParent">{text}</button>
      ) : (
        <button style={{ width: width }} className="hollowButtonParent">
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
