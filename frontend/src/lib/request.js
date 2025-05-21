import axios from "axios";

export const request = async ({ method = "get", url, data, params }) => {
  const response = await axios.request({
    method,
    url: `${import.meta.env.VITE_API_URL}${url}`,
    data,
    params,
  });
  return response.data
};
