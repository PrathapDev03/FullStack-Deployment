import axios from "axios";

const API = axios.create({
  baseURL: "http://ac282588713a24d6e934ff5b5bffef02-1266472394.ap-southeast-1.elb.amazonaws.com"
});

API.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem("token");

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;

  }
);

export default API;