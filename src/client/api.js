const get = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const post = async (url, body) => {
  try {
    const res = await fetch(url, { method: "POST", body });
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const api = {
  get: (url) => get(url),
  post: (url, body) => post(url, body),
};
export default api;
