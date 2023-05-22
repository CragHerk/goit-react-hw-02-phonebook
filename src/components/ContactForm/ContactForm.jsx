// ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.name.trim() === '' || formData.number.trim() === '') {
      return;
    }
    onAddContact(formData.name.trim(), formData.number.trim());
    setFormData({ name: '', number: '' });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.form__label}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label className={styles.form__label}>
        <p>Number</p>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit" className={styles.form__button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
