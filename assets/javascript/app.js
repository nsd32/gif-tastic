$(document).ready(function() {

	var topics = ['seinfeld', 'the Office', 'parks and recreation', 'breaking bad', 'dexter', 'arrested development', '30 rock', 'the league'];

	function displayButtons() {

      $('#button-view').empty();

	  for (var i = 0; i < topics.length; i++) {

		var button = $('<button>');
		button.addClass('btn btn-dark show-btn');
		button.attr('data-value', topics[i]);
		button.text(topics[i]);
		$('#button-view').append(button);
		
	  }
	}

	function displayImages() {

		$('#images').empty();
        var apiKey = "f80e3efd237b439ca0f974513e6768e6";
	    var search = $(this).attr('data-value');
	    console.log(search)
	    var limit = 10;
	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=" + limit + "&api_key=" + apiKey;
		
		$.ajax({

		  url: queryURL,
		  method: "GET"

		}).done(function(response) {
			
			var imageArray = [
							  response.data[0].images.fixed_height.url,
							  response.data[1].images.fixed_height.url,
							  response.data[2].images.fixed_height.url,
							  response.data[3].images.fixed_height.url,
							  response.data[4].images.fixed_height.url,
							  response.data[5].images.fixed_height.url,
							  response.data[6].images.fixed_height.url,
							  response.data[7].images.fixed_height.url,
							  response.data[8].images.fixed_height.url,
							  response.data[9].images.fixed_height.url
							 ]

			var ratingArray = [
							   response.data[0].rating,
							   response.data[1].rating,
							   response.data[2].rating,
							   response.data[3].rating,
							   response.data[4].rating,
							   response.data[5].rating,
							   response.data[6].rating,
							   response.data[7].rating,
							   response.data[8].rating,
							   response.data[9].rating
							  ]

			for (var i = 0; i < imageArray.length; i++) {

				var figure = $('<figure>')
				var image = $('<img>');
				var figcaption = $('<figcaption>' + 'Rating: ' + ratingArray[i].toUpperCase() + '</figcaption>');
				image.attr('src', imageArray[i]);
				$('#images').append(figure);
				figure.append(image);
				figure.append(figcaption);

			}
		}); // ajax call
	}

	$('#add-button').click(function() {

		event.preventDefault();
		var userInput = $('#user-input').val();
		console.log(userInput);
		topics.push(userInput);
		displayButtons();

	});	

	$(document).on('click', '.show-btn', displayImages);
		
	displayButtons();	

}); // document ready

// f80e3efd237b439ca0f974513e6768e6