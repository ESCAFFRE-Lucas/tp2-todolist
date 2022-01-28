const button = document.getElementById("add-todo")
const todo = document.getElementById("todo-list")

function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode('yo');
    newDiv.appendChild(newContent);
    todo.insertBefore(newDiv, button)
}

button.addEventListener("click", addElement)
// const buttons = document.querySelectorAll("button")
// buttons.forEach((button) => {
//     button.addEventListener("click", addElement)
// })


