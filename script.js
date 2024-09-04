var box = document.querySelector('.box');
var numButtons = document.querySelectorAll('.num');
var clearButton = document.querySelector('.clear');
var plusButton = document.querySelector('.plus');
var equalButton = document.querySelector('.equal');
var minusButton = document.querySelector('.minus');
var timesButton = document.querySelector('.times');
var divideButton = document.querySelector('.divide');
var leftNum = 0;
var operator = ''; // 연산자를 저장할 변수

function updateBoxNum(event) {
    var numButtonValue = event.target.textContent;
    box.textContent += numButtonValue; // 기존 내용에 숫자를 추가
}

function boxClear() {
    box.textContent = ''; // 상자 내용 지우기
}

function numAdd() {
    leftNum = parseFloat(box.textContent); // 문자열을 숫자로 변환하여 저장
    operator = '+'; // 연산자 저장
    boxClear(); // 상자 내용 초기화
}
function numMinus() {
    leftNum = parseFloat(box.textContent); // 문자열을 숫자로 변환하여 저장
    operator = '-'; // 연산자 저장
    boxClear(); // 상자 내용 초기화
}
function numTimes() {
    leftNum = parseFloat(box.textContent); // 문자열을 숫자로 변환하여 저장
    operator = 'x'; // 연산자 저장
    boxClear(); // 상자 내용 초기화
}
function numDivide() {
    leftNum = parseFloat(box.textContent); // 문자열을 숫자로 변환하여 저장
    operator = '/'; // 연산자 저장
    boxClear(); // 상자 내용 초기화
}


function printResult() {
    var rightNum = parseFloat(box.textContent); // 두 번째 숫자를 가져와 숫자로 변환
    if (operator == '+') {
        var result = leftNum + rightNum;
        box.textContent = result; 
    }
    else if(operator == '-'){
        var result = leftNum - rightNum;
        box.textContent = result; 
    }else if(operator == 'x'){
        var result = leftNum * rightNum;
        box.textContent = result; 
    }else if(operator == '/'){
        var result = leftNum / rightNum;
        box.textContent = result; 
    }
}

// 숫자 버튼에 클릭 이벤트 추가
numButtons.forEach(function(button) {
    button.addEventListener('click', updateBoxNum);
});

// 연산 및 초기화 버튼에 이벤트 추가
clearButton.addEventListener('click', boxClear);
plusButton.addEventListener('click', numAdd);
minusButton.addEventListener('click', numMinus);
timesButton.addEventListener('click', numTimes);
divideButton.addEventListener('click', numDivide);
equalButton.addEventListener('click', printResult);
