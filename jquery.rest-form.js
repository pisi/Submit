jQuery.restfulForm || (function($, document){

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
			intercept: function(e){

				var
					form= e.target

				if ($(form).is('.restful')){
					plugin.submit(form, form.method.toLowerCase())
					return false
				}

			},
			submit: function(form, method){

				$.ajax( $.extend({}, plugin.ajaxSettings, {
					url: form.action,
					type: method,
					data: $(form).serialize(),
					complete: function(xhr, status){
						$(form).trigger(method, [form, status, xhr.responseText]);
					}
				}))

			},
			getResult: function(e, form, result, url){

				if (result == 'success'){
					if (form.target.match(/^[#.]/)){
						form.target.replace(/^(\S+)(|\s(.+))$/,
							function(target, element, noop, fragment){
								$(element).load(url+' '+(fragment || element));
							})
					}else{
						location.href= url;
					}
				}else{
					location.href= url;
				}

			}
		}
	
	$(document)
		.bind('submit', plugin.intercept)
		.bind('put get post delete', plugin.getResult)

})(jQuery, document);