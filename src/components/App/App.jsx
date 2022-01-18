import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';

export default function App() {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    if (items.find(item => item.name === name)) {
      alert(`Inputed ${name} is already in the contacts`);
      return;
    }

    return dispatch(actions.contactsAdd({ name, number }));
  };

  const handleFilterContacts = e => {
    return dispatch(actions.contactsFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <div className={s.main_container}>
      <div className={s.main_title_container}>
        <h1 className={s.main_title}>Phonebook</h1>
      </div>

      <ContactForm onSubmit={addContact} />

      <h2 className={s.title}>Contacts</h2>
      <Filter onFilterChange={handleFilterContacts} />
      <ContactList items={visibleContacts} />
    </div>
  );
}
