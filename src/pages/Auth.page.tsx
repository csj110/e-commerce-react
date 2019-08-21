import { AuthComponent } from "../components/Auth.component";
import React from "react";
import { RegisterDTO } from "../models/auth.model";
import { login, register } from "../effects/auth.effect";
import { deref } from "@dbeining/react-atom";
import { AppState } from "../AppState";

export enum AuthType {
  login = "login",
  register = "register"
}
interface Props {
  authType: AuthType;
}
export const AuthPage: React.FC<Props> = ({ authType }) => {
  const handleSubmit = async (e: RegisterDTO) => {
    authType === AuthType.login && (await login(e));
    authType === AuthType.register && (await register(e));
    const { currentUser } = deref(AppState);
    console.log(currentUser);
    console.log("fafa");
  };
  const { currentUser } = deref(AppState);
  return (
    <div>
      {currentUser}
      <AuthComponent
        headerText={authType === AuthType.login ? "Login" : "Registration"}
        showSeller={authType === AuthType.register}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
