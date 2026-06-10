import axios from "axios";

const API = axios.create({
  baseURL: "http://employee-backend-alb-1864446283.ap-southeast-1.elb.amazonaws.com"
});

export default API;