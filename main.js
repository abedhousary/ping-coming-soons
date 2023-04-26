let emailinp = document.querySelector(".cus-in");
let message = document.querySelector(".message");
let btn = document.querySelector(".notify");
function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
btn.onclick = () => {
    if (!isValidEmail()){
        emailinp.style.borderColor = "hsl(354, 100%, 66%)";
        message.classList.remove("hide")
    }else{
        message.classList.add("hide");
        emailinp.style.borderColor = "hsl(223, 100%, 88%)";
    }
}