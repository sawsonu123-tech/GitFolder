<?php
include "db.php";

$id = $_GET['id'];

$stmt = $conn->prepare("DELETE FROM student WHERE student_id=?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    header("Location: display.php");
    exit();
} else {
    echo "Error";
}
?>