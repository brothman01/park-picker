<?php
include('library/bin/class-park_searcher.php');
$searcher = new park_searcher();
?>
<!DOCTYPE html>

<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Park Picker</title>
    <link rel="stylesheet" href="/park_picker/library/css/style.css" type="text/css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="/park_picker/library/css/picker.css" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>

</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js"></script>
    <script src="/park_picker/library/js/picker.js"></script>


<div id="centerer">
<textarea style="display: none;" id="txtData"> <?php echo $searcher->$data; ?> </textarea>


<div id="tag_cloud">
<h1>Tags:</h1>
<p>Choose tags to search with and we will show you parks in the results that have those tags.</p>
</div>

<!-- <div id="results_window"> -->
    <div id="inner_results_window">
        <!-- <h2 class="title">Park Results</h2> -->
    </div>
<!-- </div> -->

</div>
</body>
</html># park-picker
# park-picker
