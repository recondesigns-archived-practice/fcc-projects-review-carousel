import React, { useState } from "react";

export const AppContext = React.createContext();

export default function ContextProvider({ children }) {
  const [currentReview, setCurrentReview] = useState(0);
  return (
    <AppContext.Provider value={[currentReview, setCurrentReview]}>
      {children}
    </AppContext.Provider>
  );
}
