<?php
class Park {

    public $name = '';
    public $address = '';
    public $description = '';
    public $thumbnail = '';
    public $tags = [];

    public function __construct( $input_name, $input_address, $input_description, $input_thumbail, $input_tags ) {
        $this->$name = $input_name;
        $this->$address = $input_address;
        $this->$description = $input_description;
        $this->$thumbnail = $input_thumbail;
        $this->$tags = $input_tags;
    }
}
