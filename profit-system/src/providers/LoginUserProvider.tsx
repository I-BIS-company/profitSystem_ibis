import { ReactNode, createContext, useState } from "react";

type LoginUserContextType = {
  id: string | null;
  name: string | null;
};

export const LoginUserContext = createContext<LoginUserContextType | null>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserContextType | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
