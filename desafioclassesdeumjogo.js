class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const mago = new Heroi("Gandalf", 150, "mago");
mago.atacar(); // Saída: "o mago atacou usando magia"

const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
guerreiro.atacar(); // Saída: "o guerreiro atacou usando espada"

const monge = new Heroi("Lee", 28, "monge");
monge.atacar(); // Saída: "o monge atacou usando artes marciais"

const ninja = new Heroi("Hanzo", 24, "ninja");
ninja.atacar(); // Saída: "o ninja atacou usando shuriken"
