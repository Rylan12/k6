import http from 'k6/http';

export default function () {
  const response = http.get("https://testapi.k6.io/");
};
