/**
 *
 * RESTful Forms Plug-in for jQuery
 * ================================
 * AJAX-powered support for REST methods in HTML forms
 *
 * @license RESTful Forms
 * for jQuery 1.4
 * (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * under the MIT (MIT-LICENSE.TXT) and GPL (GPL-LICENSE.TXT) licenses.
 * http://jquery.vostrel.cz/restful-forms
 */

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

				if (result == 'success'){
					if (form.target.match(/^[#.]/)) plugin.load(url, form)
					else plugin.redirect(url)
				}else{
					plugin.redirect(url)
				}

			},
			load: function(url, form){

				form.target.replace(/^(\S+)(|\s(.+))$/,
					function(target, element, noop, fragment){
						$(element).load(url+' '+(fragment || element));
					})

			},
			redirect: function(url){

				location.href= url

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

