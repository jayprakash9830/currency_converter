import React from "react";

const Button = ({
  buttonStyle,
  textStyle,
  buttonLable,
  handleOnClick
}) => {
  return (
    <div
      className={`${buttonStyle} border-2 border-white/50 cursor-pointer`}
      onClick={(handleOnClick)}
    >
      <p className={textStyle}>{buttonLable}</p>
    </div>
  );
};

export default Button;
