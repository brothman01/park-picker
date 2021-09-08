<?php
//include('class-Park.php');
class park_searcher {
    public $data = '';

    public function __construct() {
        // read json file and save the data int $data
        $this->$data = $this->readFile();
    }
   
    // read json file and return the data
    public function readFile() {
        // read json parks file
        $raw = file_get_contents ("library/parks.txt");
        return $raw;
    }

}
// new park_searcher();


        //var_dump(json_decode($raw));
        //print_r(error_get_last());