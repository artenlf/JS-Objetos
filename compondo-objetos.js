const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '13278844403',
    email: 'andre@email.com',
    fones: ['1932319989', '1937975512']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)