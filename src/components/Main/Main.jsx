// Main.jsx

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';

class Main extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Contact App</h1>

        <ContactList onAddContact={this.handleAddContact} />

        <ul>
          Contacts
          {contacts.map(contact => (
            <li key={contact.id}>
              Name: {contact.name}, Number: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
