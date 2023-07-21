import { createContext, useContext } from "react";

const initialUserData = {
  name: '',
  email: '',
};

const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children, ...props }) => {
  return <CurrentUserContext.Provider value={props.context}>{children}</CurrentUserContext.Provider>;
};

export function useCurrentUserContext() {
  const context = useContext(CurrentUserContext);
  return context;
}