(function($, document){

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

					$(document)
						.bind('submit', plugin.on_submit)

						.bind('put', plugin.on_complete)
						.bind('get', plugin.on_complete)
						.bind('post', plugin.on_complete)
						.bind('delete', plugin.on_complete)

			},
			ajaxSettings: {

				async: false,
				cache: false

			},
			on_submit: function(e){

				if ($(e.target).is('.REST')){
					var
						form= e.target,
						method= form.method.toLowerCase()

					$.ajax( $.extend({}, plugin.ajaxSettings, {
						url: form.action,
						type: method,
						data: $(form).serialize(),
						complete: function(xhr, status){
							$(form).trigger(method, [form, status, xhr.responseText]);
						}
					}))
					return false
				}

			},
			on_complete: function(e, form, status, url){

				if (status== 'success'){
					if (form.target.match(/^\#/)){
						var
							target= form.target.split(/ /)
						$(target[0]).load(url+' '+(target[1] || target[0]));
					}else{
						location.href= url;
					}
				}

			}
		}
	
	plugin.init();


})(jQuery, document);