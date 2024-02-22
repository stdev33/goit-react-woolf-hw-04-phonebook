import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
