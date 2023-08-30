// get elements
const dice = document.querySelector("div");
const rollBtn = document.querySelector("button");
const list = document.querySelector("ul");
let rolls = 0;

// variables
const dices = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

// functions
function appendLi(rolls, symbol) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.textContent = `Roll ${rolls}`;
  li.append(span);
  span.innerHTML = symbol;
  return li;
}

function rollDice() {
  const num = Math.floor(Math.random() * 6);
  const diceNum = dices[num];
  rolls++;
  const li = appendLi(rolls, diceNum);
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.innerHTML = diceNum;
    list.append(li);
    dice.classList.remove("roll-animation");
  }, 800);
}

rollBtn.addEventListener("click", rollDice);
