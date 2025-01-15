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

