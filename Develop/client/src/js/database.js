import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented');

const getOne = await await openDB('jate', 1).
transaction('jate', 'readwrite').
objectStore('jate').
put({ id: 1, value: content })

console.log('🚀 - data saved to the database', getOne);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');

const getAll = await await openDB('jate', 1).
transaction('jate','readonly').
objectStore('jate').
getAll();

console.log('getAll.value', getAll);
return getAll?.value;
};

initdb();
