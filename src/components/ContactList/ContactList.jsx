// ContactList.jsx

import React, { Component } from 'react';

class ContactList extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;

    // Sprawdzenie, czy nazwa kontaktu lub numer nie są puste
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    // Wywołanie funkcji przekazanej przez props onAddContact, aby dodać nowy kontakt
    onAddContact(name.trim(), number.trim());

    // Resetowanie wartości pól po dodaniu kontaktu
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </label>

        <label>
          Number:
          <input
            type="number"
            name="number"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactList;
