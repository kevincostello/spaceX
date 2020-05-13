import React, { Component } from "react";
import * as api from "../api";

class Home extends Component {
  state = {
    max_flight_number: "",
    flight_number: "",
    mission_name: "",
    launch_date: "",
    picture: "",
    isLoading: true,
  };
  render() {
    const {
      max_flight_number,
      flight_number,
      mission_name,
      launch_date,
      picture,
      isLoading,
    } = this.state;
    console.log(max_flight_number);

    if (isLoading) return <p>Loading random picture for you now........</p>;
    return (
      <main>
        <h2>Random Launcher Information</h2>
        <h3>Mission name: {mission_name}</h3>
        <img src={picture} alt="mission" />
        <p>Flight number: {flight_number}</p>
        <p>Launch date: {launch_date}</p>
      </main>
    );
  }

  componentDidMount() {
    this.fetchLatestLaunch();
  }

  fetchLatestLaunch = () => {
    api
      .getLatestLaunch()
      .then((flight_number) => {
        console.log("flight number is: ", flight_number);

        this.setState({ max_flight_number: flight_number, isLoading: false });
        return flight_number;
      })
      .then((flight_number) => {
        const { max_flight_number } = this.state;
        console.log("Max flight number is: ", max_flight_number);

        api
          .getRandomLaunch(max_flight_number)
          .then(({ flight_number, mission_name, launch_date_utc, links }) => {
            this.setState({
              flight_number,
              mission_name,
              launch_date: launch_date_utc,
              picture: links.mission_patch_small,
            });
          });
      });
  };

  // fetchRandomLaunch = () => {
  //   api.getRandomLaunch.then(max_flight_number)
  // }
}

export default Home;
