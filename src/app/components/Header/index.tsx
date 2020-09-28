import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="pokeapi.png" alt="pokeapi" />
      </a>
    </div>
  );
};
