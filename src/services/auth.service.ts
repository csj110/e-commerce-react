import axios from "axios";
import { LoginDTO, RegisterDTO } from "../models/auth.model";
import { API_HOST } from "../environment";

export const login = async (loginData: LoginDTO) => {
  try {
    const { data } = await axios.post(`${API_HOST}/auth/login`, loginData);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (registerData: RegisterDTO) => {
  try {
    const { data } = await axios.post(
      `${API_HOST}/auth/register`,
      registerData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
