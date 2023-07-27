import { ReactNode, createContext } from "react";

type LoginUserContextType = {
  id: number;
  displayName: string;
};

export const LoginUserContext = createContext<LoginUserContextType>({});

export const UserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <LoginUserContext.Provider value={{}}>{children}</LoginUserContext.Provider>
  );
};
