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

function oferecerSeguro(obj) {
    const propsClients = Object.keys(obj);
    if (propsClients.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)
