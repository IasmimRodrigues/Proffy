//Procurar o botão
document.querySelector("#add-time")

//Clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação  // console.log() - coloca na aba console, tudo que coloquei dentro da funcionalidade "log"
function cloneField() {
    
    // Duplicar os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node(nó) - elementos html, se refere a eles //boolean - true or false 
    
    // pegar os campos 
    const fields = newFieldContainer.querySelectorAll("input") //all - pega todos os inputs q ele achar la dentro

    //para cada campo, limpar 
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele 
        field.value = ""
    })

    // Colocar na pág.
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}