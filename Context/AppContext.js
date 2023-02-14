import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.REGISTER);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
