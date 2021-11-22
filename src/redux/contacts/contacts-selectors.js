import { createSelector } from '@reduxjs/toolkit'; // Импорт функции для мемоизации селектора

export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.filter;

// Мемоизация функции фильтра контактов на базе композитного селектора
export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// export const getContacts = state => state.phoneBook.contactItems;
// export const getFilter = state => state.filter;
// export const getFiltredContacts = state => {
//   const lowerCasedFilter = getFilter(state).toLowerCase();
//   const filteredContacts = getContacts(state).filter(({ name }) =>
//     name.toLowerCase().includes(lowerCasedFilter),
//   );
//   return filteredContacts;
// };
