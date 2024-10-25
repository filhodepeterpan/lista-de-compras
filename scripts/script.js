const temaEscolhido = document.getElementById("tema");
const temas = Array.from(temaEscolhido.querySelectorAll("option")).map(option => option.value).filter(value => value);

temaEscolhido.addEventListener("change", function(){

    if (temaEscolhido.value != ""){

        temas.forEach(tema => {
            if (tema != temaEscolhido.value){
                document.documentElement.classList.remove(tema);
            }
        })

        if(temaEscolhido.value == "night"){
            const lista = document.getElementById("lista-itens")

            lista.style.color = "#000000";
        }

        document.documentElement.classList.add(temaEscolhido.value);
    }
    
})

const item = document.getElementById("item");
let itens = [];
mensagemDeErro = document.getElementById("erro");

function exibeItens(){
    const lista = document.getElementById("lista-itens");
    lista.innerHTML = "";

    itens.sort();

    itens.forEach(item => {

        numeroItem = itens.indexOf(item) + 1;

        lista.innerHTML += `${numeroItem}. ${item}<hr><br>`;
    })

    item.value = "";

}

function adicionaItem(){
    
    const itemEscolhido = item.value.trim().toUpperCase();

    if(itemEscolhido != ""){

        if (itens.indexOf(itemEscolhido) == -1){

            itens.push(itemEscolhido);
            mensagemDeErro.innerHTML = "";

        }
        else{
            mensagemDeErro.innerHTML = `O item "${itemEscolhido}" já foi adicionado.`;
        }

        exibeItens();
    }
}

function removeItem(){

    const itemEscolhido = item.value.trim().toUpperCase();

    if(itemEscolhido != ""){
        
        if (itens.indexOf(itemEscolhido) != -1){

            itens.splice(itens.indexOf(itemEscolhido), 1);
            mensagemDeErro.innerHTML = "";

        }
        else{
            mensagemDeErro.innerHTML = `O item "${itemEscolhido}" não está na lista.`;
        }

        exibeItens();
    }
}

function removeTodosOsItens(){

    if (itens.length > 0){
        
        const confirmacao = confirm("Após clicar em \"OK\" não será possível restaurar a lista. Você tem certeza de que deseja remover todos os itens?" );
        
        if(confirmacao){
            itens = [];
            exibeItens();
        }
    }

}

