// Definição da classe ItemMagico
class ItemMagico {
  // Construtor recebe tipo, dano e resistência
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  // Função para calcular dano baseado no tipo do item
  calcularDano() {
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Entradas do usuário
const tipoItem = gets().trim(); // Remove espaços extras
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Cria o objeto ItemMagico com os valores do usuário
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano em combate
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
