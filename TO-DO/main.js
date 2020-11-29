const Input = document.getElementById("add-task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");

const disableBtn = () => {
    addBtn.disabled = true;
    addBtn.style.background = "#eeeeee";
    addBtn.style.cursor = "not-allowed";
    addBtn.style.border = "none";
}
const activateButton = () => {
    if (Input.value.length > 0) {

        addBtn.disabled = false;
        addBtn.style.background = "transparent";
        addBtn.style.cursor = "pointer";
        addBtn.style.border = "2px solid black";
    } else {
        disableBtn();
    }
}
const Complete = (check) => {
    if (check.checked == true) {
        var parent = check.parentNode;
        var Span = parent.getElementsByClassName("span");

        // Span.classList.add("line-through");
        // Span.style.textDecoration = "line-through";
    } else {
        var parent = check.parentNode;
        var Span = parent.getElementsByTagName("span");
        Span.classList.add("none");
    }
}
const addTask = () => {
    const inputValue = Input.value;
    console.log(inputValue);
    let task = `<div id="task">
                <input type="checkbox" onclick="Complete(this)" id="check">
                <span id="task-content" class="span">${inputValue}</span>
               <button id="delete" onclick="deleteTask(this)" style="float: right">
                    <i class="far fa-trash-alt"></i>
                </button>      </div>`

    taskList.innerHTML += task;


    Input.value = "";
    disableBtn();

}

const deleteTask = (button) => {

    let parent = button.parentNode;
    let grand_parent = parent.parentNode;
    parent.style.opacity = "0";
    parent.style.transition = "120ms";
    setTimeout(() => {
        grand_parent.removeChild(parent);
    }, 200);
}
addBtn.onclick = addTask;
Input.onkeyup = activateButton;