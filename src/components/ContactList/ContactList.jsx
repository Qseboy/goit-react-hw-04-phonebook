import Contact from 'components/Contact/Contact';
import { ContactListUl } from './contactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, removeContact }) {
  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactListUl>
        {filterContacts.map(el => (
          <Contact
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
            removeContact={removeContact}
          />
        ))}
      </ContactListUl>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
