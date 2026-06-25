const senhaInput = document.getElementById("senha");
const gerarBtn = document.getElementById("gerar");
const copiarBtn = document.getElementById("copiar");

const tamanhoInput = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const chars = {
    maiusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    numeros: "0123456789",
    simbolos: "!@#$%^&*()_+{}[]<>?/|"
};

tamanhoInput.addEventListener("input", () => {
    valorTamanho.textContent = tamanhoInput.value;
});

function gerarSenha() {
    let caracteres = "";

    if (maiusculas.checked) caracteres += chars.maiusculas;
    if (minusculas.checked) caracteres += chars.minusculas;
    if (numeros.checked) caracteres += chars.numeros;
    if (simbolos.checked) caracteres += chars.simbolos;

    if (caracteres === "") {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanhoInput.value; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    senhaInput.value = senha;
}

gerarBtn.addEventListener("click", gerarSenha);

copiarBtn.addEventListener("click", async () => {
    if (!senhaInput.value) return;

    try {
        await navigator.clipboard.writeText(senhaInput.value);
        copiarBtn.textContent = "Copiado!";
        
        setTimeout(() => {
            copiarBtn.textContent = "Copiar";
        }, 2000);
    } catch {
        alert("Não foi possível copiar.");
    }
});

// Gera uma senha ao abrir a página
gerarSenha();