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

jQuery.restfulForms || (function($, document){

	var
		plugin=
		jQuery.restfulForms= {
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

				plugin.load(url, form, form.target)
				|| plugin.redirect(url, form.target)

			},
			load: function(url, form, target){

				return target.replace(plugin.TARGET_PATTERN,
					function(whole, element, partial, fragment){
						return $(element).load(fragment ? url+' '+fragment : url)
							.length || ''
					})

			},
			redirect: function(url, target){

				try{ window.top[target].location.href= url }
				catch(e){ location.href= url }

			},
			TARGET_PATTERN: /^([^<]+)(|\s*<\s*(.+))$/
		}
	
	$(document)
		.bind('submit', plugin.intercept)
		.bind('put get post delete', plugin.display)

})(jQuery, document);
