<?php 

class api
{
    private $db;
    public function __construct()
    {
        $conf = json_decode(file_get_contents('configuration.json'), TRUE);
        $this->db = new mysqli($conf['host'], $conf['username'], $conf['password'],$conf['database']);
    }

    function getPlace($id){
        $sql = "SELECT * FROM placelocation AS p WHERE id =".$id;

        $query = $this->db->query($sql);
        $result = $query->fetch_assoc();
        return $result;
    }

    function __destruct()
    {
        $this->db->close();
    }
}


?>