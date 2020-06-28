<?php

$to = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$headers = "Message from E-mail Client:";

mail($to,$subject,$message,$headers);


?>