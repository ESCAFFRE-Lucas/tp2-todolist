const button = document.getElementById("add-todo")

function addElement() {
    const list = document.createElement("li");
    const inputValue = document.getElementById("todo-input").value;
    const text = document.createTextNode(inputValue);
    const unorderlist = document.getElementById("ul-list");
    list.appendChild(text);
    document.getElementById("ul-list").appendChild(list);
    document.getElementById("todo-input").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            unorderlist.removeChild(list);
        }
    }
}

button.addEventListener("click", addElement)
// const buttons = document.querySelectorAll("button")
// buttons.forEach((button) => {
//     button.addEventListener("click", addElement)
// })


