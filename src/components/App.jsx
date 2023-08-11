import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import Section from './Section/Section';
import { nanoid } from 'nanoid';

const { Component } = require('react');

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // update contacts
  updateState = (name, number) => {
    const id = nanoid();
    const checkedUser = this.checkUser(name);

    if (!checkedUser) {
      this.setState({
        contacts: [...this.state.contacts, { id, name, number }],
      });
      return;
    }
  };

  // check user name
  checkUser = name => {
    const checkContacts = this.state.contacts.find(el => el.name === name);

    if (checkContacts) {
      alert(`${name} is already in contacts`);
      return name;
    }
  };

  // handle filter input
  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  // remove contact
  removeContact = id => {
    const newContacts = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <>
        <ContactForm updateState={this.updateState} />

        <Section title="Contacts">
          <FilterContacts
            title="FInd contacts by name"
            state={this.state}
            handleFilter={this.handleFilter}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
