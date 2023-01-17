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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredContacts, setFilteredContacts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

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

  React.useEffect(() => {
    const filteredData = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredContacts(filteredData);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        contacts,
        setContacts,
        searchTerm,
        setSearchTerm,
        filteredContacts,
        setFilteredContacts,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
