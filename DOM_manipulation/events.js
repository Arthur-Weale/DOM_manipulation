



function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const button = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    console.log(e);
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});
