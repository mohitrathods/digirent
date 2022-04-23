import React from "react";

const Render = ({ pname, pdescription }) => {
  return (
    <div>
      <h2>name will appear below</h2>
      <p>{pname}</p>
      <p>{pdescription}</p>
    </div>
  );
};

export default Render;
