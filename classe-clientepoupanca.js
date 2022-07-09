class cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(`Olá ${this.nome}! Seu saldo é de: R$ ${this.saldo}.`)
    }
}

class clientePoupanca extends cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor) {
        this.saldoPoup += valor
    }
    exibirSaldoPoup() {
        console.log(`Olá ${this.nome}! Seu novo saldo em poupança é de: R$ ${this.saldoPoup}.`)
    }
}

const andre = new clientePoupanca('André', '83492322303', 'andre@email.com', 100, 200)

console.log(andre)

andre.depositarPoup(30)

andre.exibirSaldoPoup()