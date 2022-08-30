import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactAPI from '../contactsAPI/contactAPI';

export const getContacts = createAsyncThunk(
  'contacts/itemsStatus',
  async () => {
    const items = await contactAPI.fetchContacts();
    return items.data;
  }
);

export const addContactToBackEnd = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { dispatch }) => {
    await contactAPI.postContact(newContact);
    dispatch(getContacts());
  }
);

export const deleteContactFromBackEnd = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { dispatch }) => {
    await contactAPI.deleteContactById(contactId);
    dispatch(getContacts());
  }
);
