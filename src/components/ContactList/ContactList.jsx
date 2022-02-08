import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import actions from '../../redux/contacts/contacts-actions.js';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors.js';
import s from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const contactsList = visibleContacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      <div>
        <span className={s.item_text}>
          {name}: {number}
        </span>
        <button
          className={s.item_button}
          id={id}
          type="button"
          onClick={() => dispatch(actions.contactsDelete(id))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul className={s.list}>{contactsList}</ul>;
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
