<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "mail@mail.ru";
$sub = "Сообщение с сайта";
 
/* Формат письма */
$mes = "Сообщение с сайта\n
Имя отправителя: $name 
Телефон отправителя: $tel
$message";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from))
{
 header('Refresh: 1; URL=http://site.ru');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо отправлено, через 1 секунду вы вернетесь на сайт</body>';
}
else
 {
 header('Refresh: 1; http://site.ru');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 1 секунду вы вернетесь на сайт</body>';
 }
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>
