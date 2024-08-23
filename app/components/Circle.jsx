import React from "react";

function Circle() {
  return (
    <svg
      className="absolute w-[200px] xl:w-[500px] xl:h-[500px] h-auto"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle
        cx="50.5"
        cy="50.5"
        r="40.3"
        stroke="#353535"
        strokeWidth="0.4"
      ></circle>
    </svg>
  );
}

export default Circle;
