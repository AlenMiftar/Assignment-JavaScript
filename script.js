let userName;
let taskId = 1;

const taskManager = {
  // fråga: hur kan vi definiera propertien tasks? det ska vara en array som ska innehålla alla tasks
  tasks: [],
  // fråga: hur kan vi definiera propertien addTask()? det ska vara en funktion för att lägga till en task
  addTask: function () {
    const taskDescription = prompt("Please add task description:");
    if (taskDescription.trim() === "" || !isNaN(taskDescription)) {
      alert("Task description can not be empty!");
      this.addTask();
    }

    const task = {
      id: taskId++,
      description: taskDescription,
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
    menu();
    // lägg till task i tasks array
    // push() är samma som add() i c# den lägger till ett element på arrayen
    // this.addTask();
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
  completeTask: function () {
    const completedTask = prompt(
      `Do you want to mark task ${tasks.task} as completed?`
    );
    if (completedTask === "yes") {
      this.task = true;
      // this.completeTask.push(this.task);
    }
    this.tasks.push(this.completeTask);
    console.log(
      "id:" +
        this.task.id +
        " description:" +
        task.description +
        " completed:" +
        task.complete
    );
  },
};

function askUserName() {
  userName = prompt("Please enter your name");

  if (userName === "" || !isNaN(userName)) {
    alert("You need to fill in your name!");
    askUserName();
  } else alert(`Welcome to Task Manager application @: ${userName}!`);
  console.log(userName);
  menu();
}

function menu() {
  // parseInt gör att vi tar emot ett nummer istället för en string
  const choice = parseInt(prompt("1) Add new task,\n2) Complete task,\n"));
  if (isNaN(choice)) {
    alert(" Invalid input! You need to select a number between 1 - 4!");
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
