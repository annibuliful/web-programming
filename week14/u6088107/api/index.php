<?php 
require_once 'api.php';

function responseData($data){
    header('Content-type: application/json; charset=utf-8');
    header('access-control-allow-origin: *');

    return json_encode($data);
}
    if(isset($_GET['id'])){
        $service = new api();
        $data = $service->getPlace($_GET['id']);
        echo responseData($data);
    }else{
        echo "please send place id";
    }
?>