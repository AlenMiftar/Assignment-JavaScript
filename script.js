// TASK MANAGER

// alert("alert() visar endast en ruta med ett meddelande till usern");

// // exemplet nedan sparas input i variabeln text
// const text = prompt(
//   "prompt() visar en ruta med ett meddelande OCH tar emot en input från usern så att vi kan spara input i en variabel"
// );
// // så vi kan tex logga ut variabeln text för att se värdet
// console.log(text);

let userName;

// skapa en funktion som ber usern att fylla i sitt namn
// 1. du behöver be usern att skriva sitt namn så att du kan ta emot det och spara det.
// finns det något sätt vi kan göra det här på som både visar ett textmeddelande till usern
// och tar emot en input?
function askUserName() {
  userName = prompt("please type your name");

  if (userName.length <= 0) {
    userName = prompt("Wrong, please type your name");
  } else {
    alert(`Welcome to Task Manager application ${userName}!`);
  }
  console.log(userName);
  return userName;
}

// askUserName();

// menu function
function menu() {
  const choice = parseInt(prompt("choose"));
}

// startar funktionen askUserName som i sin tur triggar menu() funktionen
askUserName();
menu();

// 1 lösning: prompt() är svaret där kan du skriva ett meddelande och ta emot input

//   // 2. vart behöver du komma åt värdet på username enligt uppgiften?
//   // är det endast i funktionen askUserName()?

//   // 2 lösning: variabeln username behöver definieras utanför funktionen för att komma åt den i menu()
//   // se ändå till att det du tar emot från prompt() sparas i variabeln username

//   // 3. kan en användare fylla i ett ogiltligt username eller kanske råka lämna det tomt?
//   // om ja, hur ska du hantera det?

//   // 3 lösning: ja det skulle råka vara tomt. Så du behöver se till att du fångar upp ett fel om input ifrån prompt är tomt

//   // 4. om usern fyller i ett giltligt username ska du välkomna usern till Task Manager appen
//   // och visa namnet på usern
//   // finns det något sätt vi kan bara visa ett textmeddelande till usern?

//   // 4: om user fyller ett gitligt namn visa ett meddelande + namnet i en alert()

//   // 5. till sist, om allt gått bra ska menu() funktion triggas och köras.
//   // när du kommer hit och allt funkar säg till Helena :) så tar vi nästa steg
//   menu();
