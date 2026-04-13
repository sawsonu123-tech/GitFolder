<?php
// Student ID: 1956www42345
// Student Name: Heera Thakur

include "db.php";

// Fetch data using JOIN
$sql = "SELECT s.student_id, s.student_name, s.email, c.course_name, 
               s.semester, s.contact, s.address
        FROM student s
        JOIN course c ON s.course_id = c.course_id";

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>
    <style>
        body {
            font-family: Arial;
            background: #f4f7f6;
            text-align: center;
        }

        h2 {
            margin-top: 20px;
        }

        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 90%;
            background: white;
        }

        th, td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        th {
            background: #2c3e50;
            color: white;
        }

        tr:hover {
            background: #f1f1f1;
        }

        a {
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 4px;
        }

        .edit {
            background: #3498db;
            color: white;
        }

        .delete {
            background: #e74c3c;
            color: white;
        }
    </style>
</head>
<body>

<h2>Student Records</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Semester</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Action</th>
    </tr>

<?php
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>{$row['student_id']}</td>
            <td>{$row['student_name']}</td>
            <td>{$row['email']}</td>
            <td>{$row['course_name']}</td>
            <td>{$row['semester']}</td>
            <td>{$row['contact']}</td>
            <td>{$row['address']}</td>
            <td>
                <a class='edit' href='edit.php?id={$row['student_id']}'>Edit</a>
                <a class='delete' href='delete.php?id={$row['student_id']}' 
                   onclick=\"return confirm('Are you sure?')\">Delete</a>
            </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='8'>No records found</td></tr>";
}
?>

</table>

</body>
</html>