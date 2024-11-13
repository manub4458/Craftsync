<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $tg = $_POST['tg'];
    $email = $_POST['email'];
    $direction = $_POST['direction'];
    $budget = $_POST['budget'];

    $to = "thebansalmanav@gmail.com";
    $subject = "New Form Submission";
    $message = "Name: $name\nSurname: $surname\nTelegram: $tg\nEmail: $email\nDirection: $direction\nBudget: $budget";
    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! We will contact you soon.";
    } else {
        echo "Error sending email.";
    }
}
?>
