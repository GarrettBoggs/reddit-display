$(document).ready(function(){
    var lastId;

    var searchterm = $("#words").val();
    $.getJSON(' http://www.reddit.com/r/videogames/.json?limit=10&after=' + lastId).then(function(response) {

      console.log(response);
      console.log(response.data.children[3].data.title);
      for(var i = 0; i < response.data.children.length ; i ++) {
          $("#reddit-content").append( '<br>' + response.data.children[i].data.title);
          // $("#reddit-content").append( '<br>' + post.data.url );
          // $("#reddit-content").append( '<br>' + post.data.permalink );
          // $("#reddit-content").append( '<br>' + post.data.ups );
          // $("#reddit-content").append( '<br>' + post.data.downs );
          // $("#reddit-content").append( '<hr>' );
      //console.log(JSON.stringify(response));
      //$("results").append(response);
      }
      lastId = response.data.children[response.data.children.length-1].data.name;
      console.log(lastId);
    });

        $('#next-button').click(function(){
          $("#reddit-content").empty();
          console.log(lastId);
          $.getJSON('http://www.reddit.com/r/videogames/.json?limit=10&after=' + lastId).then(function(response) {

          for(var i = 0; i < response.data.children.length ; i ++) {
            $("#reddit-content").append( '<br>' + response.data.children[i].data.title);
            }

            lastId = response.data.children[response.data.children.length-1].data.name;
          });
        });

});
