// Fogo Amigo System

class FogoAmigo {
    constructor() {
        this.amigos = [];
    }

    addAmigo(amigo) {
        this.amigos.push(amigo);
    }

    getAmigos() {
        return this.amigos;
    }

    clearAmigos() {
        this.amigos = [];
    }
}

// Example usage
const meuFogoAmigo = new FogoAmigo();
meuFogoAmigo.addAmigo('Amigo1');
meuFogoAmigo.addAmigo('Amigo2');
console.log(meuFogoAmigo.getAmigos()); // ['Amigo1', 'Amigo2']
