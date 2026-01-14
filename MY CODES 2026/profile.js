const profileUser = localStorage.getItem("currentUser");
if(!profileUser){ window.location.href="index.html"; }

const allUsers = JSON.parse(localStorage.getItem("users")) || {};
const userData = allUsers[profileUser];

document.getElementById("profileName").innerText = "Username: " + profileUser;
document.getElementById("profilePoints").innerText = "Total Points: " + userData.points;
document.getElementById("profileQuizzes").innerText = "Quizzes Completed: " + userData.quizzes;

function goToDashboard(){ window.location.href = "dashboard.html"; }
