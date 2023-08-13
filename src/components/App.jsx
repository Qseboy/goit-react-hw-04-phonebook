import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import Section from './Section/Section';
import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts'))
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const updateState = (name, number) => {
    const id = nanoid();
    const isContact = isContactAlready(name);

    if (!isContact) {
      setContacts([...contacts, { id, name, number }]);
    }
  };

  const isContactAlready = name => {
    const checkContacts = contacts.find(el => el.name === name);

    if (checkContacts) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  const removeContact = id => {
    const updatedContacts = contacts.filter(el => el.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <>
      <ContactForm updateState={updateState} />
      <Section title="Contacts">
        <FilterContacts
          title="FInd contacts by name"
          filter={filter}
          setFilter={setFilter}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          removeContact={removeContact}
        />
      </Section>
    </>
  );
}
