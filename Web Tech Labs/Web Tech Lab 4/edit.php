<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur

include "db.php";

if (!isset($_GET['id']) || empty($_GET['id'])) {
    die("Invalid access - ID missing");
}

$id = $_GET['id'];

$stmt = $conn->prepare("SELECT * FROM student WHERE student_id=?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if (!$row) {
    die("Student not found");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header id="main-header">
    <h1 class="header-title">Edit Student</h1>
</header>

<div id="content-area">
<div id="registration-container">

<form action="update.php" method="POST">

    <input type="hidden" name="student_id" value="<?php echo $row['student_id']; ?>">

    <div class="input-field-wrapper">
        <label class="field-label">Full Name</label>
        <input type="text" class="base-input" name="name" value="<?php echo $row['student_name']; ?>" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Email</label>
        <input type="email" class="base-input" name="email" value="<?php echo $row['email']; ?>" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Course</label>
        <select class="base-input" name="course_id" required>
            <?php
            $courses = $conn->query("SELECT * FROM course");
            while ($c = $courses->fetch_assoc()) {
                $selected = ($c['course_id'] == $row['course_id']) ? "selected" : "";
                echo "<option value='{$c['course_id']}' $selected>{$c['course_name']}</option>";
            }
            ?>
        </select>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Semester</label>
        <input type="number" class="base-input" name="semester" value="<?php echo $row['semester']; ?>" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Contact</label>
        <input type="text" class="base-input" name="contact" value="<?php echo $row['contact']; ?>" required>
    </div>

    <div class="input-field-wrapper">
        <label class="field-label">Address</label>
        <textarea class="base-input text-area-input" name="address"><?php echo $row['address']; ?></textarea>
    </div>

    <button type="submit" id="submit-btn">Update</button>

</form>

</div>
</div>

<footer id="main-footer">
    <p>ID: <b>YOUR_STUDENT_ID</b>; Name: <b>YOUR_NAME</b></p>
</footer>

</body>
</html>