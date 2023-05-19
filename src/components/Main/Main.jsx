import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';

class Main extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    // Tworzenie nowego kontaktu
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    // Dodawanie nowego kontaktu do listy
    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    // Filtruj kontakty na podstawie wartości pola wyszukiwania
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Contact App</h1>

        <ContactList onAddContact={this.handleAddContact} />

        <div>
          <h3>Contacts</h3>
          <input
            type="text"
            placeholder="Search contacts..."
            value={filter}
            onChange={this.handleFilterChange}
          />
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name} - {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
