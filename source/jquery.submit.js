/**
 *
 * Submit Plug-in for jQuery
 * =========================
 * Better submit treatment for HTML <form> tags.
 *
 * @license Submit
 * for jQuery 1.3+
 * (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 * under the MIT (MIT-LICENSE.TXT) and GPL (GPL-LICENSE.TXT) licenses.
 * http://jquery.vostrel.cz/submit
 */

jQuery.submit || (function($, document){

	var
		plugin=
		jQuery.submit= {
			ajaxSettings: {

				async: false,
				cache: false

			},
			intercept: function(e){

				var
					form= e.target,
					method= form.method.toLowerCase()

				if ($(form).is('.jquery-submit')){
					$(form).trigger(method+'-submit', [form, method]);
					return false
				}

			},
			submit: function(e, form, method){

				$.ajax( $.extend({}, plugin.ajaxSettings, e.result || {}, {
					url: form.action,
					type: method,
					data: $(form).serialize(),
					complete: function(xhr, status){
						$(form).trigger(method, [form, xhr.responseText, form.target, status]);
					}}) )

			},
			load: function(e, form, url, target){

				if (target.replace(plugin.TARGET_PATTERN,
					function(whole, element, partial, fragment){
						return $(element).load(fragment ? url+' '+fragment : url)
							.length || ''
					}))
					e.stopImmediatePropagation();

			},
			redirect: function(e, form, url, target){

				try{ window.top[target].location.href= url }
				catch(e){ window.location.href= url }

			},
			TARGET_PATTERN: /^([^<]+)(|\s*<\s*(.+))$/
		}
	
	$(document)
		.bind('submit', plugin.intercept)
		.bind('put-submit get-submit post-submit delete-submit', plugin.submit)
		.bind('put get post delete', plugin.load)
		.bind('put get post delete', plugin.redirect)

})(jQuery, document);
