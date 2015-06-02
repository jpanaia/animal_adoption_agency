$.getJSON( "/ajax/animals.json", function( data ) {
  var items = [];

  $.each( data, function( key, val ) {
  	  $.each (val, function( index, item ) {
       items.push( "<div class='media'><div class='media-left'>"  + "<img class='media-object' src='" + val[index].imageUrl + "'>" + "</div>" + "<div class='media-body'><h4 class='media-heading'>" + val[index].name + ": Age " + val[index].age + "</h4>" + val[index].description + "</div></div>" );   
  });

   $( "<div/>", {
     	"class": "kittens",
	     html: items.join( "" )
	     }).appendTo( "#kittens" );
	   });
   
});