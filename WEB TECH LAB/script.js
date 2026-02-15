/* Auto Generate Student ID from Email */
function generateID() {

    let email = document.getElementById("email").value.trim();

    if (email.includes("@")) {

        let id = email.split("@")[0];
        document.getElementById("studentId").value = id;
    }
}


/* Auto Calculate Year of Birth from Age */
function autoYOB() {

    let age = document.getElementById("age").value;

    if (age !== "") {

        let year = new Date().getFullYear();
        let yob = year - age;

        document.getElementById("yob").value = yob;
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
    let address = document.getElementById("address").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value.trim();
    let id = document.getElementById("studentId").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;


    /* NAME : 3-10 Alphabets */
    let nameRegex = /^[A-Za-z]{3,10}$/;

    if (!nameRegex.test(name)) {

        showError("nameError", "Only letters (3-10 chars)");
        valid = false;
    }


    /* AGE : 1-100 */
    if (age === "" || age < 1 || age > 100) {

        showError("ageError", "Age must be 1 to 100");
        valid = false;
    }


    /* GENDER : Required */
    let genders = document.getElementsByName("gender");
    let selected = false;

    for (let g of genders) {

        if (g.checked) selected = true;
    }

    if (!selected) {

        showError("genderError", "Select gender");
        valid = false;
    }


    /* YEAR OF BIRTH : Must match Age */
    let currentYear = new Date().getFullYear();
    let expectedYob = currentYear - age;

    if (yob === "" || yob != expectedYob) {

        showError("yobError", "Must match age");
        valid = false;
    }


    /* ADDRESS : Max 3 Lines, 15 chars each */

    if (address === "") {

        showError("addressError", "Address cannot be empty");
        valid = false;

    } else {

        let lines = address.split("\n");

        if (lines.length > 3) {

            showError("addressError", "Maximum 3 lines allowed");
            valid = false;

        } else {

            for (let i = 0; i < lines.length; i++) {

                if (lines[i].length > 15) {

                    showError(
                        "addressError",
                        "Each line max 15 characters"
                    );

                    valid = false;
                    break;
                }
            }
        }
    }


    /* MOBILE : Exactly 10 Digits */
    let mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {

        showError("mobileError", "10 digits only");
        valid = false;
    }


    /* STATE : Required */
    if (state === "") {

        showError("stateError", "Select state");
        valid = false;
    }


    /* EMAIL : Valid Format */
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        showError("emailError", "Invalid email");
        valid = false;
    }


    /* STUDENT ID : Auto Generated */
    if (id === "") {

        showError("idError", "ID not generated");
        valid = false;
    }


    /* PASSWORD : Strong */
    let passRegex =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{9,}$/;

    if (!passRegex.test(password)) {

        showError(
            "passwordError",
            "Min 9 chars, 1 number, 1 special"
        );

        valid = false;

    } else {

        document.getElementById("passwordSuccess").innerText =
            "Strong Password";
    }


    /* CONFIRM PASSWORD : Match */
    if (confirm === "" || confirm !== password) {

        showError("confirmError", "Not matching");
        valid = false;

    } else {

        document.getElementById("confirmSuccess").innerText =
            "Matching";
    }


    /* FINAL SUCCESS MESSAGE */
    if (valid) {

        document.getElementById("finalSuccess").innerText =
            "Form submitted successfully!";
    }


    return valid;
}


/* Show Error Message */
function showError(id, msg) {

    document.getElementById(id).innerText = msg;
}


/* Clear All Messages */
function clearMessages() {

    let errors = document.getElementsByClassName("error");
    let success = document.getElementsByClassName("success");

    for (let e of errors) {
        e.innerText = "";
    }

    for (let s of success) {
        s.innerText = "";
    }

    document.getElementById("finalSuccess").innerText = "";
}
