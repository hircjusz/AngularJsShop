
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<button class="btn btn-info" onclick="openAll()">open all</button>
<br>
<?php

$files = array();
$dir = opendir('.'); // open the cwd..also do an err check.
while(false != ($file = readdir($dir))) {
        if(($file != ".") and ($file != "..") and ($file != "index.php")) {
        if (strpos($file,'html') !== false) {
                $files[] = $file; // put in array.
        }

        }   
}

natsort($files); // sort.

// print.

$index = 0;

foreach($files as $file) {
    $index++;
    echo("<a target='_blank' href='$_SERVER[REQUEST_URI]$file'>$index $file</a> <br />\n");
}

?>

<script>

function openAll(){

	$('a').each(function(index){
	    this.click();
	})
	
}

</script>