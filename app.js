let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked!");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

let showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

let resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

let disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

let checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
  
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner Caught!", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);