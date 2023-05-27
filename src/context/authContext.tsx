import { createContext, useReducer } from "react";

import { authReducer } from "../reducers";
import {
  AuthContextType,
  AuthStateType,
  AuthProviderPropsType,
} from "../types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderPropsType) => {
  const initialState: AuthStateType = { isAuthenticated: false, user: null };

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (userName: string, password: string) => {
    if (userName === "admin" && password === "admin") {
      dispatch({ type: "LOGIN", payload: { userName, password } });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
