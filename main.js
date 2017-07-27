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


$('header').on('sticky-start', function(){
$('.description').html('We build <strong>great</strong> apps');

}
);


$('header').on('sticky-end', function(){
$('.description').html('We build really<strong>great</strong> apps');

}
);