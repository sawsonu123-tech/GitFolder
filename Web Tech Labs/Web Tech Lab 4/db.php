<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur

$conn = new mysqli("localhost", "root", "", "");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create DB
$conn->query("CREATE DATABASE IF NOT EXISTS collegeDB_StudentID");

// Select DB
$conn->select_db("collegeDB_StudentID");

// Create Course Table
$conn->query("CREATE TABLE IF NOT EXISTS course (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
)");

// Create Student Table (FIXED)
$conn->query("CREATE TABLE IF NOT EXISTS student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    course_id INT,
    semester INT,
    contact VARCHAR(15),
    address TEXT,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
    ON DELETE CASCADE
)");
?>