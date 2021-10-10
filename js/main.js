const btn = document.querySelector('button');
const mainBox = document.querySelector('.main');
let count = 0;

// btn.onclick = () => {
//   count++;
//   console.log(`Мы сделали ${count} кликов`);
// };
 
// btn.addEventListener('click', () => {
//   count++;
//   console.log(`Мы сделали ${count} кликов`);
//   mainBox.innerHTML = `
//     <div class="test">
//        ${count}
//     </div>
//   `;
// });

let countYes = 0;
let countNo = 0;

//task1
// const btn2 = document.querySelector('.yes');
// btn2.onclick = () => {
//   countYes++;
//   console.log(`Мы сделали ${countYes} кликов`);
// };

// const btn3 = document.querySelector('.no');
// btn3.onclick = () => {
//   countNo++;
//   console.log(`Мы сделали ${countNo} кликов`);
// };

//task2
const btnYes = document.querySelector('.yes');
const mainBoxYes = document.querySelector('.main1');
btnYes.addEventListener('click', () => {
  countYes++; 
  console.log(`Мы сделали Yes: ${countYes} кликов`);
  mainBoxYes.innerHTML = `
    <div class="test">
       ${countYes}
    </div>
  `;
});

const btnNo = document.querySelector('.no');
const mainBoxNo = document.querySelector('.main2');
btnNo.addEventListener('click', () => {
  countNo++; 
  console.log(`Мы сделали No: ${countNo} кликов`);
  mainBoxNo.innerHTML = `
    <div class="test">
       ${countNo}
    </div>
  `;
});



