<?php 
	// check if the form is submitted via the POST method.
	if(isset($_POST['submit'])){

		// If submitted, create a new associative array to hold the values.
		$new_message = array(
			"name" => $_POST['name'],
			"number" => $_POST['number'],
      		"email" => $_POST['email'],
      		"story" => $_POST['story']
		);
		
		// Before storing the $new_message[] array,  check for any previous messages.
		// Done by checking the filesize.
		if(filesize("json_data/messages.json") == 0){
			//create an array to hold out message.
			$first_record = array($new_message);
			//used later to save the message to the file.
			$data_to_save = $first_record; 
		}else{
			// We have to pull all those old messages so we can add the new one
			// and decode the fetched data
			$old_records = json_decode(file_get_contents("json_data/messages.json"));

			// adds new message to the end of the existing array of messages
			array_push($old_records, $new_message);

			$data_to_save = $old_records;
		}
		// writes the updated data back to the JSON file
		file_put_contents("json_data/messages.json", json_encode($data_to_save, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
	}
