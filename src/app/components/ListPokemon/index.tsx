import React, { FC } from "react";
import { PokemonsTable } from "../Home/table-pokemon";

export const PokemonIndex: FC = () => {
  return (
    <div className="row">
      <div className="col-md-12 my-4">
        <h2>A wild Pokémon appeared!</h2>
      </div>
      <div className="col-md-12">
        <PokemonsTable />
      </div>
    </div>
  );
};
