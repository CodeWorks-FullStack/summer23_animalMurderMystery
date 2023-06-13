// SECTION array and object examples

console.groupCollapsed()

let cats = [
  {
    name: 'Gopher',
    age: 2,
    numberOfLegs: 4,
    hasTail: true,
    favoriteToys: ['mouse']
  },
  {
    name: 'Dudley',
    age: 2,
    numberOfLegs: 4,
    hasTail: false,
    favoriteToys: ['mouse']
  },
  {
    name: 'Ramona',
    age: 12,
    numberOfLegs: 4,
    hasTail: true,
    favoriteToys: ['couch']
  },
  {
    name: 'Iron Man',
    numberOfLegs: 4,
    age: 3,
    hasTail: true,
    favoriteToys: ['shoe lace', 'tube', 'laser pointer']
  },
  {
    name: 'Frankie',
    numberOfLegs: 4,
    age: 5,
    hasTail: true,
    favoriteToys: ['cheese', 'laser pointer']
  },
]

console.log('cats length:', cats.length);

// NOTE regular old for loop
for (let i = 0; i < cats.length; i++) {
  let cat = cats[i]
  console.log('🐈', cat);
}

// NOTE does the same thing that our regular old for loop does
cats.forEach(cat => console.log('🐈 for each!', cat))

// NOTE returns the FIRST item in the array when our conditional evaluates as true 
let foundCat = cats.find(cat => cat.name == 'Dudley')

console.log('🐈 found cat:', foundCat);


// NOTE reutrns a new array and only keeps the items from our old array when our conditional evaluates as true
let filteredCats = cats.filter(cat => cat.age > 4)

console.log('filter', filteredCats);

// NOTE returns a new array with the oldest cats at the beginning of the array
let sortedCats = cats.sort((cat1, cat2) => cat2.age - cat1.age)


// NOTE returns a new array with the youngest cats at the beginning of the array

// let sortedCats = cats.sort((cat1, cat2) => cat2.age - cat1.age)

console.log('sort', sortedCats);


let numbers = [1, 2, 3, 4]

// NOTE returns a new array where all of the numbers have been multiplied by 2 
let changedNumbers = numbers.map(number => number * 2)

console.log('changed', changedNumbers);


let number1 = 3

// NOTE js primitive. Sets number2 to 3, but has no reference to number1 in memory
let number2 = number1

number2 *= 2

console.log('number 1:', number1); // number1 is 3
console.log('number 2:', number2); // number2 is 6

let person = {
  name: 'Jeremy',
  age: 32
}


// NOTE this creates a reference in our code to where person is stored in memory
let otherPerson = person

// NOTE changing properties on otherPerson also updates the original object we are referencing in memory
otherPerson.name = 'SAMMY GOOSE'

// NOTE how we make a an actual copy of person and break reference to the original. Look up spread operator
let uniquePerson = { ...person }

console.log('person', person); // person.name is 'SAMMY GOOSE'
console.log('otherPerson', otherPerson); // otherPerson.name is also 'SAMMY GOOSE'

console.groupEnd()


// NOTE start of application


// SECTION global variables

let animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    mammal: true,
    age: 28,
    weapon: 'intellect',
    diet: ['vegetables', 'fruits', 'bugs'],
    guilty: false
  },
  {
    name: 'Roger',
    emoji: '🦏',
    mammal: true,
    age: 12,
    weapon: 'horns',
    diet: ['vegetables'],
    guilty: false
  },
  {
    name: 'Kenny',
    emoji: '🦘',
    mammal: true,
    age: 8,
    weapon: 'limbs',
    diet: ['vegetables', 'fruits'],
    guilty: false
  },
  {
    name: 'Tanya',
    emoji: '🐅',
    mammal: true,
    age: 77,
    weapon: 'claws',
    diet: ['meats'],
    guilty: false
  },
  {
    name: 'Sid',
    emoji: '🦅',
    mammal: false,
    age: 2,
    weapon: 'claws',
    diet: ['meats', 'fishes'],
    guilty: false
  },
  {
    name: 'Manny',
    emoji: '🐒',
    mammal: true,
    age: 16,
    diet: ['fruits', 'meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'George',
    emoji: '🦍',
    mammal: true,
    age: 12,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Orsen',
    emoji: '🦧',
    mammal: true,
    age: 22,
    diet: ['fruits', 'vegetables', 'meats'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Oslo',
    emoji: '🐃',
    mammal: true,
    age: 33,
    diet: ['vegetables'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Jeff jr.',
    emoji: '🐊',
    mammal: false,
    age: 8,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Jeff sr.',
    emoji: '🐊',
    mammal: false,
    age: 23,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Madam Blackwell',
    emoji: '🐈‍⬛',
    mammal: true,
    age: 10,
    diet: ['fishes', 'vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Tony',
    emoji: '🐄',
    mammal: true,
    age: 11,
    diet: ['fruits', 'vegetables'],
    weapon: 'Horns',
    guilty: false
  },
  {
    name: 'Chomps',
    emoji: '🦖',
    mammal: false,
    age: 100000000000,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Buster',
    emoji: '🦕',
    mammal: false,
    age: 10000320000,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Chuck',
    emoji: '🐓',
    mammal: false,
    age: 10,
    diet: ['vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Sarah',
    emoji: '🦥',
    mammal: true,
    age: 24,
    diet: ['fruits'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Gloria',
    emoji: '🦛',
    mammal: true,
    age: 13,
    diet: ['meats', 'vegetables'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Bob',
    emoji: '🐉',
    mammal: false,
    age: 3000,
    diet: ['meats', 'vegetables', 'fruits'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Malinda',
    emoji: '🦞',
    mammal: false,
    age: 400,
    diet: ['meats'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Reggie',
    emoji: '🐢',
    mammal: false,
    age: 99,
    diet: ['vegetables'],
    weapon: 'intellect',
    guilty: false
  },
  {
    name: 'Jane',
    emoji: '🦫',
    mammal: true,
    age: 32,
    diet: ['vegetables'],
    weapon: 'teeth',
    guilty: false
  },
]


// SECTION functions
function makeAMurderer() {

  // NOTE pulls out a random number between 0 and the length of our array
  let randomNumber = Math.floor(Math.random() * animals.length)
  console.log('random number', randomNumber);

  // NOTE since we have a random number that can only be between our first and last index of the array, we can use that to pull out a random item from our array 
  let randomAnimal = animals[randomNumber]

  // NOTE changing the boolean here also changes the boolean on our animal stored in animals array
  randomAnimal.guilty = true

  console.log('random animal', randomAnimal);
}


function findMurderer() {
  // NOTE does the same thing as the line of code on line 342, is just more redundant
  // let foundAnimal = animals.find(animal => animal.guilty == true)
  let foundAnimal = animals.find(animal => animal.guilty)
  console.log(foundAnimal);

  // NOTE returns out this animal, so that other functions can have access to it
  return foundAnimal
}

function accuseAnimal() {

  // NOTE window prompt allows the user on our website to type into an input field, and we capture whatever they type
  const accusedAnimal = window.prompt("WHO DUNNIT")
  console.log(accusedAnimal);

  // NOTE calls our findMurderer function and saves the returned value
  let murderer = findMurderer()


  if (murderer.emoji == accusedAnimal) {
    window.alert("You found the murderer! He's going to jail! 🚓")
  }
  else {
    window.alert("You didn't find the murderer! ☹️ You're going to jail! 🚓")

    // NOTE calls out getClue function to draw a clue to the screen if we gussed wrong
    getClue()
  }
}

function drawAnimals(animalArrayThatIsPassedDownWhenThisFunctionIsCalled) {

  // NOTE set up an empty string so that we can add to with a forEach loop
  let animalString = ''

  // NOTE loop through whichever array is passed to us and add it to the placeholder string above
  animalArrayThatIsPassedDownWhenThisFunctionIsCalled.forEach(animal => {
    animalString += animal.emoji
  })

  console.log(animalString);

  // NOTE grab our HTML element
  const animalLineupElement = document.getElementById('animalLineup')

  // NOTE inject our string of emojis into our HTML
  animalLineupElement.innerText = animalString
}

function drawAllAnimals() {
  // NOTE passes down our entire array of animals so that we draw everything
  drawAnimals(animals)
}


function filterMammals() {

  // NOTE returns a new array with animals that have the mammal property is set to true
  let mammals = animals.filter(animal => animal.mammal)

  // NOTE don't need this anymore, has been abstracted to the drawAnimals function
  // let animalString = ''
  // mammals.forEach(animal => {
  //   animalString += animal.emoji
  // })
  // console.log(animalString);
  // const animalLineupElement = document.getElementById('animalLineup')
  // animalLineupElement.innerText = animalString
  // console.log('mammals?', mammals)

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(mammals)
}

function filterNonMammals() {

  // NOTE returns a new array with animals that have the mammal property as false
  let nonMammals = animals.filter(animal => !animal.mammal)
  console.log('mammals?', nonMammals)
  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(nonMammals)
}

function filterClaws() {

  // NOTE returns a new array with animals that have the weapon property as 'claws'
  let clawedAnimals = animals.filter(animal => animal.weapon == 'claws')
  console.log('🦞', clawedAnimals);

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(clawedAnimals)
}

function filterIntellect() {
  // NOTE returns a new array with animals that have the weapon property as 'intellect'
  let smartAnimals = animals.filter(animal => animal.weapon == 'intellect')
  console.log('🧠', smartAnimals);

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(smartAnimals)

}

function filterOld() {
  // NOTE returns a new array with animals that have the age property greater than or equal to 30
  let oldAnimals = animals.filter(animal => animal.age >= 30)
  console.log('👴', oldAnimals);

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(oldAnimals)
}
function filterYoung() {
  // NOTE returns a new array with animals that have the age property less than 30
  let youngAnimals = animals.filter(animal => animal.age < 30)
  console.log('🛼', youngAnimals);

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(youngAnimals)
}

function filterMeatEaters() {

  // NOTE returns new array of animals that has the animals where their diet array has a string of 'meats'
  let meatEaters = animals.filter(animal => animal.diet.includes('meats'))

  // NOTE pass down our new filtered array to drawAnimals to draw to the screen
  drawAnimals(meatEaters)
}

function getClue() {
  let murderer = findMurderer()
  const clueElement = document.getElementById('clues')

  if (murderer.mammal) {
    clueElement.innerHTML = '<p>The animal is a mammal</p>'
  }
  else {
    clueElement.innerHTML = '<p>The animal is not a mammal</p>'
  }

  clueElement.innerHTML += `<p>The murderer used their ${murderer.weapon} to commit the crime</p>`
}




// SECTION running functions

drawAnimals(animals)
makeAMurderer()


