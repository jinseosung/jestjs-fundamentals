import React, { useState } from "react";

const QueryByRole = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ background: isDark && "grey" }}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light" : "Dark"}
      </button>
      <p>Veuillez indiquer votre identité</p>
      <form>
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" placeholder="Indiquez votre nom" />

          <label htmlFor="lastName">Prénom</label>
          <input
            type="text"
            id="lastName"
            placeholder="Indiquez votre prénom"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default QueryByRole;
