var menu = document.querySelector(".hamburger")
var ul1 = document.querySelector(".ul1")
var link = document.querySelectorAll("#link")

menu.addEventListener("click", () =>{
    menu.classList.toggle("active")
    ul1.classList.toggle("active")
})

link.forEach(l => l.addEventListener("click", function(){
    menu.classList.remove("active")
    ul1.classList.remove("active")
}))

var element = document.querySelector('form');
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var btn = document.querySelector(".btn")
var storedemail = localStorage.getItem("email")
var storedpass = localStorage.getItem("password")

element.addEventListener('submit', event => {
    event.preventDefault()
  })

btn.addEventListener("click", function (){
    if(email.value == storedemail && password.value == storedpass){
        email.style.border = "1px solid green"
        password.style.border = "1px solid green"
        window.location.href = "storesteam.html"
    }
    else{
        email.style.border = "1px solid red"
        password.style.border = "1px solid red"
    }
})