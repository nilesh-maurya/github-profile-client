import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://github-profile-api.now.sh`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getUser(username) {
    return apiClient.get(`/api/${username}`);
  },
  getRepos(username, after) {
    return apiClient.get(`/api/${username}/repos?after=${after}`);
  }
};
