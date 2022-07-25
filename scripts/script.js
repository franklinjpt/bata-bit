const blackRigthArrow = document.querySelector('#black-rigth-arrow');
const blackLeftArrow = document.querySelector('#black-left-arrow');

const tableContainer = document.querySelector('.main-exchange-container__table');
const tables = document.querySelectorAll('.table-container');
const table1 = document.querySelector('#table1').clientWidth;
const size = tables[0].clientWidth;
console.log(size);

// tableContainer.scrollLeft = size;

blackRigthArrow.addEventListener('click', function() {
  tableContainer.scrollLeft += size+table1;
})
blackLeftArrow.addEventListener('click', function() {
  tableContainer.scrollLeft -= size+table1;
})