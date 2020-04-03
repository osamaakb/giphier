import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Grid from "./Layout/Grid";
import Modal from "./Modal";

import Api from "../api";

//can be used to render a selector on the search bar with the ability to add more in the future
export const SEARCH_TYPES = {
  default: { name: "Gifs", slug: "gifs" }, //default form gifs
  stickers: { name: "Stickers", slug: "stickers" }
};

const Search = () => {
  const params = useParams();
  const itemType = params.type;
  const query = params.query;

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = item => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    Api.search(query, itemType, signal)
      .then(data => setItems(data))
      .catch(err => {
        console.error(err.message);
        setItems([]);
      });

    return () => {
      abortController.abort();
    };
  }, [itemType]);

  return (
    <>
      <Grid items={items} onItemClick={onItemClick} />;
      {selectedItem && (
        <Modal
          item={selectedItem}
          show={!!selectedItem}
          toggleHandler={() => setSelectedItem(null)}
        />
      )}
    </>
  );
};

export default Search;