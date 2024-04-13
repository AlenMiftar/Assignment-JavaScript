let userName;
let taskId = 1;

const taskManager = {
  tasks: [],
  addTask: function () {
    const taskDescription = prompt("Please add task description:");

    if (taskDescription.trim() === "") {
      alert("Task description can not be empty!");
      this.addTask();
    } else if (!isNaN(taskDescription)) {
      alert("Invalid description!\nTask description can NOT be numbers!");
      this.addTask();
    }

    const task = {
      id: taskId++,
      description: taskDescription,
      complete: false,
    };

    this.tasks.push(task);

    alert("Task added!");

    menu();
  },

  completeTask: function () {
    const completedTask = prompt(
      "Please enter which task you want to mark as completed?"
    );
    let foundTask = "";
    this.tasks.forEach((task) => {
      if (task.description.includes(completedTask)) {
        task.complete = true;
        foundTask = task;
        alert(`Task: ${completedTask} has been marked as completed!`);
        menu();
      }
      // console.log(task);
    });
    console.log("Found task: " + foundTask);
    if (!foundTask) {
      alert(`Task: ${completedTask} does not exist2`);
      console.log(this.tasks);
      menu();
    }
  },

  listAllTasks: function () {
    let message = "";
    this.tasks.forEach((task) => {
      message +=
        "Id: " +
        task.id +
        " Description: " +
        task.description +
        " Completed: " +
        task.complete +
        "\n";
    });
    if (taskManager.tasks.length === 0) {
      alert("No task has been added yet!");
      menu();
    } else alert(message);
    menu();
  },

  listAllCompleted: function () {
    let message = "";
    this.tasks.forEach((task) => {
      if (task.complete) {
        message +=
          "Id: " +
          task.id +
          " Description: " +
          task.description +
          " Completed: " +
          task.complete +
          "\n";
      }
    });
    console.log(message);
    // logic för tom message

    menu();
  },
};

function askUserName() {
  userName = prompt("Please enter your name:");

  if (userName.trim() === "") {
    alert("You need to fill in your name!");
    askUserName();
  } else if (!isNaN(userName)) {
    alert("You need to fill in your name NOT a number!");
    askUserName();
  } else {
    alert(`Welcome to Task Manager application @: ${userName}!`);
    menu();
  }
}

function menu() {
  const choice = parseInt(
    prompt(
      "Select a choice:\n1) Add new task\n2) Complete task\n3) List all tasks\n4) List completed tasks\n5) Exit"
    )
  );

  switch (choice) {
    case 1:
      taskManager.addTask();
      break;
    case 2:
      taskManager.completeTask();
      break;
    case 3:
      taskManager.listAllTasks();
      break;
    case 4:
      taskManager.listAllCompleted();
      break;
    case 5:
      alert("Goodbye!");

      return;

    default:
      alert("Invalid Input, please choose between 1 - 5");
      menu();
      break;
  }
}
askUserName();
