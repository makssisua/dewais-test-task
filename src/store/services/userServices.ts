import axios, { AxiosResponse } from "axios";

const API_URL = 'https://api.github.com/users/';

// Get user
const getUser = async (username: string): Promise<User> => {
  const response: AxiosResponse<User> = await axios.get(API_URL + username);
  return response.data
};


const userServices = {
  getUser
}

export default userServices