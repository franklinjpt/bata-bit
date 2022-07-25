const blackRigthArrow = document.querySelector('#black-rigth-arrow');
const blackLeftArrow = document.querySelector('#black-left-arrow');

const plansContainer = document.querySelector('.plans-container__slider')
const tableContainer = document.querySelector('.main-exchange-container__table');
const table1 = document.querySelector('#table1').clientWidth;
const plan = document.querySelector('.plans-container__card').clientWidth;
const size = table1;
const positionPlan = plan;

plansContainer.scrollLeft = positionPlan;

blackRigthArrow.addEventListener('click', function() {
  tableContainer.scrollLeft += size+table1;
})
blackLeftArrow.addEventListener('click', function() {
  tableContainer.scrollLeft -= size+table1;
})