<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur


if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    die("Invalid Access");
}

include "db.php";

$student_id = $_POST['student_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$course_id = $_POST['course_id'];
$semester = $_POST['semester'];
$contact = $_POST['contact'];
$address = $_POST['address'];

if (empty($name) || empty($email)) {
    die("All fields required");
}

$stmt = $conn->prepare("UPDATE student 
SET student_name=?, email=?, course_id=?, semester=?, contact=?, address=? 
WHERE student_id=?");

$stmt->bind_param("ssiissi", $name, $email, $course_id, $semester, $contact, $address, $student_id);

if ($stmt->execute()) {
    header("Location: display.php");
    exit();
} else {
    echo "Error: " . $conn->error;
}
?>