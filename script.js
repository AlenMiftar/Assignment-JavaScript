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
    /*
    Från Helena:
    Jättebra att du har fått det här att funka men för att jag göra det ännu
    bättre så skulle du kanske låta usern välja baserat på id? Då kan du till och med
    visa en lista med alla tasks först och be usern mata in det id på den task
    som dom vill markera som complete.

    gör vi det kan vi använda en fiffig array metod som heter find()
    find() används för att hitta det första elementet i arrayen som uppfyller 
    ett visst villkor. 
    
    metoden tar en funktion som parameter, vilken testar varje element 
    tills ett passande element hittas. om ett sådant element hittas, returneras det. 
    annars returneras undefined.

    här är ett exempel:

    const id = parseInt(prompt(`Enter the task ID to mark as completed:`));
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      alert("Task not found.");
      menu();
    }
    task.completed = true;
    alert("Task marked as completed.");
    menu();

    det första man skulle vilja göra är dock att loopa igenom arrayen och visa usern
    alla tasks innan usern väljer :)
    */
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
    /*
    Här behöver du tänka igenom vad du ska göra:

    ska du visa alla tasks som finns i tasks arrayen?
    eller ska du visa enbart vissa tasks som finns i tasks arrayen?

    om svaret är att du bara vill visa vissa tasks i arrayen måste du först
    filtrera ut arrayen och spara i en ny variabel. 

    undersök array metoden filter() googla: JavaScriot array method filter
    du bör se mdn web docs först, gå in där så ser du syntax exempel

    enkelt förklarat är filter en metod som skapar en ny array som 
    innehåller alla element från den ursprungliga arrayen som uppfyller 
    ett visst villkor definierat av en funktion. 
    
    den här funktionen kallas för varje element i arrayen, och om 
    funktionen returnerar true för ett element (tex att complete är true), 
    inkluderas det i den nya arrayen. om inga element uppfyller villkoret, 
    returneras en tom array.

    */
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
