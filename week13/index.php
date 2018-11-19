<?php
try{
  $pdo = new PDO('mysql:host=localhost;dbname=personal_info', 'root', 'root');
  $stmt = $pdo->prepare('SELECT * FROM user');
  $stmt->execute();
  $user = $stmt->fetch();
  print_r($user);
}catch(PDOException $e){
  echo $e;
}


?>
