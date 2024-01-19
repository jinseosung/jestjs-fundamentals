import React from "react";

const GetByPlaceholderText = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" placeholder="Indiquez votre nom" />

        <label htmlFor="lastName">Prénom</label>
        <input type="text" id="lastName" placeholder="Indiquez votre prénom" />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default GetByPlaceholderText;
