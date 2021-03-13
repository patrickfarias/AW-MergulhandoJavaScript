var person1 = {

    name: 'Patrick',
    age: 22,
    sex: 'male'
}

var person2 = {

    name: 'Jose',
    age: 22,
    sex: 'male'
}

person1.age = 30

console.log(person1)
console.log(person1.age)

var list = [ person1, person2 ]

console.log(list[0].sex)

// Estrutura de laco
for (var person of list ){

    console.log(person)
}






