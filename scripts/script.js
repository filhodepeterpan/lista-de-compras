const temaEscolhido = document.getElementById("tema");
const temas = Array.from(temaEscolhido.querySelectorAll("option")).map(option => option.value).filter(value => value);

temaEscolhido.addEventListener("change", function () {

    if (temaEscolhido.value != "") {

        temas.forEach(tema => {
            if (tema != temaEscolhido.value) {
                document.documentElement.classList.remove(tema);
            }
        })

        if (temaEscolhido.value == "night") {
            const lista = document.getElementById("lista-itens")

            lista.style.color = "#000000";
        }

        document.documentElement.classList.add(temaEscolhido.value);
    }

});

const item = document.getElementById("item");
let itens = [];
mensagemDeErro = document.getElementById("erro");

function exibeItens() {
    const lista = document.getElementById("lista-itens");
    lista.innerHTML = "";

    itens.sort();

    itens.forEach(item => {

        numeroItem = itens.indexOf(item) + 1;

        lista.innerHTML += `<input type="checkbox" class="lista-itens-item" id="item${numeroItem}">${item}</input><hr><br>`;

    });
    item.value = "";

}

function adicionaItem() {

    const itemEscolhido = item.value.trim().toUpperCase();

    if (itemEscolhido != "") {

        if (itens.indexOf(itemEscolhido) == -1) {

            itens.push(itemEscolhido);
            mensagemDeErro.innerHTML = "";

        }
        else {
            mensagemDeErro.innerHTML = `O item "${itemEscolhido}" já foi adicionado.`;
        }

        exibeItens();
    }
}

item.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        adicionaItem();
    }
});

function removeItem() {

    const itensCheckbox = document.querySelectorAll(".lista-itens-item");

    itensCheckbox.forEach(itemCheckbox => {

        const itemMarcado = itemCheckbox.nextSibling.textContent.trim().toUpperCase();
        const index = itens.indexOf(itemMarcado);

        if (itemCheckbox.checked && index != -1) {
            itens.splice(index, 1);
        }
    });

    exibeItens();

}

function removeTodosOsItens() {

    if (itens.length > 0) {

        const confirmacao = confirm("Após clicar em \"OK\" não será possível restaurar a lista. Você tem certeza de que deseja remover todos os itens?");

        if (confirmacao) {
            itens = [];
            exibeItens();
        }
    }

}

