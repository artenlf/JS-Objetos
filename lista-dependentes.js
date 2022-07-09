const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '13278844403',
    email: 'andre@email.com',
    fones: ['1932319989', '1937975512'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'Sâmia Maria',
    parentesco: 'filha',
    dataNasc: '13/02/2014'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '13/02/2014')

console.log(filhaMaisNova[0].nome)