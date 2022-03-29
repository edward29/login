const myForm = document.querySelector(".myForm");
const pass = document.querySelector("#pass");
const userName = document.querySelector("#username")
const eye = document.getElementById("eye");
const btn = document.querySelector("#btn-submit");
const alert = document.querySelector(".alert-container");
const alertBtn = document.querySelector(".alert-btn");

var show = false;
function showPass(){
    
    if (show) {
        pass.setAttribute("type", "password");
        eye.style.color = "#746666";
        show = false;
    } else {
        pass.setAttribute("type", "text");
        eye.style.color = "#46a4f1";
        show = true;
    }
}


const warningAlert = {
    getAlert(){
        return alert.style.display = "block";
    },
    getCloseAlert(){
        alertBtn.addEventListener('click', () => {
            return alert.style.display = "none";
        });
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (userName.value === "" || pass.value === "") {
        
        warningAlert.getAlert();
        warningAlert.getCloseAlert();
    } else {
        myForm.submit();
    }
});