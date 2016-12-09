<?php 
	require_once 'includes/db.php'; 
	
	if(isset($_GET['task0']) && isset($_GET['task1'])){
		$task0 = $_GET['task0'];
		$task1 = $_GET['task1'];

		$status = "0";

		$query="INSERT INTO $TABLE_NAME(BOOK_NAME, AMOUNT, status)  VALUES ('$task0', '$task1', '$status')";
		$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

		$result = $mysqli->affected_rows;

		echo $json_response = json_encode($result);
	}
?>