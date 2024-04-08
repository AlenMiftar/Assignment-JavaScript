let userName;
let taskId = 1;

// steg 2:
// för att gå vidare behöver vi börja jobba med taskManager objektet samt menu()

// vi kan först bara se till att vi kan ta emot en input i menu() och visa nåt baserat på det

// vi fokuserar på två properties först i taskManager objektet:
// - en array som ska innehålla alla tasks

//array = [] hak-parentes

//array = [{id: 1, text: "ETT"}, {id: 2, text: "TVÅ"}, {id: 3, text: "TRE"}]
// så här har arrayen tre objekt
// varje objekt har två properties: id och text

// - funktionen addTask() som gör att man kan lägga till en task i tasks arrayen

// för att testa addTask() funktionen behöver du lägga till ett val för att skapa en ny task i menyn
// samt kalla på addTasks() ifrån objektet så att funktionen körs

// object
const taskManager = {
  // fråga: hur kan vi definiera propertien tasks? det ska vara en array som ska innehålla alla tasks
  tasks: [],
  // fråga: hur kan vi definiera propertien addTask()? det ska vara en funktion för att lägga till en task
  addTask: function () {
    // här kan vi skriva logik till vår funktion

    // här kan du sätta prompt
    const input = prompt("What do you want to do?");
    if (input === "" || !isNaN(input)) {
      alert("Error - Please fill in what you want to do!");
      this.addTask();
    }

    const task = {
      id: taskId++,
      description: input,
      complete: false,
    };
    this.tasks.push(this.addTask);
    console.log(
      "id:" +
        task.id +
        " description:" +
        task.description +
        " completed:" +
        task.complete
    );
    // lägg till task i tasks array
    // push() är samma som add() i c# den lägger till ett element på arrayen
    // this.addTask();
    menu();
    // kör menu() igen för att komma tillbaka till menyn
    // när det funkar lägg in felhantering tex kolla så att input är tom
  },
  // försökte att klura ut hur functionen completeTask borde gå till men lyckades inte uppnå det resultat jag ville ha.
  // completeTask: function () {
  //   const completeTask = prompt(`Have you completed task: ${taskId}?`);
  //   if (completeTask === "yes") {
  //     task.complete = true;
  //   }
  //   console.log(task.complete);
  //   menu();
  // },
};

function askUserName() {
  userName = prompt("Please enter your name");

  if (userName === "" || !isNaN(userName)) {
    alert("you need to fill in your name!");
    askUserName();
  } else alert(`Welcome to Task Manager application @: ${userName}!`);
  console.log(userName);
  menu();
}

function menu() {
  // parseInt gör att vi tar emot ett nummer istället för en string
  const choice = parseInt(prompt("1) Add new task,\n2) Complete task,"));
  if (isNaN(choice)) {
    alert("you need to select a number between 1 - 4!");
    menu();
  } else if (choice === 1) {
    taskManager.addTask();
  } else if (choice === 2) {
    taskManager.completeTask();
  } else alert("Error - could not find choice, Please try again");
  menu();
}

askUserName();
// menu()
