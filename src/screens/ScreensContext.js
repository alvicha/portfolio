import { createContext, useState } from 'react';

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <ScreensContext.Provider value={{
      active, setActive
    }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
