<?php 
	require_once 'includes/db.php';

	$status = '%';
	if(isset($_GET['status'])){
		$status = $_GET['status'];
	}
	$query="select ID, BOOK_NAME, STATUS, AMOUNT from $TABLE_NAME where status like '$status' order by status,id desc";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$arr = array();
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$arr[] = $row;	
		}
	}

	echo $json_response = json_encode($arr);
?>