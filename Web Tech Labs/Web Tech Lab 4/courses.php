<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur

include "db.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $course = $_POST['course_name'];

    $stmt = $conn->prepare("INSERT INTO course (course_name) VALUES (?)");
    $stmt->bind_param("s", $course);
    $stmt->execute();

    echo "<script>alert('Course Added Successfully');</script>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Add Course</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header id="main-header">
    <h1 class="header-title">Add Course</h1>
</header>

<div id="content-area">
<div id="registration-container">

<form method="POST">

    <div class="input-field-wrapper">
        <label class="field-label">Course Name</label>
        <input type="text" class="base-input" name="course_name" required>
    </div>

    <button type="submit" id="submit-btn">Add Course</button>

</form>

</div>
</div>

<footer id="main-footer">
    <p>ID: <b>YOUR_STUDENT_ID</b>; Name: <b>YOUR_NAME</b></p>
</footer>

</body>
</html>