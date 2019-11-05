// function

function pembagian(n1,n2) {
    var hasil = 20/5;
    return hasil;
}

document.getElementById("hasil").innerHTML = "hasilnya " + pembagian();

// function

// events

document.querySelector("button").onclick = function() {
    alert("Lorem ipsum dolor sit amet.");
}

var gambar = document.querySelector("img");

gambar.onclick = function() {
    var mySrc = gambar.getAttribute("src");
    if (mySrc === "img/1.png") {
        gambar.setAttribute("src","img/2.png");
    }
    else {
        gambar.setAttribute("src","img/1.png");
    }
}

var myButton = document.getElementById("chUser");
var myHeading = document.querySelector("h2");

function setUserName(){
    var myName = prompt("tolong masukkan nama anda ");
    localStorage.setItem("name", myName);
    myHeading.textContent = "nama saya " + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "nama saya " + storedName;
}

myButton.onclick = function(){
    setUserName();
}

// events

// loop

let a = "";
for(let i=1;i<=7;i++) {
    a += "#";
    console.log(a);
}

for (let i=1;i<=100;i++) {
    let output ="";
    if (i % 3 == 0) output += "fizz";
    if (i % 5 == 0) output += "buzz"; 
    console.log(output || i);
}
// loop