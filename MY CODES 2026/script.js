let isSignup = false;

function toggleForm(){
    isSignup = !isSignup;
    document.getElementById("title").innerText = isSignup ? "Sign Up" : "Sign In";
    document.getElementById("actionBtn").innerText = isSignup ? "Sign Up" : "Sign In";
    document.getElementById("toggle-text").innerHTML = isSignup ?
        `Already have an account? <span onclick="toggleForm()">Sign In</span>` :
        `New user? <span onclick="toggleForm()">Sign Up</span>`;
    document.getElementById("message").innerText = "";
}

function validate(username,password){
    if(username.length<4){ return "Username must be 4+ characters"; }
    if(password.length<6){ return "Password must be 6+ characters"; }
    if(!/\d/.test(password)){ return "Password must contain a number"; }
    return "";
}

document.getElementById("actionBtn").addEventListener("click",()=>{
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if(!username || !password){ document.getElementById("message").innerText="All fields required"; return; }

    const msg = validate(username,password);
    if(msg){ document.getElementById("message").innerText=msg; return; }

    let users = JSON.parse(localStorage.getItem("users"))||{};

    if(isSignup){
        if(users[username]){ document.getElementById("message").innerText="Username exists"; return; }
        users[username] = {password: password, points: 0, quizzes:0};
        localStorage.setItem("users",JSON.stringify(users));
        document.getElementById("message").innerText="Signup successful! Please sign in.";
        toggleForm();
    } else {
        if(users[username] && users[username].password===password){
            localStorage.setItem("currentUser",username);
            window.location.href="dashboard.html";
        } else document.getElementById("message").innerText="Invalid username or password";
    }
});
