
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];


$query = $mysqli->prepare("INSERT INTO messages(name, email , phone , message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssis", $name, $email, $phone, $message );
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>