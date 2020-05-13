import React, { Component } from "react";
import MissionCard from "./MissionCard";
import * as api from "../api";

class Missions extends Component {
  state = {
    missions: [],
    isLoading: true,
  };
  render() {
    const { missions, isLoading } = this.state;
    if (isLoading) return <h2>Mission information loading........</h2>;
    return (
      <main>
        <h2>Mission Information</h2>
        <ul>
          {missions.map((mission) => {
            return <MissionCard key={mission.mission_id} {...mission} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchAllMissions();
  }

  fetchAllMissions = () => {
    api.getAllMissions().then((missions) => {
      console.log(missions);
      this.setState({ missions, isLoading: false });
    });
  };
}

export default Missions;
