//exercici1

const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => exercici1())

const exercici1 = () => {
    let title = document.getElementById("title1")
    title.textContent = "Titol modificat"
    let p = document.getElementById("text")
    p.textContent = "Text modificat del parràgraf"
    const list = document.getElementById("list1")
    let li = document.createElement("li")
    li.textContent = "Element 4"
    list.appendChild(li)
    let btn1 = document.getElementById("btn1")
    btn1.disabled = true
}

//exercici2

const div = document.getElementById("ex2")
div.addEventListener("click", () => exercici2())
const exercici2 = () => {
    div.style.color = "red"
    div.style.fontFamily = "Helvetica"
    div.style.fontSize = "30px"
    console.log("hola")
    //opcional :)
    const text2 = document.getElementById("text2")
    text2.textContent = "Text amb l'estil aplicat"
}

//exercici 3

const form1 = document.getElementById("form1")

form1.addEventListener('submit', (event) => {
    event.preventDefault()
    const value = document.getElementById("value").value
    let p = document.createElement("p")
    p.textContent = value
    form1.appendChild(p)
    const btn = document.getElementById("submit")
    btn.disabled = true
})

//exercici 4

//CANVIEM SIMPLEMENT L'ORDRE JA QUE ALS EVENT LISTENERS ARA NO HI HA FUNCIONS

let tasks = new Map
const form2 = document.getElementById("form2")

const printTasks = () => {
    const container = document.getElementById("list")
    container.replaceChildren()
   
    tasks.forEach(task => {
        let taskGroup = document.createElement("div")
        let li = document.createElement("li")
        let deleteBtn = document.createElement("button")
        const markedBtn = document.createElement("button")
        markedBtn.setAttribute("id", "markedBtn")
        markedBtn.textContent = "Mark as done"
        deleteBtn.textContent = "Delete"
        taskGroup.appendChild(li)
        taskGroup.appendChild(markedBtn)
        taskGroup.appendChild(deleteBtn)
        taskGroup.classList.add("taskGroup")
    
        li.textContent = task
        container.appendChild(taskGroup)
        deleteBtn.addEventListener("click", () => deleteTask(task)) //aixo es fa per a que no s'executi la funcio
        markedBtn.addEventListener("click", () => markProduct())
    })   
}

const onFormSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const task = data.get("task")
    if (task === "") {
        return
    }
    tasks.set(task, task)
    console.log(tasks)
}

const markProduct = () => {
    const markedBtn = document.getElementById("markedBtn")
    markedBtn.style.textDecoration = "line-through"
}

const deleteTask = (taskI) => {
    tasks.forEach(task => {
        if (task == taskI  ) {
            tasks.delete(taskI)
            printTasks()
        }
    })
    console.log(tasks)
}

form2.addEventListener("submit", onFormSubmit)
form2.addEventListener("submit", printTasks)







