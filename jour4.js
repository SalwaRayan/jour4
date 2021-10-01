// 01 - Object

var cat = {
  name: "Garfield",
  age: 3,
  isCute: true
}

console.log(cat)
console.log(cat.age)
console.log(cat["age"])

if(cat.isCute){ // = true // si puo anche non mettere perche è un boolean, la condizione va mettere true come default
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
    console.log(`${num1} is bigger than ${num2}`)
  } else if (num1 < num2) {
    console.log(`${num2} is bigger than ${num1}`)
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
  // console.log(result)
  return result
}

var sum = addUp(12)
console.log(sum)

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
    password += randomChar.charAt(Math.floor(Math.random() * randomChar.length))
  }
  if (password.length < 6 || password.length > 15) {
    console.log("error")
  } else {
    console.log(password)
  }
}

generatePassword(4)

console.log("")

// Bonus II

function launchDice(numberOfDice) {
  var somme = 0

  for (var i = 0; i < numberOfDice; i++){
    var dice = Math.floor(Math.random()*(6 - 1 + 1) + 1)
    // console.log(dice)
    somme = somme + dice
  }
  // console.log(somme);
  return somme
}

var joueur1 = launchDice(15)
var joueur2 = launchDice(15)

console.log(joueur1, joueur2)

if (joueur1 > joueur2) {
  console.log(`J1 is the winner, with a score of ${joueur1}`)
} else if (joueur1 < joueur2) {
  console.log(`J2 is the winner, with a score of ${joueur2}`)
} else {
  console.log(`It's a draw!!!`)
}