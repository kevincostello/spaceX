import React, { Component } from "react";
import * as api from "../api";
import LaunchCard from "./LaunchCard";

export default class Launches extends Component {
  state = { launches: [], isLoading: true, sortedDesc: false };
  render() {
    const { isLoading, launches, sortedDesc } = this.state;
    console.log(launches);
    if (isLoading) return <h2>Loading all the launches in 3....2...1......</h2>;
    return (
      <main>
        <h2>Launch Information</h2>
        <button onClick={this.sortLaunches}>Sort by launch date</button>
        <ul>
          {launches.map((launch) => {
            return <LaunchCard key={launch.flight_number} {...launch} />;
          })}
        </ul>
        ;
      </main>
    );
  }

  componentDidMount() {
    console.log("mounting");

    this.fetchAllLaunches();
  }

  fetchAllLaunches = () => {
    api.getAllLaunches().then((launches) => {
      console.log("launches: ", launches);

      this.setState({ launches, isLoading: false });
    });
  };

  sortLaunches = () => {
    const { sortedDesc } = this.state;
    let order = "asc";
    if (!sortedDesc) order = "desc";
    console.log("order: ", order, sortedDesc);

    api.getAllLaunches("launch_date_utc", order).then((launches) => {
      this.setState((currentState) => {
        return { launches, sortedDesc: !currentState.sortedDesc };
      });
    });
  };
}
