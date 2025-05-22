import axios from "axios";

export const request = async ({ method = "get", url, data, params }) => {
  const response = await axios.request({
    method,
    url: `https://plant-management-backend-fswh.onrender.com${url}`,
    data,
    params,
  });
  return response.data
};