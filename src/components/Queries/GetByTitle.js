import React from "react";

const GetByTitle = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Danonino"
      />

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
      <p>
        <abbr title="Adopter notre Danonino"></abbr>
      </p>
    </>
  );
};

export default GetByTitle;
