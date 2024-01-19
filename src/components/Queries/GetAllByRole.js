import React from "react";

const GetAllByRole = ({ btns }) => {
  return (
    <>
      <ul>
        {btns.map((btn, i) => (
          <li key={i}>
            <button>{btn}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetAllByRole;
