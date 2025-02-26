// Classe base Animal
class Animal {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }

    fazerSom() {
        return "Esse animal faz um som.";
    }

    mover() {
        return "Esse animal se move.";
    }
}

// Classes específicas
class Cachorro extends Animal {
    fazerSom() {
        return "O cachorro late: Au Au!";
    }

    mover() {
        return "O cachorro corre rapidamente.";
    }
}

class Gato extends Animal {
    fazerSom() {
        return "O gato mia: Miau!";
    }

    mover() {
        return "O gato salta com agilidade.";
    }
}

class Passaro extends Animal {
    fazerSom() {
        return "O pássaro canta: Piu Piu!";
    }

    mover() {
        return "O pássaro voa pelo céu.";
    }
}

class Peixe extends Animal {
    fazerSom() {
        return "O peixe não faz som.";
    }

    mover() {
        return "O peixe nada silenciosamente.";
    }
}

class Cavalo extends Animal {
    fazerSom() {
        return "O cavalo relincha: Ihihih!";
    }

    mover() {
        return "O cavalo galopa pelo campo.";
    }
}

// Controle do formulário de múltiplas etapas
let currentStep = 1;
const steps = document.querySelectorAll(".step");

document.getElementById("next1").addEventListener("click", () => changeStep(1));
document.getElementById("back1").addEventListener("click", () => changeStep(-1));
document.getElementById("next2").addEventListener("click", () => changeStep(1));
document.getElementById("createAnimal").addEventListener("click", createAnimal);

function changeStep(direction) {
    steps[currentStep - 1].style.display = "none";
    currentStep += direction;
    steps[currentStep - 1].style.display = "block";
}

// Criar o animal e exibir informações
let meuAnimal;

function createAnimal() {
    let tipo = document.getElementById("animalType").value;
    let nome = document.getElementById("animalName").value;
    let cor = document.getElementById("animalColor").value;

    switch (tipo) {
        case "Cachorro":
            meuAnimal = new Cachorro(nome, cor);
            break;
        case "Gato":
            meuAnimal = new Gato(nome, cor);
            break;
        case "Passaro":
            meuAnimal = new Passaro(nome, cor);
            break;
        case "Peixe":
            meuAnimal = new Peixe(nome, cor);
            break;
        case "Cavalo":
            meuAnimal = new Cavalo(nome, cor);
            break;
    }

    document.getElementById("animalInfo").innerHTML = `
        <strong>Nome:</strong> ${meuAnimal.nome}<br>
        <strong>Cor:</strong> <span style="color:${meuAnimal.cor};">${meuAnimal.cor}</span><br>
        <strong>Som:</strong> ${meuAnimal.fazerSom()}<br>
        <strong>Movimento:</strong> ${meuAnimal.mover()}
    `;

    document.getElementById("animalForm").style.display = "none";
    document.getElementById("animalDisplay").style.display = "block";
}

// Interação com os botões
document.getElementById("playSound").addEventListener("click", () => alert(meuAnimal.fazerSom()));
document.getElementById("showMovement").addEventListener("click", () => alert(meuAnimal.mover()));