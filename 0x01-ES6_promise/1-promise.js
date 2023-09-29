/* Don't make a promise...if you know you can't keep it */
export default function getFullResponseFromAPI(success) {
  const arr = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return arr;
}
