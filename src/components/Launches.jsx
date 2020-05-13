import React, { Component } from "react";
import * as api from "../api";
import LaunchCard from "./LaunchCard";

export default class Launches extends Component {
  state = { launches: [], isLoading: true, sortedDesc: false, launch_year: "" };
  render() {
    const { isLoading, launches, sortedDesc } = this.state;
    console.log(launches);
    if (isLoading) return <h2>Loading all the launches in 3....2...1......</h2>;
    return (
      <main>
        <h2>Launch Information</h2>
        <button onClick={this.sortLaunches} name={"launch_date_utc"}>
          Sort by launch date
        </button>
        <button onClick={this.sortLaunches} name={"mission_name"}>
          Sort by mission name
        </button>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Search by Launch Year:
            <input
              type="text"
              onChange={this.handleChange}
              name={"launch_year"}
            />
          </label>
          <button>Search</button>
        </form>
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

  sortLaunches = (event) => {
    const { sortedDesc } = this.state;
    const { name } = event.target;
    let order = "asc";
    if (!sortedDesc) order = "desc";
    const params = { sort: name, order };

    api.getAllLaunches(params).then((launches) => {
      this.setState((currentState) => {
        return { launches, sortedDesc: !currentState.sortedDesc };
      });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { launch_year } = this.state;
    console.log(launch_year);

    const params = { launch_year };
    api.getAllLaunches(params).then((launches) => {
      this.setState({ launches });
    });
  };
}
