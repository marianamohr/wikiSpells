import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});
const getPersonagens = async (rota) => {
  const users = await api.get("/personagens");
  return users;
};

export default api;
