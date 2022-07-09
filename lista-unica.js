const clientes = [
    {
    nome: 'André',
    idade: 36,
    cpf: '13278844403',
    email: 'andre@email.com',
    fones: ['1932319989', '1937975512'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Sâmia Maria',
            parentesco: 'filha',
            dataNasc: '13/02/2014'
        }
    ],
},
{
    nome:'Juliana',
    cpf:'08492809088',
    dependentes:[{
        nome: 'Sophia',
        parentesco: 'filha',
        dataNasc: '30/08/2021'
    }],
}
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes] // operador de espalhamento ' ... '

console.table(listaDependentes)