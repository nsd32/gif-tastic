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
        var apiKey = "&api_key=f80e3efd237b439ca0f974513e6768e6";
	    var search = $(this).attr('data-value');
	    console.log(search)
	    var limit = "&limit=10";
	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + limit + apiKey;
		
		$.ajax({

		  url: queryURL,
		  method: "GET"

		}).done(function(response) {

			var results = response.data;
			console.log(results);

			for (var i = 0; i < results.length; i++) {

				var figure = $('<figure>')
				var image = $('<img>');
				var figcaption = $('<figcaption>' + 'Rating: ' + results[i].rating.toUpperCase() + '</figcaption>');
				image.attr('src', results[i].images.fixed_height_still.url);
				image.attr('data-still', results[i].images.fixed_height_still.url);
				image.attr('data-animated', results[i].images.fixed_height.url);
				image.attr('data-state', 'still');
				$('#images').append(figure);
				figure.append(image);
				figure.append(figcaption);

			}
		}); // ajax call
	}

	$('#add-button').click(function(event) {

		event.preventDefault();
		var userInput = $('#user-input').val();
		console.log(userInput);
		topics.push(userInput);
		$('#user-input').val('');
		displayButtons();

	});	

	$(document).on('click', '.show-btn', displayImages);

	$(document).on('click', 'img', function () {
	  if ($(this).attr('data-state') === 'still') {
	  	$(this).attr('src', $(this).attr('data-animated'));
	  	$(this).attr('data-state', 'animate');
	  } else {
	  	$(this).attr('src', $(this).attr('data-still'));
	  	$(this).attr('data-state', 'still');
	  }
	});
		
	displayButtons();

}); // document ready

// f80e3efd237b439ca0f974513e6768e6