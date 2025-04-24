import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  user: boolean;
  setUser: (value: boolean) => void;
  seller: boolean;
  setSeller: (value: boolean) => void;
  showUserLogin: boolean;
  setShowUserLogin: (value: boolean) => void;
}

// Create context with initial empty object that matches our type
export const AppContext = createContext<AppContextType>({} as AppContextType);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<boolean>(false);
  const [seller, setSeller] = useState<boolean>(false);
  const [showUserLogin, setShowUserLogin] = useState<boolean>(false);

  const value: AppContextType = {
    user,
    setUser,
    seller,
    setSeller,
    showUserLogin,
    setShowUserLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook with proper TypeScript typing
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
