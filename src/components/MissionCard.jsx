import React from "react";

function MissionCard({ mission_name, description }) {
  return (
    <li>
      <h2>Mission name: {mission_name}</h2>
      <p>{description}</p>
    </li>
  );
}

export default MissionCard;
