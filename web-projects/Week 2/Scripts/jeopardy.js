let qaGeo = [
    ["What is the capital of Italy?", "Rome"],
    ['Which country is known as the Land of the Rising Sun?', "Japan"],
    ['What is the longest river in the world?', 'Nile River'],
    ['Which Mountain range is home to Mount Everest', 'Himalayas']
];

let qaMov = [
    ['Who played the character of Jack Dawson in Titanic?', 'Leonardo DiCaprio'],
    ['What was the name of the Scientist from the movie, Back to the Future?', 'Doc Brown'],
    ['Who directed the movie, Inception', 'Christopher Nolan'],
    ['Which 2001 film won the Academy Award for Best Picture and featured a character named Maximus?', 'Gladiator']
];

let qaHTML = [
    ['What does HTML stand for?', 'HyperText Markup Language'],
    ['Which tag is used to create a hyperlink in HTML?', '<a>'],
    ['What is the purpose of the <div> tag in HTML?', 'It is used as a container for grouping content and applying CSS styles.'],
    ['In HTML5, what element is used to specify the navigation links in a document?', '<nav>']
];

let qaJS = [
    ['What does alert("Hello!") do in JavaScript?', 'It displays a pop-up message with the text "Hello!"'],
    ['What is the correct syntax to create a variable in JavaScript?', 'let variableName; or var variableName; or const variableName;'],
    ['What does === mean in JavaScript?', 'It checks both value and type equality (strict equality).'],
    ['What is the purpose of the bind() method in JavaScript?', 'It creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the function is called.']
];

let qaCSS = [
    ['What does CSS stand for?', 'Cascading Style Sheets'],
    ['Which property is used to change the background color of an element?', 'background-color'],
    ['What is the purpose of the `box-sizing` property in CSS?', 'It defines how the total width and height of an element are calculated, including padding and border.'],
    ['What property is used to change the text color in CSS?', 'color']
];

function displayQuestion(event) {
    const button = event.target.closest('button');
    const imgValue = button.querySelector("img")?.alt;

    if (!imgValue) return;

    const categoryIndex = button.closest("td")?.cellIndex;
    if (categoryIndex === undefined) return;

    let selectedCategory;
    let valueIndex;

    switch (categoryIndex) {
        case 0:
            selectedCategory = qaGeo;
            break;
        case 1:
            selectedCategory = qaMov;
            break;
        case 2:
            selectedCategory = qaHTML;
            break;
        case 3:
            selectedCategory = qaJS;
            break;
        case 4: // New case for CSS
            selectedCategory = qaCSS;
            break;
        default:
            return;
    }

    const valueIndexMap = {
        '100': 0,
        '200': 1,
        '300': 2,
        '400': 3
    };

    valueIndex = valueIndexMap[imgValue];
    if (valueIndex === undefined) return;

    const question = selectedCategory[valueIndex][0];
    const answer = selectedCategory[valueIndex][1];

    if (document.querySelector('.msgBox')) {
        return;
    }

    const body = document.body;
    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    const msg = document.createElement("h1");
    msg.textContent = question;
    panel.appendChild(msg);

    const btn = document.createElement("button");
    btn.textContent = "Show Answer";
    btn.classList.add("btn");
    panel.appendChild(btn);

    btn.addEventListener("click", function () {
        const answerMsg = document.createElement("p");
        answerMsg.textContent = "Answer: " + answer;
        panel.appendChild(answerMsg);

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.classList.add("btn");
        panel.appendChild(closeBtn);

        closeBtn.addEventListener("click", function() {
            panel.remove();
        });
    });
}

document.querySelectorAll(".img-button").forEach(button => {
    button.addEventListener("click", displayQuestion);
});
