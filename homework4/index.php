<?php
session_start();
ob_start();
  function generateUsername(){
    $list = "l4g m4n t3st count3r";
    return explode(" ", $list);
  }

  function generatePassword(){
    $list = "123 321 234 432";
    return explode(" ", $list);
  }

  function login($username,$password){
    $listOfUsers = generateUsername();
    $listOfPassword = generatePassword();

    for($i = 0; $i < 6 ; $i++){
      if($username === $listOfUsers[$i] && $password ===$listOfPassword[$i]){
        $_SESSION['authenticated'] = true;
        return true;
      }
    }
    return false;
  }

  function checkSession(){
    if($_SESSION['authenticated']){
      return true;
    }
    return false;
  }

  if(checkSession()){
    header( "location:welcome.php" );
  }

  if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(login($username,$password)){
      $_SESSION['loginError'] = "";
      header( "location:welcome.php" );
    }else{
      $_SESSION['loginError'] = "Do you try to hack me ? I don't connect to database LOL<br>hint: l4g/123 , m4n/321";
    }
  }
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <title>Programming Jokes</title>
  </head>
  <body>
    <img src="assets/header.jpg" id="header">
    <form action="/index.php" id="login-form" method="post">
      <div>
      <input type="text" name="username" placeholder="Username" autocomplete="off" required>
    </div>
    <div>
      <input class="input" type="password" name="password" placeholder="Password" autocomplete="off" required>
      <br><br>
      <button id="login-button" type="submit">Login</button>
    </div>
      <p class="text-red"><?php echo $_SESSION['loginError']; ?></p>
    </form>
  </body>
</html>
