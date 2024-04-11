let userName;
let taskId = 1;

const taskManager = {
  // fråga: hur kan vi definiera propertien tasks? det ska vara en array som ska innehålla alla tasks
  tasks: [],
  // fråga: hur kan vi definiera propertien addTask()? det ska vara en funktion för att lägga till en task
  addTask: function () {
    const taskDescription = prompt("Please add task description:");
    if (taskDescription.trim() === "") {
      alert("Task description can not be empty!");
      this.addTask();
    } else if (!isNaN(taskDescription)) {
      alert("Invalid description\n Task description can not only be numbers!");
      this.addTask();
    }

    const task = {
      id: taskId++,
      description: taskDescription,
      complete: false,
    };

    this.tasks.push(task);
    alert("Task added!");
    console.log(
      "id:" +
        task.id +
        " description:" +
        task.description +
        " completed:" +
        task.complete
    );
    menu();
  },
};

function askUserName() {
  userName = prompt("Please fill in your name!");

  if (userName === "") {
    alert("You need to fill in your name!");
    askUserName();
  } else if (!isNaN(userName)) {
    alert("You need to fill in your name NOT a number!");
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
