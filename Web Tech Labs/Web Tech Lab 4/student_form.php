<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur

include "db.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Course Registration</title>
        <link rel="stylesheet" href="style.css">
</head>
<body>

<header id="main-header">
    <h1 class="header-title">Course Registration</h1>
</header>

<div id="content-area">
    <div id="registration-container">
        <form name="studentForm" action="process_student.php" method="POST">

    <div class="input-field-wrapper">
        <label class="field-label">Full Name</label>
        <input type="text" class="base-input" name="name" placeholder="John Doe" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Student ID</label>
        <input type="number" class="base-input" name="student_id" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Email Address</label>
        <input type="email" class="base-input" name="email" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Program</label>
        <select name="course_id" required>
            <option value="">Choose a program...</option>

            <?php
            include "db.php";
            $result = $conn->query("SELECT * FROM course");

            while ($row = $result->fetch_assoc()) {
                echo "<option value='".$row['course_id']."'>".$row['course_name']."</option>";
            }
            ?>
        </select>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Current Semester</label>
        <input type="number" class="base-input" name="semester" min="1" max="8" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Contact Number</label>
        <input type="text" class="base-input" name="contact" pattern="[0-9]{10}" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Residential Address</label>
        <textarea name="address" required></textarea>
    </div>

    <button type="submit" id="submit-btn">Complete Registration</button>
</form>
    </div>
</div>

<footer id="main-footer">
    <p>ID: <b>1956www42345</b> | Name: <b>Heera Thakur</b></p>
</footer>

</body>
</html>