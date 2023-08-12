import { useState } from 'react';
import {
  ContactButton,
  ContactDiv,
  ContactLabel,
  ContactUiForm,
} from './contactForm.styled';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';

export default function ContactForm({ updateState }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleForm = event => {
    event.preventDefault();
    updateState(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Section title="Phonebook">
      <ContactUiForm type="submit" onSubmit={handleForm}>
        <ContactDiv>
          <ContactLabel htmlFor="name">Name</ContactLabel>
          <input
            className="input-field"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </ContactDiv>

        <ContactDiv>
          <ContactLabel htmlFor="number">Tel</ContactLabel>
          <input
            className="input-field"
            type="tel"
            name="number"
            pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </ContactDiv>

        <ContactButton type="submit">add contact</ContactButton>
      </ContactUiForm>
    </Section>
  );
}

ContactForm.propTypes = {
  updateState: PropTypes.func.isRequired,
};
