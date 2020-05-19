import React from "react";

function ShipCard({ ship_name, ship_type }) {
  return (
    <li>
      <h2>Ship name: {ship_name}</h2>
      <p>{ship_type}</p>
    </li>
  );
}

export default ShipCard;
