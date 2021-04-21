
//Nessa aula vamos aprender sobre funcoes PURAS e IMPURAS.IMPURAS
//PURAS = sao funcoes que nao alteram o objeto original
//IMPURAS = sao funcoes que alteram o objeto original (Gera Efeito Colateral)

var person = {
    name: 'Lucas',
    age: 14
}

function getRemainingYearstoMajorty (person){
    return 18 - person.age
}

function increasePersonAge (person){
    person.age = person.age + getRemainingYearstoMajorty(person)
}

console.log(person.age)

var remainingYears = getRemainingYearstoMajorty(person)

console.log(remainingYears)

increasePersonAge(person)

console.log(getRemainingYearstoMajorty(person))
