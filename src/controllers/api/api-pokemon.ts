import { api } from "./api";
import { Pokemon } from "./pokemon-typing";
import { PaginatedApiResponse } from "./api-typing";

export async function fetchPokemons(offset = 0, limit = 10) {
  const params = {
    offset,
    limit,
  };
  const response = await api.get<PaginatedApiResponse<Pokemon>>("/pokemon", {
    params,
  });

  return response.data;
}
