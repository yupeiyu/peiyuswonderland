<!DOCTYPE html>
<html>
<head>
	<title>form</title>
</head>
<body>
<?php
foreach ($_POST as $key => $value) {
	$$key=$value;
}
echo $Friend;
?>

</body>
</html>
