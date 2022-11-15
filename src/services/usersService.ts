import type { User } from "../models/user";
import axios from "../plugins/axios";

const fetch = async (searchParam = ""): Promise<User[]> => {
  const searchUrl = searchParam ? `/?name_like=${searchParam}` : "/";
  const { data } = await axios.get<User[]>(searchUrl);
  return data;
};
export default {
  fetch,
};
