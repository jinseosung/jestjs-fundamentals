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
  const [isShown, setIsShown] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setBtnColor(btnColor === "orange" ? "cyan" : "orange");
  };

  const onMouseOver = () => setIsShown(true);
  const onMouseOut = () => setIsShown(false);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />{" "}
          J'accepte{" "}
          <span
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            style={{ color: "blue" }}
          >
            les Termes et conditions
          </span>
        </label>
      </div>
      <button
        disabled={isChecked ? false : true}
        onClick={onClick}
        style={{ ...btnStyle, backgroundColor: btnColor }}
      >
        Vous avez cliqué {count} fois
      </button>

      {isShown && (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a,
            repudiandae quos labore ullam possimus rerum laboriosam aliquam odit
            illo ratione fugit at molestias quisquam ducimus doloremque placeat
            dolorem quod.
          </p>
        </div>
      )}
    </>
  );
};

export default IncrementCount;
