// import axios from 'axios';
// import { toast } from 'react-toastify';

// import actions from './contacts-actions'; // Импорт экшенов из контактов в операции

// axios.defaults.baseURL = 'https://6190edc741928b001768fedf.mockapi.io';
// // Асинхронная операция получения списка контактов (делает запрос, диспатчит экшн получения)
// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(actions.fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error.message));
//     toast.error(error.message);
//   }
// };

// // Асинхронная операция по добавлению контакта (принимает данные с формы, делает запрос, диспатчит экшн добавления)
// export const addContact = (name, number) => async dispatch => {
//   const contact = { name, number };

//   dispatch(actions.addContactRequest());

//   try {
//     const { data } = await axios.post('/contacts', contact);

//     toast.success('Added');
//     dispatch(actions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.addContactError(error.message));
//     toast.error(error.message);
//   }
// };

// // Асинхронная операция удаления контакта (принимает id, делает запрос, диспатчит экшн удаления)
// export const deleteContact = id => async dispatch => {
//   dispatch(actions.deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);

//     toast.success('Deleted');
//     dispatch(actions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error.message));
//     toast.error(error.message);
//   }
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6190edc741928b001768fedf.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);

      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
