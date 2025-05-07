const myImage = document.querySelector(".qiqi-toggle");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/qiqi 3.png") {
        myImage.setAttribute("src", "images/qiqi 2.png");
    } else {
        myImage.setAttribute("src", "images/qiqi 3.png");
    }
});

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Bem-vindo(a) ao meu fanclub, ${myName}`;
// }

// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Bem-vindo(a) ao meu fanclub, ${storedName}`;
// }

// myButton.addEventListener("click", () => {
//     setUserName();
// });

// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem("name", myName);
//         myHeading.textContent = `Bem-vindo(a) ao meu fanclub, ${myName}`;
//     }
// }
