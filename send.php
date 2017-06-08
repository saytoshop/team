<?php
$name       = @trim(stripslashes($_POST['name']));
$from       = @trim(stripslashes($_POST['email']));
$subject    = "Сообщение с сайта ";
$message    = @trim(stripslashes($_POST['comment']));
$link       = @trim(stripslashes($_POST['link']));
if (!empty($link)) return;
if ($name.$from.$message=="") return;
$to   		= '2580744@gmail.com';//replace with your email
$msg = 'Имя: '.$name.'
email: '.$from.'
Сообщение: '.$message;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: {info@saytoshop.ru} <{info@saytoshop.ru}>\r\n";
$headers .= "Reply-To: <{$from}>\r\n";
$headers .= "Subject: {$subject}\r\n";
$headers .= "X-Mailer: PHP/".phpversion()."\r\n";
mail($to, $subject, $msg, $headers);
return "ok";
