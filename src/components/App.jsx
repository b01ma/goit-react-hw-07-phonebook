import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import wrapper from './App.css';
import { getContacts, getContactById } from 'contactsAPI/contactAPI';

export const App = () => {
  getContacts().then(r => console.log(r.data));
  getContactById('1').then(r => console.log(r.data));
  return (
    <div style={wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};
