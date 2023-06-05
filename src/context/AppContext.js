import React from 'react';
import { useInitialState } from '../hooks/useInitialState';

const AppContext = React.createContext();

function AppProvider ({ children }){
  const initialState = useInitialState();

  const app = {initialState};
  return (
    <AppContext.Provider value={app}>
      {children}
    </AppContext.Provider>
  );
}

export {AppProvider};