function addElement() {
    const list = document.createElement("li");
    const inputValue = document.getElementById("todo-input").value;
    const text = document.createTextNode(inputValue);
    const unordered = document.getElementById("ul-list");
    const finish = document.getElementById("ul-finish")

    list.className = "finish"
    list.appendChild(text);
    document.getElementById("ul-list").appendChild(list);
    document.getElementById("todo-input").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\uf061");
    span.className = "next";
    span.appendChild(txt);
    list.appendChild(span);

    const next = document.getElementsByClassName("next");

    for (let i = 0; i < next.length; i++) {
        next[i].onclick = function () {
            const copy = list.cloneNode(false)
            const copyTest = text.cloneNode(false)

            unordered.removeChild(list);
            finish.append(copy, copyTest);

            const finals = document.createElement("SPAN");
            const cross = document.createTextNode("\uf00d");


            finals.className = "close";
            finals.appendChild(cross);
            list.appendChild(finals);
        }
    }
}
