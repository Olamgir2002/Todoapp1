let btn = document.getElementById('btn');
let input = document.getElementById('input1');
let tod = document.getElementById('js-todo-cont');

lever1 = true;

function addtodo(el) {
    if (el) {
        let item = document.createElement('div');
        item.classList.add('task-style');
        let inp = document.createElement('input');
        inp.type = 'text';
        inp.setAttribute("Readonly", "Readonly");
        inp.classList.add('inputarea');
        inp.value = el;
        item.appendChild(inp);
        tod.appendChild(item);
        let edit = document.createElement('button');
        edit.innerHTML = 'e';
        item.appendChild(edit);
        edit.classList.add('editbtn');
        lever = true;
        edit.addEventListener("click", function() {
            if (edit.innerText == 'e') {
                inp.removeAttribute("Readonly", "Readonly");
                edit.innerText = 's';
            } else {
                edit.innerText = 'e';
                inp.setAttribute("Readonly", "Readonly")
            }
        })
        let deleter = document.createElement('button');
        deleter.classList.add('deleter');
        deleter.innerHTML = 'x';
        item.appendChild(deleter);
        deleter.addEventListener("click", function() {
            tod.removeChild(item);
        })

        item.addEventListener("dblclick", function() {

            if (lever1 == true) {
                inp.style.textDecoration = 'line-through';
                lever1 = false;
            } else if (lever1 == false) {
                inp.style.textDecoration = 'none';
                lever1 = true;
            }
        })
        input.value = '';
    }
}
btn.addEventListener("click", function() {
    addtodo(input.value);
})