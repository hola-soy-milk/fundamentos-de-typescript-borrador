import axios from "axios";
import Post from "../types/Post";

export async function getRequest<T>(resourceURL: string) {
  const res = await axios.get(`http://localhost:6060/${resourceURL}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postRequest<T>(data: T, resourceURL: string) {
  await axios.post(`http://localhost:6060/${resourceURL}`, data);
}
