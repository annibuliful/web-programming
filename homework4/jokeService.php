<?php


/*
  transform data from array of object to JSON
*/
function responseData($data){
    header('Content-type: application/json; charset=utf-8');
    header('access-control-allow-origin: *');
    return json_encode($data);
}


/*
  read all jokes from JSON file
*/
function getAllJokes(){
  $arrayOfJokes = array();
  $allJokes = json_decode(file_get_contents('jokes.json'));
  foreach ($allJokes as $item) {
    array_push($arrayOfJokes,
    array(
      "id" => $item->id,
      "setup"=> $item->setup,
      "punchline"=> $item->punchline
    )
  );
}
return $arrayOfJokes;
}

/*
  search list of jokes which match with first character of nicknam
*/
function searchByName($name){
  $allJokes = getAllJokes();
  $matchJokes = array();
  foreach($allJokes as $item){
    if(strpos($item['setup'],$name)){
      array_push($matchJokes,$item);
    }

  }
  return $matchJokes;
}


function randomJoke($name){
  $jokes = searchByName($name);
  $rand = rand(0,sizeof($jokes)-1);
  $jokes[$rand]['score'] = strlen($jokes[$rand]['punchline']) + strlen($jokes[$rand]['setup']);
  return $jokes[$rand];
}

/*
 get random joke
*/
if(isset($_GET['name'])){
  $data = randomJoke($_GET['name']);
  echo responseData($data);
}
?>
