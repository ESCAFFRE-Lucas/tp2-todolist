function addElement() {

    const list = document.createElement("li");
    const inputValue = document.getElementById("todo-input").value;
    const text = document.createTextNode(inputValue);
    const unordered = document.getElementById("ul-list");
    const finish = document.getElementById("ul-finish")

    list.className = "start"
    list.appendChild(text);
    document.getElementById("ul-list").appendChild(list);
    document.getElementById("todo-input").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode(" --> ");
    span.className = "next";
    span.appendChild(txt);
    list.appendChild(span);
    localStorage.setItem("name", list.outerHTML)

    const next = document.getElementsByClassName("next");

    for (let i = 0; i < next.length; i++) {
        next[i].onclick = function () {
            list.classList.remove("start");
            list.classList.add("finish");
            const copy = list.cloneNode(false)
            const copyText = text.cloneNode(false)

            unordered.removeChild(list);
            finish.append(copy);
            copy.appendChild(copyText)

            const finals = document.createElement("SPAN");
            const cross = document.createTextNode("x");


            finals.className = "close";
            finals.onclick = function () {
                copy.remove();
            }
            finals.appendChild(cross);
            copy.appendChild(finals);
            localStorage.setItem("copy", copy.outerHTML)
        }
    }
}

let localList = localStorage.getItem("name");
console.log(localList)
document.getElementById("ul-list").innerHTML = localList

let localCopy = localStorage.getItem("copy");
console.log(localCopy)
document.getElementById("ul-finish").innerHTML = localList