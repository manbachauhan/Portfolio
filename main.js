// Side menu code
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// submit
function Message() {
    alert("Your Message is Successfully Send ...");
}


//typing effect
var typed = new Typed(".auto-input", {
    strings: [" ", "Web Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
