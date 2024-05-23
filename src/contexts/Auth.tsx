"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AuthContextProps = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [username, setUsername] = useState(String);
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ username, setUsername, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
