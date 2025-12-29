import {openDB} from 'idb';

const DB_NAME = 'key-db';
const STORE_NAME = 'keys';

export const getKeyDB = () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });

export const savePrivateKey = async (key: CryptoKey) => {
  const db = await getKeyDB();
  await db.put(STORE_NAME, key, 'privateKey');
};

export const loadPrivateKey = async (): Promise<CryptoKey | null> => {
  const db = await getKeyDB();
  return (await db.get(STORE_NAME, 'privateKey')) ?? null;
};
