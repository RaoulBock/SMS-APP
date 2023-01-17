import React from "react";
import { APP_PAGES } from "./settings";
import * as Contacts from "expo-contacts";
import { getDatabase, ref, onValue, set } from "firebase/database";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    const getContacts = async () => {
      // Ask for permission to access contacts
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        // Get all contacts
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });

        // Parse the JSON data
        const parsedContacts = data.map((contact) => {
          return {
            name: contact.name,
            phoneNumber: contact.phoneNumbers[0].number,
          };
        });

        setContacts(parsedContacts);
      } else {
        throw new Error("Contacts permission not granted");
      }
    };
    getContacts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        contacts,
        setContacts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
