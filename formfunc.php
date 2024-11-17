<?php
if ($_POST['submit']) {
	if ($_POST['userFirstName']) {
		$firstName = strip_tags($_POST['userFirstName']);
	}
	if ($_POST['userLastName']) {
		$lastName = strip_tags($_POST['userLastName']);
	}
	if ($_POST['userEmail']) {
		$email = strip_tags($_POST['userEmail']);
	}
	if ($_POST['userPhone']) {
		$phone = strip_tags($_POST['userPhone']);
	}
}
// Первый вариант
$user = `$firstName . " " . $userLastName . " " . $userEmail . " " . $userPhone`;

file_put_contents("testfile.txt", $user);


//Второй вариант


$userData .= "Имя: $firstName \n";
$userData .= "Фамилия: $lastName \n";
$userData .= "Почта: $email \n";
$userData .= "Телефон: $phone \n";

$file = fopen("user.txt", "a+"); //открываем для перезаписи файл message.txt лежаший в одной папке с текущей страницей
fwrite($file, $userData); // пишем в файл
fclose($file); // закрываем файл






//Третий вариант

if (isset($_POST['firstName'])) {
	file_put_contents("testfile.txt", $_POST['firstName']);
}

?>