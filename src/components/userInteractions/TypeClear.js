import React, { useState } from "react";

const options = ["Option 1", "Option 2", "Option 3"];

const TypeClear = () => {
  const [text, setText] = useState("Bonjour");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select multiple>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeClear;
