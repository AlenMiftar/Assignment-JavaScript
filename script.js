let userName;

function askUserName() {
  userName = prompt("Please enter your name");

  while (userName.length === 0) {
    userName = prompt("Wrong! Please enter your name");
  }

  alert(`Welcome to Task Manager application @: ${userName}!`);
  console.log(userName);
  return userName;
}

function menu() {
  const choice = parseInt(prompt("choose"));
}

askUserName();
menu();
