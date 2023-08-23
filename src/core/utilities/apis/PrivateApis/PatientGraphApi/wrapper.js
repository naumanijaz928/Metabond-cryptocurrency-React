import axios from "../../AxiosInterceptor";
import { message } from "antd";

const get = (url, model = null) => {
  return axios
    .get(url, { params: model })
    .then(handleResponse)
    .catch(handleError);
};

function handleResponse(response) {
  if (response.results) {
    return { response: response.results, status: response.status };
  }
  if (response.data) {
    return { response: response.data, status: response.status };
  }
  return response;
}

function handleError(error) {
  if (error?.data?.meta?.message) {
    message.error(error?.data?.meta?.message);
  }
  return error;
}

export const wrapper = { get };
