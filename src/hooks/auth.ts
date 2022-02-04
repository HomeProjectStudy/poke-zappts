import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  // signOut: () => Promise<void>;
  // updatedUser: (user: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider() {
  return <AuthContext />;
}
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
