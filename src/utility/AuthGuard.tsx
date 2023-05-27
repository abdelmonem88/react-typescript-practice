import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const AuthGuard = (props: any) => {
  const authContext = useContext(AuthContext);

  if (authContext?.authState.isAuthenticated === false) {
    return <Navigate to="/auth" />;
  }

  return props.children;
};

export default AuthGuard;
