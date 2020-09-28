import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPokemons, selectPokemonsStatus } from "../Selectors/pokemon-selector";
import { loadPokemons } from "../Thunks/pokemon-thunks";
import { ListPokemon } from "../ListPokemon/list-pokemon";
import PokemonTableRow from ".";

export const PokemonsTable: FC = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(selectAllPokemons);
  useEffect(() => {
    dispatch(loadPokemons({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const status = useSelector(selectPokemonsStatus);
  const tableRows = pokemons.map((pokemon) => {
    return <PokemonTableRow
      key={pokemon.name}
      pokemon={pokemon} />;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">NOME</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        {status === "pending" && (
          <tr>
            <td colSpan={2} rowSpan={10} className="text-center">
              Procurando Pokémons...
            </td>
          </tr>
        )}
        {status === "error" && (
          <tr>
            <td colSpan={2} rowSpan={10} className="text-center">
              Os Pokémons escaparam! | Erro
            </td>
          </tr>
        )}
        {status === "idle" && tableRows}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            <ListPokemon />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
