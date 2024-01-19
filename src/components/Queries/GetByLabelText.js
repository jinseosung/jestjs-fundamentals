import React from "react";

const GetByLabelText = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" />

        <label htmlFor="lastName">Prénom</label>
        <input type="text" id="lastName" />
      </div>

      <div>
        <label id="username">Username</label>
        <input aria-labelledby="username" />
      </div>

      <div>
        <label>
          <input type="checkbox" id="condition-check" />
          J'accepte les termes et conditions
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" id="newsletter-check" />
          Je m'abbone à la nesletter
        </label>
      </div>

      <label>
        Animal préféré
        <input type="text" />
      </label>

      <label>
        Animal préféré
        <textarea />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default GetByLabelText;
