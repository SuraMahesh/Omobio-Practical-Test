<?php 
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST,UPDATE,DELETE');

    header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");

    include('./db.php');

    if ($conn->connect_error) {

        die("Connection failed: " . $conn->connect_error);

    } else {

        echo "connection success";

    }

    $username = $_POST["username"];

    $query = "SELECT id,username,password,email from user";

    $array = array();

    if ($result = mysqli_query($conn, $query)) {

        if(mysqli_num_rows($result)>0) {
            while($row = mysqli_fetch_array($result)) {


                $array[] = array("id"=>$row["id"],"username"=>$row["username"],"password"=>$row["password"],"email"=>$row["email"]);

            }
            echo json_encode($array);

        } else {
            echo "items unavailable";
        }
    }
    else {
        echo "Query unavailable";
    }

?>