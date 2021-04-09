import axiosClient from "./axiosClient";

const goodApi = {
  getAll: (params) => {
    const url = "/goods";
    return axiosClient.get(url, { params });
  },
};

export default goodApi;
