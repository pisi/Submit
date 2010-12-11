jQuery.restfulForm || (function($, document){

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
			display: function(e, form, result, url){

				result == 'success'
				&& form.target.match(/^[#.]/)
					&& form.target.replace(/^(\S+)(|\s(.+))$/,
						function(target, element, noop, fragment){
							$(element).load(url+' '+(fragment || element));
						})
					|| plugin.redirect(url)
				|| plugin.redirect(url)

			},
			redirect: function(url){

				return location.href= url

			}
		}
	
	$(document)
		.bind('submit', plugin.intercept)
		.bind('put get post delete', plugin.display)

})(jQuery, document);

$(function(){

	$('form').bind('put', function(e, status, data){
		console.log("PUT", this, e, status, data)
		// return false;
	})

});

