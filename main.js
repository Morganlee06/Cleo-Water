const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})

const popup = document.querySelector('.popup')
const close = document.querySelector('.close')

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    }, 2000)
}

close.addEventListener('click', () => {
    popup.style.display = "none"
})





document.querySelector("#cookies-btn").addEventListener("click", () => {
    cookies.style.display = "none";
    setCookie("cookies", true, 30);
})


setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path/"
}

function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }