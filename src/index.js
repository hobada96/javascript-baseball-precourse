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

const compareNumbers = (computerInputnumbers, userInputNumbers) =>{
    let ball = 0;
    let strike = 0;

    for(let i=0;i<computerInputnumbers.length; i++){
        if(Number(computerInputnumbers[i]) === Number(userInputNumbers[i])){
            strike++;
        }
        else if(computerInputnumbers.includes(Number(userInputNumbers[i]))){
            ball++;
        }
    }
    alert([computerInputnumbers,userInputNumbers])
    alert(strike);
    alert(ball);
    return [strike,ball];
}

const computerInputNumbers = makeComputerInputNumbers(3);
document.getElementById("submit").onclick = ()=>{
    if(document.getElementById("user-input").value.length === 3) {
        let [strike,ball] = compareNumbers(computerInputNumbers,document.getElementById("user-input").value);
        document.getElementById("result").innerHTML = strike + "스트라이크" + ball + "볼";
    }
}
