import React from "react";

const GetByDisplayValue = () => {
  return (
    <form>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        placeholder="Indiquez votre nom"
        defaultValue="Gou"
      />

      <label htmlFor="lastName">Prénom</label>
      <input
        type="text"
        id="lastName"
        placeholder="Indiquez votre prénom"
        defaultValue="Peggy"
      />

      <button>Submit</button>
    </form>
  );
};

export default GetByDisplayValue;
