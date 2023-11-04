class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if (this.tipo == 'Mago'){
            ataque = 'magia'
        } else if (this.tipo == 'Guerreiro'){
            ataque = 'espada'
        } else if (this.tipo == 'Monge'){
            ataque = 'artes marciais'
        } else if (this.tipo == 'Ninja'){
            ataque = 'shuriken'
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let mago = new heroi('Trou', '20', 'Mago')
let ninja = new heroi('Goku', '25', 'Ninja')

mago.atacar()
ninja.atacar()