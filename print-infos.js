const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '13278844403',
    email: 'andre@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)
console.log(`Seu CPF é ***.${cliente.cpf.substring(3, 6)}.${cliente.cpf.substring(6, 8)}*-**`)
console.log(cliente.email)
