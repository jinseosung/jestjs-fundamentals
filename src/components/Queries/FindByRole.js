import React, { useState, useEffect } from "react";

const FindByRole = () => {
  const [isDark, setIsDark] = useState(false);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDark(true);
      setIsShown(false);
    }, 2000);
  }, []);

  return (
    <div style={{ background: isDark && "grey" }}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light" : "Dark"}
      </button>

      {isShown && (
        <img
          src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Danonino"
        />
      )}

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

export default FindByRole;
