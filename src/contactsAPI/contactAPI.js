import axios from 'axios';

axios.defaults.baseURL = 'https://63012eace71700618a35be19.mockapi.io/contacts';

export const getContacts = () => axios.get('/contacts');

export const getContactById = contactId => axios.get(`/contacts/${contactId}`);
