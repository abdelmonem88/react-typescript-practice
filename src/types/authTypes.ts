type AuthContextType = {
  authState: AuthStateType;
  login: (userName: string, password: string) => void;
  logout: () => void;
};

type AuthStateType = {
  isAuthenticated: boolean;
  user: {
    userName: string;
    password: string;
  } | null;
};

type AuthProviderPropsType = {
  children: React.ReactNode;
};

export type { AuthContextType, AuthStateType, AuthProviderPropsType };
