var lg = document.getElementById("popup"),
at = lg.querySelector("a");

//Check if the username session variable is set
if ('<?php echo isset($_SESSION["username"]); ?>' === '1') {
    // Display a personalized welcome message
    console.log('Welcome, <?php echo $_SESSION["username"]; ?>!');
}

// Get the username parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

function startnotif(){
    notifs.style.display = "block"
}

// If the username parameter is set, display a personalized welcome message
if (username) {
  console.log('Welcome, ' + username + '!');
  contain.style.display = 'none'
} else{
    setTimeout(startnotif, 2000);
    /*window.onload = function() {
        notifs.style.display = 'block';
    };*/
    popup.innerHTML = '<div style="color: #fff;"><p>Please sign up to receive our latest updates and news via email.</p><button onclick="loginrefer()">Sign Up</button><button onclick="closePopup()">Close</button></div>'
}