import React from "react";
import { Link } from "@reach/router";

function DragonCard({ name, first_flight, heat_shield, id }) {
  return (
    <li>
      <Link to={`/dragons/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <p>First Flight: {first_flight}</p>
    </li>
  );
}

export default DragonCard;
