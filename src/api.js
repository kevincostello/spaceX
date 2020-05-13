import axios from "axios";

const request = axios.create({
  baseURL: "https://api.spacexdata.com/v3/",
});

export const getLatestLaunch = () => {
  return request.get("/launches/latest").then(({ data }) => {
    const random_flight_number = Math.ceil(Math.random() * data.flight_number);

    return random_flight_number;
  });
};

export const getRandomLaunch = (flight_number) => {
  return request.get(`/launches/${flight_number}`).then(({ data }) => {
    return data;
  });
};

export const getAllLaunches = (params) => {
  console.log(params);

  return request.get(`/launches`, { params }).then(({ data }) => {
    console.dir(data);
    return data;
  });
};

export const getAllMissions = (params) => {
  console.log(params);

  return request.get(`/missions`, { params }).then(({ data }) => {
    console.dir(data);
    return data;
  });
};
