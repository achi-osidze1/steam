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



var box = document.querySelector(".box")
var error1 = document.querySelector("#error1")
var error2 = document.querySelector("#error2")
var error3 = document.querySelector("#error3")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var passowrdp = document.querySelector("#passwordp")
var confirmpassword = document.querySelector(".confirmpassword")
var select = document.querySelector("#sel")
var check = document.querySelector("#check")
var inp = document.querySelector("#inp")
var btn = document.querySelector(".btn")



email.addEventListener("click", function(){
    email.style.border = '1px solid white'
    password.style.border ="none"
    confirmpassword.style.border ="none"
    select.style.border = 'none'
})

password.addEventListener("click", function(){
    password.style.border = '1px solid white'
    email.style.border ="none"
    confirmpassword.style.border ="none"
    select.style.border = 'none'
})

confirmpassword.addEventListener("click", function(){
    confirmpassword.style.border = '1px solid white'
    email.style.border ="none"
    password.style.border ="none"
    select.style.border = 'none'
})

select.addEventListener("click", function(){
    select.style.border = '1px solid white'
    email.style.border = 'none'
    password.style.border ="none"
    confirmpassword.style.border ="none"
})

var element = document.querySelector('form');

element.addEventListener('submit', event => {
    event.preventDefault()
  })

btn.addEventListener("click", function(){

    if(email.value == "" && password.value == "" && confirmpassword.value == ""){
        email.style.border = "1px solid red"
        password.style.border = "1px solid red"
        confirmpassword.style.border = "1px solid red"
        box.style.height = "60px"
        box.style.width = "100%"
        box.style.backgroundColor = "#171a21"
        box.style.border = '1px solid red'
        error1.innerHTML = "Please enter a valid email address."
        error1.style.color = "white"
        error1.style.fontSize ="small"
        error2.innerHTML = "Please fill in the Password field."
        error2.style.color = "white"
        error2.style.fontSize ="small"
        error3.innerHTML = "And find more errors highlighted below."
        error3.style.color = "white"
        error3.style.fontSize ="small"
    }

    if(email.value != ""){
        email.style.border = "1px solid green"
        error1.style.display = "none"
    }

    if(password.value.length >= 8 && confirmpassword.value.length == password.value.length){
        password.style.border = "1px solid green"
        confirmpassword.style.border = "1px solid green"
        passwordp.style.display = "none"
    }

    if(password.value.length < 8 && confirmpassword.value.length == password.value.length){
        password.style.border = "1px solid red"
        confirmpassword.style.border = "1px solid red"
        passwordp.innerHTML = "Password must contain 8 characters!"
        passwordp.style.color = "red"
        passwordp.style.fontWeight = "normal"
    }

    else if(password.value == confirmpassword.value){
        password.style.border = "1px solid green"
        confirmpassword.style.border = "1px solid green"
        passwordp.style.display = "none"
        error2.style.display = "none"
    }

    else if(password.value != confirmpassword.value){
        password.style.border = "1px solid red"
        confirmpassword.style.border = "1px solid red"
    }

    if(inp.checked == true){
        check.style.border = "1px solid green"
        error3.style.display = "none"
    }

    else if(inp.checked == false){
        check.style.border = "1px solid red"
    }

    if(email.value != "" && password.value.length >= 8 && confirmpassword.value.length == password.value.length && password.value == confirmpassword.value && inp.checked == true){
        box.style.display = "none"

        var obj = {
            user:email.value,
            pass:password.value,
        }

        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        console.log(obj);           
        window.location.href = "steamlogin.html"
    }
})