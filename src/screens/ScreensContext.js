import { createContext, useState } from 'react';

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <ScreensContext.Provider value={{
      active, setActive, loading, setLoading
    }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
