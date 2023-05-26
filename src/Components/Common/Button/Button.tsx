import React from "react";
import "./styles.css";

type TButton = {
  text: string;
  onClick: () => void;
  outlined?: boolean;
};

function Button({ text, onClick, outlined }: TButton) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn-div"}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
