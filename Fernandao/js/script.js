document.querySelector("#adicionar").addEventListener("click", adicionarTarefa)
textoTarefa = document.getElementById("tarefa")
listaTarefa = document.getElementById("lista")
document.querySelector("#gravar").addEventListener("click", salvarTarefa)

carregarnoinicio()

//  Criando a Tarefa e adicionando ela na lista

function adicionarTarefa(){
    tarefa = textoTarefa.value.trim();

    if (tarefa) {
        criarTarefa(tarefa)

        textoTarefa.value = "";

    }
}

function criarTarefa(tarefa){
    var listaItem = document.createElement("li");

    listaItem.textContent = tarefa;

    listaTarefa.appendChild(listaItem)

    function limparTarefas(){
        localStorage.clear();
        listaItem.remove();
    }
    
    listaItem.addEventListener('click', function(){
            listaItem.style.textDecoration = "line-through"
    })

    listaItem.addEventListener('dblclick', function(){
            listaItem.remove()
    })


    document.querySelector("#limpar").addEventListener("click", limparTarefas)
}


// Salvando no localstorage

function salvarTarefa(){
{   let Tarefas=[];
    listaTarefa.querySelectorAll("li").forEach(function(listaItem) {
        Tarefas.push(listaItem.textContent.trim());
    })

    localStorage.setItem('tarefas', JSON.stringify(Tarefas))
}
}


// Carregando o localstorage no início (nome autoexplicativo)

function carregarnoinicio(){

    tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.forEach(criarTarefa);

}






