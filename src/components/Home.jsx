import React, { Component } from "react";
import * as api from "../api";

class Home extends Component {
  state = {
    max_flight_number: "",
    flight_number: 65,
    mission_name: "Telstar 19V",
    launch_date: "2018-07-22T05:50:00.000Z",
    picture: "https://images2.imgbox.com/12/7c/NiniYxoh_o.png",
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
    const { max_flight_number } = this.state;
    api
      .getLatestLaunch()
      .then((flight_number) => {
        this.setState({ max_flight_number: flight_number });
      })
      .then(() => {
        api.getRandomLaunch(max_flight_number);
      });
  };

  // fetchRandomLaunch = () => {
  //   api.getRandomLaunch.then(max_flight_number)
  // }
}

export default Home;
