import React from "react";

function CapsuleCard({ capsule_serial, details }) {
  return (
    <li>
      <h2>Capsule serial: {capsule_serial}</h2>
      <p>{details}</p>
    </li>
  );
}

export default CapsuleCard;
