import getData from './getData';
import renderGoods from './renderGoods';
import { saleFilter } from './filters';

const sales = () => {
  const sales = document.querySelector('.filter-check');
  console.log('sales: ', sales);
  const salesCheckbox = document.querySelector('#discount-checkbox');
  console.log('salesCheckbox: ', salesCheckbox);
  const salesCheckboxMark = document.querySelector('.filter-check_checkmark');

  sales.addEventListener('change', (e) => {
    console.log(e.target.checked);
    console.log('salesCheckbox: ', salesCheckbox);

    if (e.target.checked) {
      salesCheckboxMark.classList.add('checked');
      getData().then((data) => {
        renderGoods(saleFilter(data));
      });
    } else {
      salesCheckboxMark.classList.remove('checked');
      getData().then((data) => {
        renderGoods(data);
      });
    }
  });
};

export default sales;
