/* Auto Generate Student ID from Email */
function generateID() {
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Only generate ID if the email format is valid per requirements
    if (emailRegex.test(email)) {
        let id = email.split("@")[0];
        document.getElementById("studentId").value = id;
        document.getElementById("idError").innerText = "";
    } else {
        document.getElementById("studentId").value = "";
    }
}

/* Auto Calculate Year of Birth from Age */
function autoYOB() {
    let age = document.getElementById("age").value;
    if (age !== "" && age >= 1 && age <= 100) {
        let currentYear = new Date().getFullYear();
        document.getElementById("yob").value = currentYear - age;
        document.getElementById("yobError").innerText = "";
    } else {
        document.getElementById("yob").value = "";
    }
}

/* Main Form Validation */
function validateForm() {
    clearMessages();
    let valid = true;

    /* Get Values */
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let yob = document.getElementById("yob").value;
    let address = document.getElementById("address").value; // Trim handled per line logic
    let mobile = document.getElementById("mobile").value.trim();
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value.trim();
    let id = document.getElementById("studentId").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    /* NAME: Not empty, alphabets only, 3-10 chars */
    let nameRegex = /^[A-Za-z]{3,10}$/;
    if (name === "") {
        showError("nameError", "Name is required");
        valid = false;
    } else if (!nameRegex.test(name)) {
        showError("nameError", "3-10 alphabets only");
        valid = false;
    }

    /* AGE: Not empty, numbers 1-100 */
    if (age === "") {
        showError("ageError", "Age is required");
        valid = false;
    } else if (isNaN(age) || age < 1 || age > 100) {
        showError("ageError", "Age must be 1 to 100");
        valid = false;
    }

    /* GENDER: One must be selected */
    let genders = document.getElementsByName("gender");
    let genderSelected = Array.from(genders).some(g => g.checked);
    if (!genderSelected) {
        showError("genderError", "Select gender");
        valid = false;
    }

    /* YEAR OF BIRTH: Not empty, must match age */
    let currentYear = new Date().getFullYear();
    let expectedYob = currentYear - age;
    if (yob === "") {
        showError("yobError", "Year of Birth required");
        valid = false;
    } else if (parseInt(yob) !== expectedYob) {
        showError("yobError", "Does not match Age");
        valid = false;
    }

    /* ADDRESS: Not empty, max 3 lines, max 15 chars per line */
    if (address.trim() === "") {
        showError("addressError", "Address is required");
        valid = false;
    } else {
        let lines = address.split("\n");
        if (lines.length > 3) {
            showError("addressError", "Maximum 3 lines allowed");
            valid = false;
        } else {
            for (let line of lines) {
                if (line.length > 15) {
                    showError("addressError", "Each line max 15 characters");
                    valid = false;
                    break;
                }
            }
        }
    }

    /* MOBILE: Not empty, 10 digits only */
    let mobileRegex = /^[0-9]{10}$/;
    if (mobile === "") {
        showError("mobileError", "Mobile required");
        valid = false;
    } else if (!mobileRegex.test(mobile)) {
        showError("mobileError", "Exactly 10 digits");
        valid = false;
    }

    /* STATE: Required */
    if (state === "") {
        showError("stateError", "Select state");
        valid = false;
    }

    /* EMAIL: Not empty, valid format */
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showError("emailError", "Email is required");
        valid = false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Invalid email format");
        valid = false;
    }

    /* STUDENT ID: Not empty (auto-generated) */
    if (id === "") {
        showError("idError", "ID not generated");
        valid = false;
    }

    /* PASSWORD: Not empty, 9+ chars, 1 num, 1 special */
    let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{9,}$/;
    if (password === "") {
        showError("passwordError", "Password required");
        valid = false;
    } else if (password.length <= 8) {
        showError("passwordError", "Must be more than 8 characters");
        valid = false;
    } else if (!passRegex.test(password)) {
        showError("passwordError", "Need 1 number & 1 special char");
        valid = false;
    } else {
        document.getElementById("passwordSuccess").innerText = "Strong Password";
    }

    /* CONFIRM PASSWORD: Not empty, must match */
    if (confirm === "") {
        showError("confirmError", "Confirm your password");
        valid = false;
    } else if (confirm !== password) {
        showError("confirmError", "Does not match");
        valid = false;
    } else {
        document.getElementById("confirmSuccess").innerText = "Matching";
    }

    /* FINAL SUBMISSION */
    if (valid) {
        document.getElementById("finalSuccess").innerText = "Form submitted successfully!";
        // return true; // Uncomment this to actually allow form submission
    }

    return false; // Prevent page refresh for demonstration
}

function showError(id, msg) {
    document.getElementById(id).innerText = msg;
}

function clearMessages() {
    let errors = document.getElementsByClassName("error");
    let successes = document.getElementsByClassName("success");
    for (let e of errors) e.innerText = "";
    for (let s of successes) s.innerText = "";
    document.getElementById("finalSuccess").innerText = "";
}