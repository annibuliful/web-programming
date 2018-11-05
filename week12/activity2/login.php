<?php
session_start();
ob_start();
$username = array("admin","user","sale");
$password = array("123","456","789");
//setting username and password
function checkLogin($user , $pass){
	global $username,$password;
	for($i = 0 ; $i < count($username);$i++){
		if($user == $username[$i] && $pass == $password[$i]){
			return true;
		}
	}
	return false;
}
?>

<!DOCTYPE html>
 <html>
    <head>
        <title>Login and Registration Form</title>

        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/animate-custom.css" />
    </head>
    <body>
        <div class="container">

        <?php
				//adding your code here
					if(isset($_POST["username"]) && isset($_POST['password'])){
						if(checkLogin($_POST["username"],$_POST['password'])){
							$_SESSION['errormsg'] = "";
							header( "url=/welcome.php" );
						}else{
							$_SESSION['errormsg'] = "Wrong username or password";
							echo"<p>Wrong Username or Password</p>
								<p>Please go back to re enter them again</p>
								<a href=\"index.php\">back to login</a>
							";
						}
					}
        ?>
	</div>
    </body>
</html>
