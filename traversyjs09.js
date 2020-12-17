//object literals

const person = {
  firstName: "Brian",
  lastName: "Griffin",
  age: 18,
  hobbies: ["writing", "smugness", "adventure"],
  address: {
    street: "Spooner Street",
    city: "Quahog",
    state: "RI",
  },
}

person.email = "hemingwayrulz@gmail.com"

//console.log(person)

//destructuring
const {
  firstName,
  lastName,
  address: { city },
} = person
//console.log(firstName)
//console.log(city)

//array of objects

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Do laundry",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Load dishwasher",
    isCompleted: false,
  },
]

console.log(todos)
