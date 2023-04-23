<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
    }

// Database connection
$conn = new mysqli('localhost','root','','users_data');
if($conn->connect_error)
{
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} 
else 
{
    $stmt = $conn->prepare("insert into registrations(fName, lName, email, password) values(?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $fName, $lName, $email, $password);
    $execval = $stmt->execute();
    echo $execval;
    echo "Registered Successfully...";
    $stmt->close();
    //Connection closed
    $conn->close();
}

?>