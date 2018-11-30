<?php
    //include library
    require "twitteroauth/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth;


    // render Card
    function render($result){
        foreach($result->statuses as $key => $value){
            echo "
            <div class=\"col-md-6 col-sm-12 col-xs-12\">
              <div class=\"twitter-card\">
                <img src=\"{$value->user->profile_image_url}\" alt=\"Avatar\">
                <h4><b>{$value->user->name}</b></h4>
                <p>{$value->text}</p>
              </div>
            </div>
            ";
        }
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
          render($result);
    }

?>
