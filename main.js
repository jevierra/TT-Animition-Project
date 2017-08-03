$(".animsition").animsition(
	{

		/*inClass: 'fade-in-right-lg',
		outClass: 'fade-out-right-lg',
		linkElement:'header a',
		inDuration: 1000,
		outDuration:500
*/

    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: 'header a',


	});





$('.header').sticky();


$('.header').on( 'sticky-start', function() {

	$('.description').html('We build <strong> great </strong> apps');

});


$('.header').on( 'sticky-end',  function() {

	$('.description').html("We build great apps");

});



/* --- Email us sticky --- */



$('.WeLuvWork').sticky();

 $('h5').on('sticky-start', function(){

	$('.WeLuvWork').html("<a href='mailto:me@me.com'> <strong> Email Us </strong> </a> ")


}); 

$('h5').on('sticky-end', function(){

	$('.WeLuvWork').html("Want us to work on your project?")


});





/* -- Slick way of appending the href & adding a class, then removing the class with the sticky-end event 

--->
Links:
https://remysharp.com/2007/04/12/jquerys-this-demystified
http://api.jquery.com/append/
https://api.jquery.com/remove/
http://www.learningjquery.com/2007/08/what-is-this
--->


$('h5').on('sticky-start', function(){

$('this').append('<a href="mailto:email@website.com" class="email-text"> email</a>')


});

$('h5').on('sticky-end', function(){

 $('email-text').remove();


});




*/




$('.slides').slick({

 fade:true,
 autoplay:true,
 autoplaySpeed:2000,
arrows:false



});

