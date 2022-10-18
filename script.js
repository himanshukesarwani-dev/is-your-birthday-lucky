const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const submitBtn = document.querySelector('#submit-btn');
const outputBox = document.querySelector('#output-box');

// function to show the message
function showMessage(msg) {
    outputBox.innerText = msg;
}

//calculating the sum of the birth date.
function calculateSum(dob) {

    let sum = 0;
    dob = dob.replaceAll('-', '')
    for (let i = 0; i < dob.length; i++) {
        sum += Number(dob[i]);
    }
    return sum;
}

// checking whether dob is lucky or not
function checkLuckyOrNot(sum, luckyNumber) {

    (sum % luckyNumber === 0) ? showMessage("Your Birthday is Lucky!🥳🥳🥳"): showMessage("Your Birthday is not so Lucky! 😢")
}


function isYourBirthdayLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    (sum && dob) ? checkLuckyOrNot(sum, luckyNumber.value): showMessage("Enter Input First! 😑")

}




submitBtn.addEventListener("click", isYourBirthdayLucky);