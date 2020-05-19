import React, { Component } from "react";
import ShipCard from "./ShipCard";
import * as api from "../api";

export default class Ships extends Component {
  state = {
    ships: [
      {
        ship_id: "AMERICANCHAMPION",
        ship_name: "American Champion",
        ship_model: null,
        ship_type: "Tug",
        roles: ["Support Ship", "Barge Tug"],
        active: false,
        imo: 7434016,
        mmsi: 367020820,
        abs: 571252,
        class: 7604342,
        weight_lbs: 588000,
        weight_kg: 266712,
        year_built: 1976,
        home_port: "Port of Los Angeles",
        status: "Stopped",
        speed_kn: 0,
        course_deg: null,
        position: {
          latitude: 30.52731,
          longitude: -88.10171,
        },
        successful_landings: null,
        attempted_landings: null,
        missions: [
          {
            name: "COTS 1",
            flight: 7,
          },
          {
            name: "COTS 2",
            flight: 8,
          },
        ],
        url:
          "https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/vessel:AMERICAN%20CHAMPION",
        image: "https://i.imgur.com/woCxpkj.jpg",
      },
      {
        ship_id: "AMERICANISLANDER",
        ship_name: "American Islander",
        ship_model: null,
        ship_type: "Cargo",
        roles: ["Dragon Recovery"],
        active: false,
        imo: null,
        mmsi: 367035570,
        abs: null,
        class: null,
        weight_lbs: null,
        weight_kg: null,
        year_built: null,
        home_port: "Port of Los Angeles",
        status: "Stopped",
        speed_kn: 0,
        course_deg: null,
        position: {
          latitude: 33.75565,
          longitude: -118.1144,
        },
        successful_landings: null,
        attempted_landings: null,
        missions: [
          {
            name: "CRS-1",
            flight: 9,
          },
          {
            name: "CRS-2",
            flight: 10,
          },
          {
            name: "CRS-3",
            flight: 14,
          },
          {
            name: "CRS-4",
            flight: 18,
          },
        ],
        url:
          "https://www.marinetraffic.com/en/ais/details/ships/shipid:435112/vessel:AMERICAN%20ISLANDER",
        image: "https://i.imgur.com/jmj8Sh2.jpg",
      },
    ],
    isLoading: true,
  };
  render() {
    const { ships, isLoading } = this.state;
    if (isLoading) return <h2>Ship information loading....</h2>;
    return (
      <main>
        <h2>Ship info here:</h2>
        <ul>
          {ships.map((ship) => {
            return <ShipCard key={ship.ship_id} {...ship} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllShips();
  }

  fetchAllShips = () => {
    api.getAllShips().then((ships) => {
      console.log(ships);
      this.setState({ ships, isLoading: false });
    });
  };
}
