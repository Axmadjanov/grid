const name1 = document.getElementById("name1");
const number1 = document.getElementById("number1");
const money1 = document.getElementById("money1");
const btn = document.getElementById("btn");
const nameid = document.getElementById("nameid");
const number = document.getElementById("number");
const money = document.getElementById("money");
// sjkasjdksd
const click = document.getElementById("click");
const h1 = document.getElementById("h1");
const play = document.querySelector(".play");
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser");

function popup() {
  play.classList.remove("hidden");
}

const call = function () {
  name1.innerHTML = nameid.value;
  number1.innerHTML = number.value;
  money1.innerHTML = money.value;
  nameid.value = "";
  number.value = "";
  money.value = "";
};
btn.addEventListener("click", call);
btn.addEventListener("click", popup);

function aka() {
  rdm = Math.floor(Math.random() * 11);
  h1.innerHTML = rdm;
}
click.addEventListener("click", aka);
click.addEventListener("click", function () {
  if (rdm === 7 || rdm === 5) {
    winner.classList.remove("hidden1");
    loser.classList.add("hidden1");
  }
});

click.addEventListener("click", function () {
  if (rdm !== 7) {
    loser.classList.remove("hidden1");
  }
});

const returna = document.getElementById("returna");

returna.addEventListener("click", function () {
  // if (rdm !== 7 || rdm !== 5) {
  winner.classList.add("hidden1");
  loser.classList.add("hidden1");

  // play.classList.add("hidden");
  // }
});
returna.addEventListener("click", function () {
  h1.innerHTML = 0;
});

click.addEventListener("click", function () {
  if (rdm === 7 || rdm === 5) {
    const add = function (a, b) {
      money1.innerHTML = a + b;
    };
    add(Number(money1.innerHTML), Number(10));
  }
});

click.addEventListener("click", function () {
  if (rdm !== 7 || rd !== 5) {
    const add = function (a, b) {
      money1.innerHTML = a - b;
    };
    add(money1.innerHTML, "5");
  }
});

// let length
// const getName=()=>

// function take(){
//   if(aka===7){
// money1.innerHTML=money.value+10;
//   }
//   else{
// money1.innerHTML=money.value-5

//   }
// }

// click.addEventListener("click", take);

// console.log(random);
// click.addEventListener("click", function () {
// h1.innerHTML = random;
// });
