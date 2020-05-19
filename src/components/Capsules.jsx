import React, { Component } from "react";
import CapsuleCard from "./CapsuleCard";
import * as api from "../api";

export default class Capsules extends Component {
  state = {
    capsules: [
      {
        capsule_serial: "C101",
        capsule_id: "dragon1",
        status: "retired",
        original_launch: "2010-12-08T15:43:00.000Z",
        original_launch_unix: 1291822980,
        missions: [
          {
            name: "COTS 1",
            flight: 7,
          },
        ],
        landings: 0,
        type: "Dragon 1.0",
        details: "Reentered after three weeks in orbit",
        reuse_count: 0,
      },
      {
        capsule_serial: "C102",
        capsule_id: "dragon1",
        status: "retired",
        original_launch: "2012-05-02T07:44:00.000Z",
        original_launch_unix: 1335944640,
        missions: [
          {
            name: "COTS 2",
            flight: 8,
          },
        ],
        landings: 1,
        type: "Dragon 1.0",
        details: "First Dragon spacecraft",
        reuse_count: 0,
      },
    ],
    isLoading: true,
  };
  render() {
    const { capsules, isLoading } = this.state;
    if (isLoading) return <h2>Capsule information loading.........</h2>;
    return (
      <main>
        <h2>Capsule Information</h2>
        <ul>
          {capsules.map((capsule) => {
            return <CapsuleCard key={capsule.capsule_serial} {...capsule} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllCapsules();
  }

  fetchAllCapsules = () => {
    api.getAllCapsules().then((capsules) => {
      console.log(capsules);
      this.setState({ capsules, isLoading: false });
    });
  };
}
