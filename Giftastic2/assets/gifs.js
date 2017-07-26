// This waits for the page to load before calling our jQuery
    $( document ).ready(function(){

      // Part 1 - Collect User Input Using jQuery Click Listener note we use the class (.) of search_button
      $('.search_button').on('click', function(){

        // Collect user by grabbing the input form's value via id (#)
        var userInput = $('#form-value').val().trim();
        
        // Change the input to suit the API (ie change spaces to +)
        userInput = userInput.replace(/ /g, "+");

        // Create the Giphy API URL
        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=dc6zaTOxFJmzC';

        // Part 2 - Use AJAX to call GIPHY API (note that the .done() function waits for the API to respond)
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){

          // This is the API response data. It's a JSON object of 25 gifs
          console.log(response.data);

          // For simplicity, we will take the first gif 
          var giphyURL = response.data[0].images.fixed_height.url;
          console.log(giphyURL)

          // Now you can pass that into your <img> tag using its id (#)
          $('#here_is_gif').attr('src', giphyURL);

        });

        // Clear the Gif using the reset_button id 
        $('#reset_button').on('click', function(){
          // Grab the img using the id and change the src to empty to remove the img
          $('#here_is_gif').attr("src",'');
        })


        // If using a jQuery click listner on a Submit button, you need to return false to prevent the default page refresh
        return false;
      })
      

    });