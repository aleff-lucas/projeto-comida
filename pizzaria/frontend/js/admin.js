const listaPizzas = document.getElementById("lista-pizzas");
const editorPizza = document.getElementById("editor-pizza");
const formulario = document.getElementById("form-atualizar-pizza");
const fecharEditor = document.getElementById("fechar-editor");

// Lista de pizzas de teste
const pizzas = [
    {
        id: 1,
        nome: "Calabresa",
        descricao: "Molho, queijo e calabresa",
        preco: 39.90,
        categoria: "tradicional",
        estoque: "disponivel"
    },
    {
        id: 2,
        nome: "Mussarela",
        descricao: "Molho, mussarela e orégano",
        preco: 35.90,
        categoria: "tradicional",
        estoque: "disponivel"
    },
    {
        id: 3,
        nome: "Chocolate",
        descricao: "Chocolate ao leite e granulado",
        preco: 42.90,
        categoria: "doce",
        estoque: "indisponivel"
    }
];

// Guardar a pizza e o cartão selecionados
let pizzaSelecionada = null;
let cartaoSelecionado = null;

// Criar os cartões das pizzas
pizzas.forEach(function(pizza) {
    const cartao = document.createElement("button");
    cartao.classList.add("pizza-card");
    cartao.type = "button";

    cartao.textContent =
        pizza.nome + " - R$ " +
        pizza.preco.toFixed(2).replace(".", ",");

    // Abrir o editor da pizza clicada
    cartao.addEventListener("click", function() {
        pizzaSelecionada = pizza;
        cartaoSelecionado = cartao;

        editorPizza.hidden = false;

        document.getElementById("nome-atualizar").value = pizza.nome;
        document.getElementById("descricao-atualizar").value = pizza.descricao;
        document.getElementById("preco-atualizar").value = pizza.preco;
        document.getElementById("categoria-atualizar").value = pizza.categoria;
        document.getElementById("estoque").value = pizza.estoque;
    });

    listaPizzas.appendChild(cartao);
});

// Salvar as alterações
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (pizzaSelecionada === null) {
        return;
    }

    pizzaSelecionada.nome =
        document.getElementById("nome-atualizar").value;

    pizzaSelecionada.descricao =
        document.getElementById("descricao-atualizar").value;

    pizzaSelecionada.preco =
        Number(document.getElementById("preco-atualizar").value);

    pizzaSelecionada.categoria =
        document.getElementById("categoria-atualizar").value;

    pizzaSelecionada.estoque =
        document.getElementById("estoque").value;

    cartaoSelecionado.textContent =
        pizzaSelecionada.nome + " - R$ " +
        pizzaSelecionada.preco.toFixed(2).replace(".", ",");

    editorPizza.hidden = true;

    alert("Pizza atualizada com sucesso!");
});

// Fechar o editor
fecharEditor.addEventListener("click", function() {
    editorPizza.hidden = true;
});