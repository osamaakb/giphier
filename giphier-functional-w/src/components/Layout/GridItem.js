import React from "react";

const GridItem = ({ item, onItemClick }) => (
  <div className="col-lg-3 col-md-3 col-sm-4 col-6 p-2 d-flex justify-content-center align-items-center">
    <div
      id={item.id}
      className="grid-item-wrapper"
      style={{ cursor: "pointer" }}
      onClick={() => onItemClick(item)}
    >
      <img
        className="grid-item img-fluid"
        src={item.getSrc()}
        alt={item.getAlt()}
      />
    </div>
  </div>
);

export default GridItem;
