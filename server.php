<?php
$subject = $_POST['email'];
$message = $_POST['subject'] . "\r\n" . $_POST['name'] . "\r\n" . $_POST['email'] . "\r\n" . $_POST['phone'] . "\r\n" . $_POST['message'];

$to = 'hello@ioxo.co';
$headers = 'From:  hallo@uhrenservice-ffm.de' . "\r\n";

mail($to, $subject, $message, $headers);
?>