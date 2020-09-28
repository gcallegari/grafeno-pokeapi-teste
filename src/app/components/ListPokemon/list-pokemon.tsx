import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListPokemon,
  selectPokemonsHasPreviousPage,
  selectPokemonsHasNextPage,
} from "../Selectors/pokemon-selector";
import { loadPokemons } from "../Thunks/pokemon-thunks";

export interface ListPokemonProps { }

export const ListPokemon: FC<ListPokemonProps> = () => {
  const pagination = useSelector(selectListPokemon);
  const hasPrevious = useSelector(selectPokemonsHasPreviousPage);
  const hasNext = useSelector(selectPokemonsHasNextPage);

  const currentPage = pagination.offset / pagination.limit + 1;
  const totalOfPages = Math.ceil(pagination.count / pagination.limit);

  const dispatch = useDispatch();

  const onClickPrevious = useCallback(() => {
    const newOffset = pagination.offset - pagination.limit;
    dispatch(
      loadPokemons({
        limit: 10,
        offset: newOffset < 0 ? 0 : newOffset,
      })
    );
  }, [dispatch, pagination.limit, pagination.offset]);

  const onClickNext = useCallback(() => {
    const newOffset = pagination.offset + pagination.limit;
    dispatch(
      loadPokemons({
        limit: 10,
        offset: newOffset,
      })
    );
  }, [dispatch, pagination.limit, pagination.offset]);
  return (
    <div className="row justify-content-between">
      <div className="col-md-3">
        <div>
          <ul className="pagination">
            <li className={`page-item ${!hasPrevious && "disabled"}`}>
              <button className="page-link" onClick={onClickPrevious}>
                Voltar
              </button>
            </li>
            <li
              className={`page-item ${!hasNext && "disabled"}`}
              onClick={onClickNext}
            >
              <button className="page-link">Próximo</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-3 text-right">
        Você está na página {currentPage} de {totalOfPages}
      </div>
    </div>
  );
};
