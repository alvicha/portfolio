import { createContext, useRef, useState } from 'react';

const ScreensContext = createContext();

export const ScreensProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  return (
    <ScreensContext.Provider value={{
      active, setActive, containerRef
    }}>
      {children}
    </ScreensContext.Provider>
  );
};

export default ScreensContext;
