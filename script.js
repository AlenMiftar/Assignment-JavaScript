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
      completed: false,
    };

    this.tasks.push(task);

    alert("Task added!");

    menu();
  },

  completeTask: function () {
    let message = "";
    this.tasks.forEach((task) => {
      message +=
        "Id: " +
        task.id +
        " Description: " +
        task.description +
        " Completed: " +
        task.completed +
        "\n";
    });

    const id = parseInt(
      prompt(`${message}\nEnter the task ID to mark as completed:`)
    );
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      alert("Task not found.");
      menu();
    } else {
      task.completed = true;
      alert("Task marked as completed.");
      menu();
    }
  },

  listAllTasks: function () {
    if (this.tasks.length === 0) {
      alert("No task has been added!");
      menu();
    } else {
      let message = "";
      this.tasks.forEach((task) => {
        message +=
          "Id: " +
          task.id +
          " Description: " +
          task.description +
          " Completed: " +
          task.completed +
          "\n";
      });
      alert(message);
      menu();
    }
  },

  listAllCompleted: function () {
    if (this.tasks.length === 0) {
      alert("No task has been completed!");
      menu();
    } else {
      const result = this.tasks.filter((task) => task.completed);
      if (result.length === 0) {
        alert("No task has been completed!");
        menu();
      } else {
        let message = "";
        result.forEach((task) => {
          message +=
            "Id: " +
            task.id +
            " Description: " +
            task.description +
            " Completed: " +
            task.completed +
            "\n";
          alert(message);
          menu();
        });
      }
    }
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
      `Hello ${userName}, select a choice:\n1) Add new task\n2) Complete task\n3) List all tasks\n4) List completed tasks\n5) Exit`
    )
  );
  // Jag bytte till switch istället för jag tycker det är mer passande för en meny val och mer clean code än if/else statement
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
// Task Manager application start:
askUserName();
