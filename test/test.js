function Test(str, letter) {
    return str.endsWith(letter);  // Simplified function to check if email ends with "@gmail.com"
}

function length(password){
    return password.length < 4;  // Return true if password is too short (less than 4 characters)
}

document.getElementById("submit").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Check if email ends with "@gmail.com"
    if (!Test(email, "@gmail.com")) {
        window.alert("Please enter a valid Gmail address.");
    }
    // Check if password length is less than 4 characters
    if(length(password)){
        window.alert("Your password is too short. It should be at least 4 characters.");
    }
});
