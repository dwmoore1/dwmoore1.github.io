const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
const mySrc = myImage.getAttribute("src");
if (mySrc === "images/leaf.jpg") {
    myImage.setAttribute("src", "images/meal-prep.jpg");
} else {
    myImage.setAttribute("src", "images/leaf.jpg")
}
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Healthy Eating Club, Welcome ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Healthy Eating Club, Welcome ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

/*What is Javascipt */

const button1 = document.querySelector("#b1");

button1.addEventListener("click", updateName);

function updateName() {
  const name1 = prompt("Enter a new name");
  button1.textContent = `Player 1: ${name1}`;
}

/*First splash into javascript */

/*Troublshooting */

/*Variables */

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
    buttonA.textContent = "Try Again!";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
};

/*Numbers and Operators*/

const btn = document.querySelector("#button_2");
const txt = document.querySelector("#para_2")

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine has stopped.";
    }
}

/*Strings in javascript*/

const button3 = document.querySelector("#button_3");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button3.addEventListener("click", greet);
/*Arrays */

/*Silly story generator */

/*Conditionals */

const select = document.querySelector("select");
const para = document.querySelector("#p1");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

/*Looping Code */

const btn1 = document.querySelector("#buttonL");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn1.addEventListener("click", draw);


/*Functions */

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

/*Building Functions */

/*Function Returns */

/*Events Intro */

const btnE = document.querySelector("#button_E");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btnE.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

/*Event bubbling */

const output1 = document.querySelector("#output1");
function handleClick(e) {
  output1.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const buttonB = document.querySelector("#button_B");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
buttonB.addEventListener("click", handleClick);


/*Image gallery */

