// Função para adicionar uma nova tarefa à lista
function addTask() {
    // Obtém o valor digitado no input
    var taskInput = document.getElementById("input-box").value;

    // Verifica se o campo de entrada está vazio
    if (taskInput === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Cria um novo elemento de lista <li>
    var listItem = document.createElement("li");

    // Adiciona o texto da tarefa ao elemento de lista
    listItem.innerText = taskInput;

    // Adiciona a classe para estilo
    listItem.classList.add("task-item");

    // Adiciona o evento de clique para marcar como concluído ou remover
    listItem.addEventListener("click", function() {
        if (listItem.classList.contains("completed")) {
            // Se já estiver marcado como concluído, remove a marcação
            listItem.classList.remove("completed");
        } else {
            // Caso contrário, marca como concluído
            listItem.classList.add("completed");
        }
    });

    // Adiciona o elemento de lista à lista existente
    document.getElementById("list-container").appendChild(listItem);

    // Limpa o campo de entrada após adicionar a tarefa
    document.getElementById("input-box").value = "";
}

// Função para remover todas as tarefas da lista
function clearList() {
    var list = document.getElementById("list-container");
    list.innerHTML = ""; // Remove todos os elementos filhos
}