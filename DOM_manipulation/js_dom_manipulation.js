

const container = document.querySelector("#container");
//const paragraph = document.createElement("h3");
const paragraph = document.createElement('p');
paragraph.style.cssText = "color: red"; 
paragraph.textContent = "Hey, I'm Red!";

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.cssText = "color: blue";

const containerDiv = document.createElement("div");
containerDiv.style.cssText = "background : pink; border-Color:black";
containerDiv.classList.add("container");

const newDiv = document.querySelector(".container");
const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

const paragraph1 = document.createElement("p");
paragraph1.textContent = "ME TOO!";

containerDiv.append(header1, paragraph1);