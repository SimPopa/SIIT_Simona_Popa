
const ageInput = document.getElementById("age");
const femaleInput = document.getElementById("female");
console.log(femaleInput)
const maleInput = document.getElementById("male");
console.log(maleInput)
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const inputs = [ageInput, femaleInput, maleInput, weightInput, heightInput]

const displayResult = document.getElementById("result-container")



function genderInput(){
       
    if (femaleInput.checked == true) {
        return "Female"
    }
    if (maleInput.checked == true) {
        return "Male"
    }
    else return "Please specify gender"
}

let result = document.createElement("span")
let displayHealth = document.createElement("span")
let BMI = "Please insert weight and height"
let healthColor = ""
let healthState = ""

function checkHealth(){
    if (BMI <= 18.5 ) {
        healthColor = "blue"
        healthState = "Underweight"
    }
    else if (BMI > 18.5 && BMI <= 25 ) {
        healthColor = "green"
        healthState = "Normal"
    }
    else if (BMI > 25 && BMI <= 30 ) {
        healthColor = "orange"
        healthState = "Overweight"
    }
    else if (BMI > 30 ) {
        healthColor = "red"
        healthState = "Obese"
    }
}

function calculateBMI(){

    let weight = parseInt(weightInput.value);
    console.log(weight);
    let height = parseInt(heightInput.value)/100;
    console.log(height);

    if (weight >= 0  && height >= 0){
        BMI = parseInt(weight / (height*height));
    }

    checkHealth();
    
    result.innerText = `User is: | ${ageInput.value} years old | ${genderInput()} | BMI:${BMI} | `;
    displayResult.appendChild(result);
    displayHealth.innerText = `${healthState}`;
    displayHealth.style.color = healthColor;
    displayResult.appendChild(displayHealth);
    
}

inputs.forEach(input => input.addEventListener('input', calculateBMI))
