<?php

$drone = $_POST['drone'];
$subject = $_POST['subject'];
$nickname = $_POST['nickname'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_body = "Vous avez reçu un nouveau message de ".$nickname." Statut: " .$drone. " Adresse email: ".$email. " Le message: ".$message. ".";
$to = "eva.barbaro08@gmail.com";

if (mail($to, $subject, $email_body)) {
    header("Location: thank-you.php");
} else {
    echo "Mail not sent";
}

?>