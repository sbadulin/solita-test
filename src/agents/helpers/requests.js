import superagent from "superagent";

const API_ROOT = "http://localhost:8484/api";

const handleErrors = error => {
  if (error && error.response && error.response.status === 401) {
    debugger; // eslint-disable-line
  }
  return error;
};

const responseBody = res => res.body || res.text;

export default {
  get: (url, query) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .query(query)
      .on("error", handleErrors)
      .then(responseBody)
};
