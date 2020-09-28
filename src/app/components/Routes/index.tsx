import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { PokemonIndex } from "../ListPokemon";


export const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PokemonIndex} />
    </Switch>
  );
};
