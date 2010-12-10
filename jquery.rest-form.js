(function($){

	$(function(){

		$('form').bind('put', function(e, status, data){
			console.log("PUT", this, e, status, data)
			// return false;
		})

	});
	
	var
		plugin=
		jQuery.restForm= {
			init: function(){

				plugin.bind_submit();
				plugin.bind_response();

			},
			ajax: {

				async: false,
				cache: false

			},
			load: '#flash',
			bind_submit: function(){

				$(document).bind('submit', function(e){

					if ($(e.target).is(':not(.REST)')) return;

					var
						form= e.target,
						method= form.method.toLowerCase()
						
					$.ajax( $.extend({}, plugin.ajax, {
						url: form.action,
						type: method,
						data: $(form).serialize(),
						complete: function(xhr, status){
							$(form).trigger(method, [status, xhr.responseText]);
						}
					}))
					return false

				})

			},
			bind_response: function(){

				$(document)
					.bind('put', plugin.after)
					.bind('get', plugin.after)
					.bind('post', plugin.after)
					.bind('delete', plugin.after)

			},
			after: function(e, status, url){

				if (status== 'success'){
					if (plugin.load){
						var
							load= plugin.load.split(/ /),
							target= load[0],
							fragment= load[1] || load[0]
						$(target).load(url+' '+fragment);
					}else{
						location.href= url;
					}
				}
				// console.log("AFTER", e, e.type, status, data)

			}
		}
	
	plugin.init();


})(jQuery);