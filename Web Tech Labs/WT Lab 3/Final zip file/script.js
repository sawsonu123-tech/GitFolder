// Bits ID: 1956www12345 - Heera Thakur
const registrationList = [];

function createRegistrationObject(studentId, studentName, courseCode, courseTitle, semester) {
    return {
        studentId,
        studentName,
        courseCode,
        courseTitle,
        semester
    };
}

// Bits ID: 1956www12345 - Heera Thakur
function addToTable(registration) {
    const tableBody = document.getElementById("registrationTable");
    const row = document.createElement("tr");

    const fields = [
        registration.studentId,
        registration.studentName,
        registration.courseCode,
        registration.courseTitle,
        registration.semester
    ];

    fields.forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}

// Bits ID: 1956www12345 - Heera Thakur
function clearForm() {
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("courseCode").value = "";
    document.getElementById("courseTitle").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("studentId").focus();
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function buildXml() {
    const lines = [
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        "<registrations xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"registrations.xsd\">"
    ];

    registrationList.forEach((registration) => {
        lines.push("    <registration>");
        lines.push(`        <studentId>${escapeXml(registration.studentId)}</studentId>`);
        lines.push(`        <studentName>${escapeXml(registration.studentName)}</studentName>`);
        lines.push(`        <courseCode>${escapeXml(registration.courseCode)}</courseCode>`);
        lines.push(`        <courseTitle>${escapeXml(registration.courseTitle)}</courseTitle>`);
        lines.push(`        <semester>${escapeXml(registration.semester)}</semester>`);
        lines.push("    </registration>");
    });

    lines.push("</registrations>");
    return lines.join("\n");
}

function exportXml() {
    if (registrationList.length === 0) {
        alert("Add at least one registration before exporting XML");
        return;
    }

    const xmlString = buildXml();
    const blob = new Blob([xmlString], { type: "text/xml;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const tempLink = document.createElement("a");

    tempLink.href = downloadUrl;
    tempLink.download = "registrations.xml";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    URL.revokeObjectURL(downloadUrl);
}

// Bits ID: 1956www12345 - Heera Thakur
function registerCourse() {
    try {
        const studentId = document.getElementById("studentId").value.trim();
        const studentName = document.getElementById("studentName").value.trim();
        const courseCode = document.getElementById("courseCode").value.trim();
        const courseTitle = document.getElementById("courseTitle").value.trim();
        const semester = document.getElementById("semester").value.trim();

        if (studentName === "" || courseCode === "") {
            alert("Student Name and Course Code cannot be empty");
            return;
        }

        if (!/^[1-9]\d*$/.test(studentId)) {
            alert("Student ID must be a positive integer");
            return;
        }

        const registration = createRegistrationObject(
            studentId,
            studentName,
            courseCode,
            courseTitle,
            semester
        );

        registrationList.push(registration);
        addToTable(registration);
        clearForm();
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}


// Bits ID: 1956www12345 - Heera Thakur. 
// Event Handler Part B
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("registerBtn").addEventListener("click", registerCourse);
    document.getElementById("clearBtn").addEventListener("click", clearForm);
    document.getElementById("exportBtn").addEventListener("click", exportXml);
});
