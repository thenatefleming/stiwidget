$(function() {
    var btn = $('.pure-button'),
    slide = $('.slide'),
    heading = $('.card-title');

    btn.on('click', function(e){
    	e.preventDefault();
    	btn.removeClass('active');
    	$(this).addClass('active');
    	slide.hide();
    	if ($(this).data('page') === 'overview'){
    		$('.overview-content').show();
    		heading.text('overview');
    	}
    	if ($(this).data('page') === 'details'){
    		$('.details-content').show();
    		heading.text('details');
    	}
    });
});