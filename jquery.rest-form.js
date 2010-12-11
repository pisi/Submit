(function($, document){

	$(function(){

		$('form').bind('put', function(e, status, data){
			console.log("PUT", this, e, status, data)
			// return false;
		})

	});
	
	var
		plugin=
		jQuery.restfulForm= {
			ajaxSettings: {

				async: false,
				cache: false

			},
			submit: function(e){

				if ($(e.target).is('.restful')){
					var
						form= e.target,
						method= form.method.toLowerCase()

					$.ajax( $.extend({}, plugin.ajaxSettings, {
						url: form.action,
						type: method,
						data: $(form).serialize(),
						complete: function(xhr, status){
							$(form).trigger(method+'.restful', [form, status, xhr.responseText]);
						}
					}))
					return false
				}

			},
			complete: function(e, form, result, url){

				if (result== 'success'){
					if (form.target.match(/^\#/, function(){
						console.log("REGEXP")
					})){
						var
							target= form.target.split(/ /)
						$(target[0]).load(url+' '+(target[1] || target[0]));
					}else{
						location.href= url;
					}
				}

			}
		}
	
	$(document)
		.bind('submit', plugin.submit)
		.bind('put.restful get.restful post.restful delete.restful', plugin.complete)

})(jQuery, document);