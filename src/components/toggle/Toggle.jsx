import React, { useContext } from "react";
import Sun from "../../image/sun.png";
import Moon from "../../image/moon.png";
import "./toggle.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  const darkMode = theme.state.darkmode;

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: darkMode ? "25px" : "0px" }}
      ></div>
    </div>
  );
};

export default Toggle;
