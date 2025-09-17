import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10000,          // 10000 virtual users
  duration: "30s",   // run test for 30 seconds
  thresholds: {
    http_req_duration: ["p(95)<6000"], // 95% of requests should finish < 6s
  },
};

export default function () {
  http.get("http://localhost:5000/api/test/slow");
  sleep(0.01); // minimal wait = higher RPS
}
