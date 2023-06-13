// SECTION array and object exampls

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


for (let i = 0; i < cats.length; i++) {
  let cat = cats[i]
  // console.log('🐈', cat);
}

cats.forEach(cat => console.log('🐈 for each!', cat))

let foundCat = cats.find(cat => cat.name == 'Dudley')

console.log('🐈 found cat:',);

let filteredCats = cats.filter(cat => cat.age > 4)

console.log('filter', filteredCats);

let sortedCats = cats.sort((cat1, cat2) => cat2.age - cat1.age)

console.log('sort', sortedCats);

let numbers = [1, 2, 3, 4]

let changedNumbers = numbers.map(number => number * 100)

console.log('changed', changedNumbers);



let number1 = 3

let number2 = number1

number2 *= 2

console.log('number 1:', number1);
console.log('number 2:', number2);

let person = {
  name: 'Jeremy',
  age: 32
}

let otherPerson = { ...person }

otherPerson.name = 'SAMMY GOOSE'

console.log('person', person);
console.log('otherPerson', otherPerson);

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
  let randomNumber = Math.floor(Math.random() * animals.length)
  console.log('random number', randomNumber);
  let randomAnimal = animals[randomNumber]
  randomAnimal.guilty = true
  console.log('random animal', randomAnimal);
}


function findMurderer() {
  // let foundAnimal = animals.find(animal => animal.guilty == true)
  let foundAnimal = animals.find(animal => animal.guilty)
  console.log(foundAnimal);

  return foundAnimal
}

function accuseAnimal() {
  const accusedAnimal = window.prompt("WHO DUNNIT")
  console.log(accusedAnimal);

  let murderer = findMurderer()

  if (murderer.emoji == accusedAnimal) {
    window.alert("You found the murderer! He's going to jail! 🚓")
  }
  else {
    window.alert("You didn't find the murderer! ☹️ You're going to jail! 🚓")
    getClue()
  }
}

function drawAnimals(animalArrayThatIsPassedDownWhenThisFunctionIsCalled) {
  let animalString = ''
  animalArrayThatIsPassedDownWhenThisFunctionIsCalled.forEach(animal => {
    animalString += animal.emoji
  })
  console.log(animalString);
  const animalLineupElement = document.getElementById('animalLineup')
  animalLineupElement.innerText = animalString
}

function drawAllAnimals() {
  drawAnimals(animals)
}


function filterMammals() {
  let mammals = animals.filter(animal => animal.mammal)
  let animalString = ''
  // mammals.forEach(animal => {
  //   animalString += animal.emoji
  // })
  // console.log(animalString);
  // const animalLineupElement = document.getElementById('animalLineup')
  // animalLineupElement.innerText = animalString
  // console.log('mammals?', mammals)
  drawAnimals(mammals)
}

function filterNonMammals() {
  let nonMammals = animals.filter(animal => !animal.mammal)
  console.log('mammals?', nonMammals)
  drawAnimals(nonMammals)

}

function filterClaws() {

  let clawedAnimals = animals.filter(animal => animal.weapon == 'claws')
  console.log('🦞', clawedAnimals);

  drawAnimals(clawedAnimals)
}

function filterIntellect() {
  let smartAnimals = animals.filter(animal => animal.weapon == 'intellect')
  console.log('🧠', smartAnimals);

  drawAnimals(smartAnimals)

}

function filterOld() {
  let oldAnimals = animals.filter(animal => animal.age >= 30)
  console.log('👴', oldAnimals);

  drawAnimals(oldAnimals)
}
function filterYoung() {
  let youngAnimals = animals.filter(animal => animal.age < 30)
  console.log('🛼', youngAnimals);

  drawAnimals(youngAnimals)
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

function filterMeatEaters() {
  let meatEaters = animals.filter(animal => animal.diet.includes('meats'))

  drawAnimals(meatEaters)
}


// SECTION running functions

drawAnimals(animals)
makeAMurderer()
