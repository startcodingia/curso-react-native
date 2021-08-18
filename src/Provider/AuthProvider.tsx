import React from 'react';

interface IAuth {
  isLogged?: boolean;
  handleLogin?: () => void;
}

export const Auth = React.createContext<IAuth>({});

export default function AuthProvider({children}: any) {
  const [isLogged, setIsLogged] = React.useState<boolean>(true);

  const handleLogin = () => {
    setIsLogged(prevState => !prevState);
  };

  return (
    <Auth.Provider value={{isLogged, handleLogin}}>{children}</Auth.Provider>
  );
}
