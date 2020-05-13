import React from "react";

function LaunchCard({ flight_number, mission_name, launch_date_utc, links }) {
  return (
    <li>
      <h3>Mission name: {mission_name}</h3>
      <img src={links.mission_patch_small} alt="mission" />
      <p>Flight number: {flight_number}</p>
      <p>Launch date: {launch_date_utc}</p>
    </li>
  );
}

export default LaunchCard;
