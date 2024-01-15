import React from "react";

const HighlightText = ({text}) => {

  console.log(text)

  return (
<span className=" text-white bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
