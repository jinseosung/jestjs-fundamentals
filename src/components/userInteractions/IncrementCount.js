import React, { useState } from "react";

const btnStyle = {
  padding: "5px",
  width: "200px",
  borderRadius: "6px",
  border: "0px",
};

const IncrementCount = () => {
  const [count, setCount] = useState(0);
  const [btnColor, setBtnColor] = useState("orange");
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setBtnColor(btnColor === "orange" ? "cyan" : "orange");
  };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={()=>{
            setIsChecked(!isChecked)
          }} /> J'accepte les Termes et
          conditions
        </label>
      </div>
      <button
        disabled={isChecked ? false : true}
        onClick={onClick}
        style={{ ...btnStyle, backgroundColor: btnColor }}
      >
        Vous avez cliqué {count} fois
      </button>
    </>
  );
};

export default IncrementCount;
