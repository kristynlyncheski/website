$(document).ready(function (){
	equalizeHeight("#resume .column .column-tile:nth-child(2)");
	equalizeHeight("#resume .column .column-tile:nth-child(3)");
	equalizeHeight("#resume .column .column-tile:nth-child(4)");
	equalizeHeight("#services .square-content");
	
	// only equalize on small screen
	if (window.innerWidth >= 481 && window.innerWidth <= 768) {
		equalizeHeight(".col-12_md-12_sm-6.item-wrapper");
	}
	
	$(window).resize(function(){
		$('#resume .column-tile').css('height','auto');
		$('#services .square-content').css('height','auto');
		if (window.innerWidth > 768) {
			equalizeHeight("#resume .column .column-tile:nth-child(2)");
			equalizeHeight("#resume .column .column-tile:nth-child(3)");
			equalizeHeight("#resume .column .column-tile:nth-child(4)");
		}

		equalizeHeight("#services .square-content");
		
		$('.col-12_md-12_sm-6.item-wrapper').css('height','auto');
		// only equalize on small screen
		if (window.innerWidth >= 481 && window.innerWidth <= 768) {
			equalizeHeight(".col-12_md-12_sm-6.item-wrapper");
		}
	});
	
	function equalizeHeight(container) {
		var maxHeight = 0;
		$(container).each(function(){
		   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});

		$(container).height(maxHeight);
	}
	
	
	
	updateCopyright();
	function updateCopyright() {
		var today = new Date()
		var year = today.getFullYear()
		$('footer .year').html(year)
	}
});
