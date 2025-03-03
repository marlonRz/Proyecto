import "./Button.css"

const Button = ({ text, width = '', height = '', onClick}) => {
  return (
    <button
      style={{ width, height }}
      onClick={onClick} 
    >
      {text}
    </button>
  );
};
export default Button;