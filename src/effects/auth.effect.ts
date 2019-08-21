import * as authService from "./../services/auth.service";
import { AppState } from "./../AppState";
import { swap } from "@dbeining/react-atom";
import { LoginDTO, RegisterDTO } from "../models/auth.model";

export const logout = () => {
  swap(AppState, state => ({
    ...state,
    currentUser: null
  }));
};

export const login = async (loginData: LoginDTO) => {
  const currentUser = await authService.login(loginData);
  swap(AppState, state => ({
    ...state,
    currentUser
  }));
};

export const register = async (registerData: RegisterDTO) => {
  const currentUser = await authService.register(registerData);
  swap(AppState, state => ({
    ...state,
    currentUser
  }));
};
