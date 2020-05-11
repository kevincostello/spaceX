import axios from "axios";

const request = axios.create({
  baseURL: "https://api.spacexdata.com/v3/",
});

export const getLatestLaunch = () => {
  return request.get("/launches/latest").then(({ data }) => {
    console.dir(data);
    return data.flight_number;
  });
};

export const getRandomLaunch = (flight_number) => {
  return request.get(`/launches/${flight_number}`).then((data) => {
    console.dir(data);
  });
  // .catch((err) => {
  //   console.log(err);
  // });
};
