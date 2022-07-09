const cliente = {
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
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


let relatorio = '';

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)