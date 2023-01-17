import React from "react";
import { APP_PAGES } from "./settings";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);

  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBaatm0aQmB6vb1-hayXeEWbBomnmtkp7U",
      authDomain: "chat-app-f916a.firebaseapp.com",
      databaseURL: "https://chat-app-f916a-default-rtdb.firebaseio.com",
      projectId: "chat-app-f916a",
      storageBucket: "chat-app-f916a.appspot.com",
      messagingSenderId: "118007497214",
      appId: "1:118007497214:web:cd9acb622be29469aec0af",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const storeHighScore = (userId, score) => {
      const db = getDatabase();
      const reference = ref(db, "users/" + userId);
      set(reference, {
        highscore: score,
      });
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
