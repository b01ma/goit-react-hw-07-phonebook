import axios from 'axios';

axios.defaults.baseURL = 'https://63012eace71700618a35be19.mockapi.io/contacts';

export const fetchContacts = () => axios.get('/contacts');

export const fetchContactById = contactId =>
  axios.get(`/contacts/${contactId}`);

export const postContact = newContact => axios.post('/contacts', newContact);

export const deleteContactById = contactId =>
  axios.delete(`/contacts/${contactId}`);
