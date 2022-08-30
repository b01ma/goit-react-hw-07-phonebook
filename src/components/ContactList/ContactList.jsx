import { Button, Ul, Li } from './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as contactsOperations from '../../redux/contactsOperations';

const ContactList = () => {
  const reduxContacts = useSelector(state => state.contacts.items);
  const reduxFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  function handleDelete(contactId) {
    dispatch(contactsOperations.deleteContactFromBackEnd(contactId));
  }

  function filteredContacts() {
    const filteredContacts = reduxContacts.filter(contact =>
      contact.name.toLowerCase().includes(reduxFilter.toLowerCase())
    );

    return filteredContacts;
  }

  return (
    <Ul>
      {reduxContacts &&
        filteredContacts().map(contact => (
          <Li key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          </Li>
        ))}
    </Ul>
  );
};

export default ContactList;
