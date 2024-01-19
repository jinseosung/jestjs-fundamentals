import React from "react";

const GetByRole = () => {
  return (
    <>
      <div>
        <h1>Adopter notre Danonino</h1>
        <article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            assumenda enim esse doloribus aperiam, numquam quos voluptatum
            deleniti quisquam ex, soluta vel sapiente. Molestias blanditiis at,
            nisi voluptatibus sunt sit.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Danonino"
          />
        </article>

        <h2>Inscription</h2>
        <form>
          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" />

            <label htmlFor="lastName">Prénom</label>
            <input type="text" id="lastName" />
          </div>

          <div>
            <label htmlFor="animal-select">Choisissez un animal</label>
            <select name="pets" id="animal-select" size={5}>
              <option value="chien">Chien</option>
              <option value="hamster">Hamster</option>
              <option value="chat">Chat</option>
            </select>
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
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default GetByRole;
