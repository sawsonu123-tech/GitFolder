<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur


include "db.php";

// Get data
$student_id = $_POST['student_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$course_id = $_POST['course_id'];
$semester = $_POST['semester'];
$contact = $_POST['contact'];
$address = $_POST['address'];

// Validation
if (
    empty($student_id) || empty($name) || empty($email) ||
    empty($course_id) || empty($semester) || empty($contact) || empty($address)
) {
    die("All fields required");
}

// Contact validation
if (!preg_match("/^[0-9]{10}$/", $contact)) {
    die("Invalid contact number");
}

// Duplicate check
$check = $conn->prepare("SELECT student_id FROM student WHERE student_id=?");
$check->bind_param("i", $student_id);
$check->execute();
$res = $check->get_result();

if ($res->num_rows > 0) {
    die("Student ID already exists");
}

// Insert
$stmt = $conn->prepare("INSERT INTO student 
(student_id, student_name, email, course_id, semester, contact, address) 
VALUES (?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ississs", $student_id, $name, $email, $course_id, $semester, $contact, $address);

if ($stmt->execute()) {
    header("Location: display.php");
    exit();
} else {
    echo "Error: " . $conn->error;
}
?>