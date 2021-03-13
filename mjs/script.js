// condicionais
var me = {
    name: 'Joana',
    age: 18
}

// funcao 
function checkAge(person){
    console.log('A idade da pessoa eh: ' + person.age)
    
    // Operadores:
    // == valida o conteudo da variavel, se eh igual
    // === valida se o tipo e o valor esta igual (String == Number)
    if(person.age > 17){
        console.log('A pessoa eh maior de idade')
    }else{
        console.log('MENOR')
    }
}

checkAge(me)