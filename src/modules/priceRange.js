import getData from './getData';
import renderGoods from './renderGoods';
import { priceFilter } from './filters';

const priceRange = () => {
  const priceRangeMin = document.querySelector('#min');
  console.log('priceRangeMin: ', priceRangeMin);
  const priceRangeMax = document.querySelector('#max');
  console.log('priceRangeMax: ', priceRangeMax);

  let minPrice = Number(priceRangeMin.value);
  console.log('minPrice: ', minPrice);
  let maxPrice = Number(priceRangeMax.value);
  console.log('maxPrice: ', maxPrice);

  priceRangeMin.addEventListener('input', (e) => {
    minPrice = Number(e.target.value);
    console.log('minPrice: ', minPrice);

    if (maxPrice === 0) {
      getData().then((data) => {
        renderGoods(priceFilter(data, minPrice, Infinity));
      });
    } else {
      getData().then((data) => {
        renderGoods(priceFilter(data, minPrice, maxPrice));
      });
    }
  });

  priceRangeMax.addEventListener('input', (e) => {
    maxPrice = Number(e.target.value);
    console.log('maxPrice: ', maxPrice);

    getData().then((data) => {
      renderGoods(priceFilter(data, minPrice, maxPrice));
    });
  });
};

export default priceRange;
