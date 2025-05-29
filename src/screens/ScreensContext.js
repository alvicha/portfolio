import { createContext } from 'react';

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {

  return (
    <ScreensContext.Provider value={{
    }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
