const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const signUp = document.getElementsByClassName('btntwo')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

signUp.addEventListener('click', () => {
    prompt("Enter your username")
    prompt("Enter your password")
    alert("Succesfully signUp")
})