export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return userInputNumbers;
    };
}
const makeRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const makeComputerInputNumbers = (repeat) => {
  const computerInputNumbers = [];
    while(computerInputNumbers.length != 3) {
      const randomNum = makeRandomNumber(1,10);
      !computerInputNumbers.some((number) => number === randomNum) && computerInputNumbers.push(randomNum)
    }
    return computerInputNumbers;
}

// const computerInputNumbers = makeComputerInputNumbers(3);
// const userInputNumbers = document.getElementById(user-input)
document.getElementById("submit").onclick = ()=>{
    if(document.getElementById("user-input").value.length === 3) {
        alert(document.getElementById("user-input").value.length);
    }
}
