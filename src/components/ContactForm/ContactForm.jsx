import { Component } from 'react';
import {
  ContactButton,
  ContactDiv,
  ContactLabel,
  ContactUiForm,
} from './contactForm.styled';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
// import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  // handle inputs
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleForm = event => {
    event.preventDefault();
    this.props.updateState(this.state.name, this.state.number);
    this.resetForm();
  };

  // reset form
  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Section title="Phonebook">
        <ContactUiForm type="submit" onSubmit={event => this.handleForm(event)}>
          <ContactDiv>
            <ContactLabel htmlFor="name">Name</ContactLabel>
            <input
              className="input-field"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={event => this.handleChange(event)}
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
              value={this.state.number}
              onChange={event => this.handleChange(event)}
              required
            />
          </ContactDiv>

          <ContactButton type="submit">add contact</ContactButton>
        </ContactUiForm>
      </Section>
    );
  }
}

ContactForm.propTypes = {
  updateState: PropTypes.func.isRequired,
};
