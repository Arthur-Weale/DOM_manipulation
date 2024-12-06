



const list = document.querySelector("ul");
const itemInput = document.querySelector("#item");
const btn = document.querySelector("#btn");

const addItemButton = function(){
    btn.addEventListener("click", () => {
        const groceryItem = itemInput.value;
        console.log(groceryItem);
        itemInput.value = "";
    })
}

addItemButton();

itemInput.focus();
const newlist = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button");

newlist.appendChild(span);
newlist.appendChild(button);
//span.textContent = groceryItem;
button.textContent = "Delete";
list.appendChild(newlist);

button.addEventListener("click", () => {
    newlist.remove();
})