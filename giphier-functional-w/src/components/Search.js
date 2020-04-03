import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Grid from "./Layout/Grid";
import Modal from "./Modal";

//can be used to render a selector on the search bar with the ability to add more in the future
export const SEARCH_TYPES = {
  default: { name: "Gifs", slug: "gifs" }, //default form gifs
  stickers: { name: "Stickers", slug: "stickers" }
};

const Search = () => {
  const params = useParams();
  const searchFor = params.type;
  const query = params.query;

  return (
    <div style={{ color: "white" }}>
      Searching for {query} in {searchFor}
    </div>
  );
};

export default Search;
