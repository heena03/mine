<?php
$servername = "localhost";
$uname = $_POST['uname'];
$psw =$_POST['psw'];
//database connection
$conn = new mysqli('localhost','root','', dbname='web');
if($conn->connect_error){
    die("connection failed :".$conn->connect_error);

}else{
   $stmt= $conn->prepare("insert into login(uname, psw) 
   values(?,?)"){
    $stmt->bind_param("si",$uname,$psw);
    $stmt->execute();
    echo"logged in";
    $stmt->close();
    $conn->close();
   }
}

?>