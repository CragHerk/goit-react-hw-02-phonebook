import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDeleteContact = contactId => {
    onDeleteContact(contactId);
    toast.success('Kontakt został usunięty.');
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.list}>
          {contact.name} - {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
