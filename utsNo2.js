document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("b").setAttribute("class", "red");
});
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("b").removeAttribute("class");
});
document.getElementById("btn3").addEventListener("click", function () {
    var value = document.getElementById("b").getAttribute("class");
    document.getElementById("class").innerHTML = value;
});

const body = document.body;
const btn1 = document.getElementById(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelectorAll(".btn3");

const newText = document.createElement("h1");
newText.textContent = "Berhasil !!";

const newText1 = document.createElement("h1");
newText1.textContent = "X RPL";




btn1.style.fontSize = "25px";
function klik1() {
    body.append(newText);
}

function klik2() {
    body.append(alert("Tombol di klik 2 kali"))
}
btn2.style.fontSize = "25px";
function mouseIn() {
    body.append(newText1);
    newText1.style.color = "red";
}
function mouseOut() {
    newText1.style.color = "green";
}
btn3.style.fontSize = "25px";
function klik3() {
    body.remove('body')
}







































