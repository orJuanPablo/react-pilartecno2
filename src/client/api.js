const execute = async (url, config = {}) => {
  try {
    const res = await fetch(url, config);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const get = async (url) => {
  return execute(url);
};
const post = async (url, body) => {
  return execute(url, { method: "POST", body });
};
const put = async (url, body) => {
  return execute(url, { method: "PUT", body });
};
const delet = async (url) => {
  return execute(url, { method: "DELETE" });
};
const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
  put: (url, body) => put(url, body),
  delete: (url) => delet(url),
};
export default api;
