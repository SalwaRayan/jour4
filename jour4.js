// 01 - Object

var cat = {
  name: "Garfield",
  age: 3,
  isCute: true
}

console.log(cat)
console.log(cat.age)
console.log(cat["age"])

if(cat.isCute = true){
  console.log("So cute!")
}

console.log("")

// 02 - Combine

var cat2 = {
  color: "black",
  eye: "yellow"
}

var cats = {}

Object.assign(cats, cat, cat2)
console.log(cats)

console.log("")

// 03 - Even

function checkIfEven(num) {
  if (num % 2 === 0){
    console.log("Even")
  } else {
    console.log("Odd")
  }
} 

checkIfEven(3)
checkIfEven(6)

console.log("")

// 04 - Compare

function compare(num1, num2){
  if (num1 > num2){
    console.log(`${num1} is bigger`)
  } else if (num2 > num1) {
    console.log(`${num2} is bigger`)
  } else {
    console.log("Both are the same")
  }
}

compare(2, 6)
compare(5, 9)
compare(1, 1)

console.log("")

// 05 - Add Up

function addUp(num) {
  var result = 0
  for (var i = 0; i <= num; i++){
    result = result + i
  }
  console.log(result)
}

addUp(12)

console.log("")

// 06 - Time

function format(num) {
  if (num >= 60){
    var seconds = num % 60
    var minutes = num / 60
    minutes = Math.floor(minutes)
  } 
  if (minutes >= 60){
    var hours = minutes / 60
    hours = Math.floor(hours)
    minutes = minutes % 60
    console.log(`${hours}:${minutes}:${seconds}`)
  } else {
  console.log(`${minutes}:${seconds}`)
  } 
}

format(3700)

console.log("")

// Bonus

function generatePassword(num) {
  var randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var password = ""
  for(var i = 0; i < num; i++) {
    password = password + randomChar.charAt(Math.floor(Math.random() * randomChar.length))
  }
  if (password.length < 6) {
    console.log("error")
  } else if (password.length > 15) {
    console.log("error")
  } else {
    console.log(password)
  }
}

generatePassword(9)

console.log("")

// Bonus II

function launchDice(numberOfDice) {
  
}