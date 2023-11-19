// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Kira", 100, "mago");
const guerreiro = new Heroi("Batman", 35, "guerreiro");
const monge = new Heroi("Bruce", 32, "monge");
const ninja = new Heroi("Homem Aranha", 28, "ninja");


mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();