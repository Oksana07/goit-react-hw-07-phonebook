import Contact from '../Contact';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts } from '../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <li className={s.item} key={id}>
          <Contact name={name} number={phone} />
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
