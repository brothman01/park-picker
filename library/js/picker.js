$(document).ready(function() {

    var parks = JSON.parse( $('#txtData').val() );

    // to add new tags, just add them to this array
    var tags = ['swimming', 'camping', 'fishing', 'archery', 'golf', 'trees', 'soccer', 'football', 'baseball', 'seesaw', 'picnic area', 'tables', 'walking path', 'running track', 'dog area', 'biking'];

    tags.forEach(element => $('#tag_cloud').append('<div class="tag_container" data-picked="1"><h4>' + element + '</h4><div>'));

    var query = [];

    populate(parks['parks'], query, tags);

    $('.tag_container').click(function() {

        if ( $(this).data('picked') == 1) {

            $(this).css('background', 'white');
            $(this).css('color', 'black');
            $(this).data('picked', 0);

            if ( !containsValue( $(this).text(), query ) ) {
                query.push( $(this).text() );
            }

        populate(parks['parks'], query, tags);

        } else if ( $(this).data('picked') == 0) {

            $(this).css('background', 'none');
            $(this).css('color', 'white');
            $(this).data('picked', 1);

            for (var i = 0; i < query.length; i++) {

                if ( query[i] === $(this).text()) {

                    query.splice(i, 1);

                }

            }

            populate(parks['parks'], query, tags);

        }

 

    });

    $('.result_container').click(function() {
      window.open( $(this).data('url'), '_blank');
  });

});


  ////////////////// FUNCTIONS ///////////////////

  function containsValue(value,arr){
    var status = false;

    for(var i=0; i<arr.length; i++){
      var name = arr[i];

      if(name == value){
        status = true;
        break;
      }

    }

    return status;

  }

 

  function populate(all_parks, que, tags) {

    $('#inner_results_window').empty();
    $('#inner_results_window').append('<h2 class="title">Parks</h2>');

    for (var x = 0; x < all_parks.length; x++) {

        $('#inner_results_window').append(

        '<div class="result_container" data-url="' + all_parks[x].url + '">' +
            '<img src="library/images/thumbs/' + all_parks[x].thumbnail + '" /><p><span style="font-size: 12px;">' + all_parks[x].name + '</span><br />' +
            '<span class="address">' + all_parks[x].address + '</span></p>' +
            '<div class="score_container">' + 'Tag Score: ' + calculate_score( all_parks[x], que, tags ) + '</div>' +
        '</div>');

    }

  }

  function calculate_score(park, que, tags) {
      var total_tags = 0;
      var matching_tags = 0;

    // find all tags that both the query and the park have in common and set it to matching_tags
    matching_tags = containsTags(park, que);
    total_tags = que.length;

    return matching_tags + '/' + total_tags;

  }

 

  function containsTags(park, tags) {

    var counter = 0;
    var park_tags = park.tags;

    for (i = 0; i < tags.length; i++) {

      for (c = 0; c < park_tags.length; c++) {

        if ( park_tags[c] === tags[i] ) {

          counter = counter + 1;

        }

      }

    }

    return counter;
  }