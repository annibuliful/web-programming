<?php

/*
 get random joke from chuck norris API
*/
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://api.icndb.com/jokes/random/1?escape=javascript");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$json = curl_exec($ch);
curl_close($ch);

$data = json_decode($json);

// show only chuck norris joke
foreach($data->value as $value){
  print_r($value->joke);
}
?>
