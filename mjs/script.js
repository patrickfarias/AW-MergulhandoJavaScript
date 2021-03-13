// criando funcoes

// funcao sem retorno
function greet(name = 'Mergulhador'){
    console.log('Boa Madrugada, ' + name)
}

greet('Jose')
greet()


// funcao com retorno
function greetComRetorno(name = 'Mergulhador'){
    return 'Boa Madrugada, ' + name
}

console.log(greetComRetorno('Daniel'))


