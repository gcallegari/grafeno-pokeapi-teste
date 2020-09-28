import React, { FC } from "react";
import { Pokemon } from "../../../controllers/api/pokemon-typing";

export interface TableRowProps {
  pokemon: Pokemon;
}

const PokemonTableRow: FC<TableRowProps> = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td>{pokemon.url}</td>
    </tr>
  );
};

export default PokemonTableRow;
