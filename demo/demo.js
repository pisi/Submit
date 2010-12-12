(function($, window, document, undefined){
	
	$(function(){

		$('form').bind('put', function(e, status, data){
			console.log("PUT", this, e, status, data)
			// return false;
		})

	});

})(jQuery, window, document);
