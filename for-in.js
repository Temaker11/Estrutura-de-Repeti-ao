//for...in

let person = {
  name: 'pedro',
  age: 21,
  weight: 60.21
}

for(let property in person) {
  console.log(property)
  console.log(person[property]) 
}

