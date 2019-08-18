let body = document.body;
let pc = document.querySelector('.pc');
let stone = document.querySelector('.stone');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let img = pc.querySelector('img');
let result = document.querySelector('.result');
let counterWin = document.querySelector('.counterWin');
let counterLose = document.querySelector('.counterLose');
let start = document.querySelector('.start');
let num = null;
let pcNum = null;
let countWin = null;
let countLose = null;
let resetTime = 2000;

start.addEventListener('click', () => {
    pc.style.backgroundColor ="blue";
    img.src = 'img/information.svg';
    countWin = 0;
    countLose = 0;
    counterWin.innerHTML = countWin;
    counterLose.innerHTML = countLose;
});

stone.addEventListener('click', () => {
    num = 1;
    addPcChoice();
    stone.style.backgroundColor ="blue";
    checWinner();
    setTimeout(reset, resetTime);
});

paper.addEventListener('click', () => {
    num = 2;
    addPcChoice();
    paper.style.backgroundColor ="blue";
    checWinner();
    setTimeout(reset, resetTime);
});

scissors.addEventListener('click', () => {
    num = 3;
    addPcChoice();
    scissors.style.backgroundColor ="blue";
    checWinner();
    setTimeout(reset, resetTime);
});

let randomInteger = () => {
    let rand = 1 + Math.random()*2;
    return Math.round(rand);
};

let addPcChoice = () => {
    switch (randomInteger()) {
        case 1:
          pcNum  = 1;
          img.src = "img/stone.svg";
          break;
        case 2:
          pcNum = 2;
          img.src = "img/paper.svg";
          break;
        case 3:
          pcNum = 3;
          img.src = "img/scissors.svg";
          break;
      };
      pc.style.backgroundColor ="yellow";
};

let checWinner = () => {
    console.log(pcNum);
    console.log(num);
    if (pcNum === num) {
        addResult('Draw');
    } else if ( (pcNum === 1 && num === 2) || (pcNum === 2 && num === 3) || (pcNum === 3 && num === 1) ) {
        countWin++;
        counterWin.innerHTML = countWin;
        addResult('You Win');
    } else {
        countLose++;
        counterLose.innerHTML = countLose;
        addResult('You Lose');
    };
};

let addResult = (text) => {
    result.style.display = 'block';
    result.innerHTML = text;
};

let reset = () => {
    paper.style.backgroundColor ="yellow";
    stone.style.backgroundColor ="yellow";
    scissors.style.backgroundColor ="yellow";
    result.innerHTML = 'Make your choice';
};

