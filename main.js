let formEl = document.getElementById("new-task-form");
let inputText = document.getElementById("new-task-input");
let taskBody = document.getElementById("tasks");
let errorText = document.querySelector(".error-text");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = inputText.value;
  if (!task) {
    errorText.style.display = "block";
    inputText.style.border = "1px solid red";
    showError();
  } else {
    // we first create an empty div, we give it a class of task
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    //below we append the the taskContainer inside the taskBody
    taskBody.appendChild(taskContainer);

    //we create another div, we give it a class of content
    let contentEl = document.createElement("div");
    contentEl.classList.add("content");
    //below we append the contentEl inside the taskContainer
    taskContainer.appendChild(contentEl);

    // below we create an input, we give it a class of text
    //we make the the value = to the value of inputText
    let inputEl = document.createElement("input");
    inputEl.value = task;
    inputEl.setAttribute("readonly", "readonly");
    inputEl.classList.add("text");
    //below we append the inputEl inside the contentEl
    contentEl.appendChild(inputEl);

    //below ..we create an empty div that will flex our two button
    //we give it a class of action
    let actionEl = document.createElement("div");
    actionEl.classList.add("action");
    //below we append the actionEl inside the taskContainer
    taskContainer.appendChild(actionEl);

    // below here we we create a button with  innerHTML of edit
    //and  a classList of edit
    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.classList.add("edit");
    //we append the editButton inside the actionEl
    actionEl.appendChild(editButton);

    // below here we we create a button with  innerHTML of delete
    //and  a classList of delete
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.classList.add("delete");
    //we append the deleteEl inside the deleteButton
    actionEl.appendChild(deleteButton);

    inputText.value = "";

    editButton.addEventListener("click", () => {
      if (editButton.innerHTML.toLocaleLowerCase() === "edit") {
        inputEl.removeAttribute("readonly");
        inputEl.focus();
        editButton.innerHTML = "save";
      } else {
        inputEl.setAttribute("readonly", "readonly");
        editButton.innerHTML = "edit";
      }
    });

    deleteButton.addEventListener("click", () => {
      taskBody.removeChild(taskContainer);
    });
  }
});
// gainsboro
function showError() {
  setTimeout(() => {
    errorText.style.display = "none";
    inputText.style.border = "1px solid #252b48";
  }, 2000);
}
