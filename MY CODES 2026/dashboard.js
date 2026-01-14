const user = localStorage.getItem("currentUser");
if(!user) window.location.href="index.html";

const users = JSON.parse(localStorage.getItem("users"))||{};
const currentUser = users[user];

document.getElementById("welcome").innerText = "Welcome, "+user+"!";
document.getElementById("points").innerText = currentUser.points;
document.getElementById("quizzes").innerText = currentUser.quizzes;

function goToProfile(){ window.location.href="profile.html"; }
function goToMain(){ window.location.href="main.html"; }
function goToTasks(){ window.location.href="tasks.html"; }

function logout(){
    localStorage.removeItem("currentUser");
    window.location.href="index.html";
}

