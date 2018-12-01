<?php
    //include library
    require "twitteroauth/autoload.php";
    require "vendor/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth;

    Use Sentiment\Analyzer;

    // analysis
    function analysis_each_text($text){
      $analyzer = new Analyzer();
      $score = $analyzer->getSentiment($text);
      return $score;
    }

    // response data with JSON format
    function response($result){
      header('Content-type: application/json; charset=utf-8');
      header('access-control-allow-origin: *');
        return json_encode($result);
    }

    // map and filter the necessary data
    function map_data($list_tweet){
      $result = array();

      foreach($list_tweet->statuses as $key => $value){
        $score = analysis_each_text($value->text);
        array_push($result,
        array(
          "profileImage" => $value->user->profile_image_url,
          "profileName" => $value->user->name,
          "tweet" => $value->text,
          "negative" => $score['neg'],
          "positive" => $score['pos'],
          "neural" => $score['neu'])
        );
      }
      return $result;
    }

    // https://twitteroauth.com/
    if(isset($_GET['key'])){
        //token
          define("CONSUMER_KEY","g482LUZMXv8C9cdA6sCHOgJzz");
          define("CONSUMER_SECRET","xKAQbiqcBLSWkwFoBkpRY0GiMGc47GQ6GfvcrYyV4ocN8AOnOn");
          define("ACCESS_TOKEN","1066363490539995136-abiVCRA2gR3feZeDInW0NzjIFYqE0J");
          define("ACCESS_TOKEN_SECRET","E3VT8DS2RZh4JLCwPVPNW4ZPLynnBLTY618uJh1OvPlg1");
          $connection = new TwitterOAuth(CONSUMER_KEY,CONSUMER_SECRET,ACCESS_TOKEN,ACCESS_TOKEN_SECRET);

          $query = array(
            "q" => $_GET['key'],
            "count" => 10,
            "result_type"=>"recent",
          );
          $result = $connection->get('search/tweets',$query);
          echo response(map_data($result));
    }

?>
