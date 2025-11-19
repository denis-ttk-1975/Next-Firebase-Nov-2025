import getData from './getData';
import renderGoods from './renderGoods';
import { categoryFilter } from './filters';

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');

  const catalogSearchItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  btnCatalog.addEventListener('click', () => {
    isOpen = !isOpen;
    if (!isOpen) {
      catalogModal.style.display = '';
    } else {
      catalogModal.style.display = 'block';
      getData().then((data) => {
        renderGoods(data);
      });
    }
  });

  catalogSearchItems.forEach((item) => {
    item.addEventListener('click', () => {
      const category = item.textContent;
      getData().then((data) => {
        renderGoods(categoryFilter(data, category));
      });
      catalogModal.style.display = '';
      isOpen = false;
    });
  });
};

export default catalog;
