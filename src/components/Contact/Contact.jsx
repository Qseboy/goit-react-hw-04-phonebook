import { ContactButton, ContactLi } from './contact.styled';
import PropTypes from 'prop-types';

export default function Contact({ name, number, id, removeContact }) {
  return (
    <>
      <ContactLi>
        {name}: {number}
        <ContactButton type="button" onClick={() => removeContact(id)}>
          remove
        </ContactButton>
      </ContactLi>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
