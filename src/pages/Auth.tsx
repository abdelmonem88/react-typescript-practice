/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";

import { AuthContext } from "../context/authContext";

type Props = {};

const Auth = (props: Props) => {
  const authContext = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Auth</h1>
    </div>
  );
};

export default Auth;
