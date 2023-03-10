import React from "react";
import { StatusBar } from "expo-status-bar";
import AppProvider, { AppContext } from "./Context/AppContext";
import { APP_PAGES } from "./Context/settings";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="#00a76b"
        hidden={false}
        translucent={true}
      />

      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}
      {navPage === APP_PAGES.APP.REGISTER && <RegisterScreen />}
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
    </>
  );
};

export default App;
