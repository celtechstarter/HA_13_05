let addbtn = document.getElementById("btn");
let listTodo = document.getElementById("listTodo");

function btnAdd(quest, completed) {
  let li = document.createElement("li"); // Hier wird eine Liste erstellt

  let checkbox = document.createElement("input"); // Hier wird unsere Checkbox erstellt
  checkbox.type = "checkbox"; //Hier wird gesagt, das "checkbox" eine Checkbox ist
  checkbox.checked = completed; // Wenn man die Checkbox anklickt, wird sie ausgefüllt

  let label = document.createElement("label"); // Hier haben wir ein label erstellt
  label.textContent = quest;

  li.appendChild(checkbox); // Hier haben wir unsere Checkbox zu einem ListenElement hinzugefügt
  li.appendChild(label); // Hier haben wir das Label zum Listenelemt hinzugefügt

  listTodo.appendChild(li); // Hier haben wir das Listenelement zum Listenelement hinzugefügt
}

addbtn.onclick = function () {
  let userInput = document.getElementById("todoInput");
  btnAdd(userInput.value, false); // Hier haben wir den normalen Hakenzustand auf "false" gesetzt und die Zeile eingelesen
  userInput.value = "";
};

function getQuest() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((array) => {
      listTodo.innerHTML = ""; //Hier werden unsere vorhandenen Aufgaben alle gelöscht
      array.forEach((questObject) => {
        btnAdd(questObject.title, questObject.completed); // Hakenzustand auf den wert "complete" gesetzt
      });
    });
}

getQuest();
