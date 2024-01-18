// This is alert for users!

const MESSAGE = window.prompt("Hello can you add your Username here !")

console.log(MESSAGE) ;
let message ;

message = window.alert("Thank you! " + MESSAGE) ;

document.getElementById("username").innerHTML = "Thank you for visiting my website " + message ; 