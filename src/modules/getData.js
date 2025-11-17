const getData = () => {
  return fetch('https://next-firebase-glo-2025-default-rtdb.firebaseio.com/goods.json').then((response) => {
    return response.json();
  });
};

export default getData;
