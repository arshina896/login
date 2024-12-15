function buttonclick() {
  document.getElementById("close-container").classList.add("active");
};
function closeBtn(){
  document.getElementById("close-container").classList.remove("active");
};
// registe and login 
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
});
