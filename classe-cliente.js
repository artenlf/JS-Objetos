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

const andre = new cliente('André', '83492322303', 'andre@email.com', 100)

andre.exibirSaldo()

console.log(andre)