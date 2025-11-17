const postData = () => {
  return fetch('https://next-firebase-glo-2025-default-rtdb.firebaseio.com/goods.json', {
    method: 'POST',
    body: JSON.stringify({
      id: 24,
      title: 'Игра ДЕНИС (PS4 Sony)',
      price: 23322332,
      sale: true,
      img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
      category: 'Игры и софт',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    return response.json();
  });
};

export default postData;
