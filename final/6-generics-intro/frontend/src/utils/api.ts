import axios from "axios";

export async function getRequest<T>(relativeUrl: string): Promise<T[]> {
  const res = await axios.get<T[]>(`http://localhost:6060/${relativeUrl}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postRequest<T>(data: T, relativeUrl: string) {
  await axios.post<T>(`http://localhost:6060/${relativeUrl}`, data);
}
