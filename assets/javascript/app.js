$(document).ready(function() {

	var topics = ['seinfeld', 'the office', 'parks and recreation', 'breaking bad', 'dexter', 'arrested development', '30 rock'];

	function displayButtons() {
	  for (var i = 0; i < topics.length; i++) {
		var button = $('<button>');
		button.addClass('btn btn-dark');
		button.attr('data-value', topics[i]);
		button.text(topics[i]);
		$('#button-view').append(button);
	  }
	}

	displayButtons();

	function displayImages() {
	  console.log(response);
	  $('#images').attr('src', response.data[0].images.fixed_height.url);
	  var imageArray = [response.data[0].images.fixed_height.url, 
						response.data[1].images.fixed_height.url, 
						response.data[2].images.fixed_height.url, 
						response.data[3].images.fixed_height.url, 
						response.data[4].images.fixed_height.url, 
						response.data[5].images.fixed_height.url, 
						response.data[6].images.fixed_height.url, 
						response.data[7].images.fixed_height.url, 
						response.data[8].images.fixed_height.url, 
						response.data[9].images.fixed_height.url];

			for (var i = 0; i < imageArray.length; i++) {
				var img = $('<img>');
				img.attr('src', imageArray[i]);
				$('#images').append(img);
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
			// console.log(response.data[0].images.fixed_height.url)
			// $('img').attr('src', response.data[0].images.fixed_height.url)
			var imageArray = [response.data[0].images.fixed_height.url,
							  response.data[1].images.fixed_height.url,
							  response.data[2].images.fixed_height.url,
							  response.data[3].images.fixed_height.url,
							  response.data[4].images.fixed_height.url,
							  response.data[5].images.fixed_height.url,
							  response.data[6].images.fixed_height.url,
							  response.data[7].images.fixed_height.url,
							  response.data[8].images.fixed_height.url,
							  response.data[9].images.fixed_height.url]

			for (var i = 0; i < imageArray.length; i++) {
				var image = $('<img>');
				image.attr('src', imageArray[i]);
				$('#images').append(image);
			}
		}); // ajax call
	}
	

	$(document).on('click', '.btn', displayImages);
		

	// }); // click handler

});

// f80e3efd237b439ca0f974513e6768e6