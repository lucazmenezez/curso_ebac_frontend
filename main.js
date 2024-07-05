function ContaBancaria(titular, numero, saldo) {
    this.titular = titular;
    this.numero = numero;
    let _saldo = saldo;

    this.getSaldo = function() {
        return _saldo;
    }

    this.setSaldo = function(valor) {
        if (typeof valor === 'number') {
            _saldo = valor;
        }
    }

    this.depositar = function(valor) {
        if (_saldo >= valor) {
            console.log(`Depositado ${valor} na conta de ${this.titular}.`);
            _saldo += valor;
        }
    }
}

function ContaInvestimentos(titular) {
    ContaBancaria.call(this, titular, 87654321, 20000);
}

function ContaPremium(titular) {
    ContaBancaria.call(this, titular, 56784321, 10000);
}

const titular1 = new ContaBancaria("Ronaldo", 12345678, 15000);
const titularInvestimentos = new ContaInvestimentos("Messi");
const titularPremium = new ContaPremium("Neymar");

console.log(titular1);
console.log(titularInvestimentos);
console.log(titularPremium);

console.log(titular1.getSaldo())
titular1.setSaldo(90000)
console.log(titular1.getSaldo())

titularPremium.depositar(10000);
console.log(titularPremium.getSaldo())