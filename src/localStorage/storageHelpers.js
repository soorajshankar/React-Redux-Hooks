export /**
 *
 *
 * @param {string} key storage reference key
 * @param {Object || string} value data to be stored
 */
const storeItem = (key, value) => {
  const existingUsers = getStoredItem(key);
  window.localStorage.setItem(
    key,
    JSON.stringify({ ...existingUsers, ...value })
  );
};
export /**
 *
 *
 * @param {string} key key for data retrieval
 */
const getStoredItem = key => JSON.parse(window.localStorage.getItem(key));
