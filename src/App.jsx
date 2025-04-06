import React from 'react'
import { useEffect, useState } from "react";
import s from "./App.module.css"
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { nanoid } from 'nanoid';
  
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(`contacts`);
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  });
    
const [filter, setFilter] = useState("");

const filteredContacts = contacts.filter((contacts) => 
  contacts.name.toLocaleLowerCase().includes(filter.toLowerCase())
);

useEffect(() => {
  if (contacts.length > 0) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } else {
    localStorage.removeItem('contacts');
  }
}, [contacts]);

const deleteContact = (contactId) => {
  const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
  setContacts(updatedContacts);
};

const addContact = (newContact) => {
  const contactWithId = { ...newContact, id: nanoid() };
  setContacts((prevContacts) => [...prevContacts, contactWithId]);
};

  return (
    <div className={s.box}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onChange={setFilter}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
