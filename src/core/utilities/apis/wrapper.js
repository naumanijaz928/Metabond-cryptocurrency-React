import axios from "./AxiosInterceptor";
import { message } from "antd";
const get = (url) => {
  return axios.get(url).then(handleResponse).catch(console.log(""));
};

const post = (url, model) => {
  return axios.post(url, model).then(handleResponse).catch(handleError);
};

const put = (url, model) => {
  return axios.put(url, model).then(handleResponse).catch(handleError);
};

const patch = (url, model) => {
  return axios.patch(url, model).then(handleResponse).catch(handleError);
};

const remove = (url, id) => {
  return axios.delete(url, id).then(handleResponse).catch(handleError);
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

export const wrapper = { get, post, put, patch, remove };
