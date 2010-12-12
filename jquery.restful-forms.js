/*
 RESTful Forms
 for jQuery 1.4
 (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 under the MIT (MIT-LICENSE.TXT) and GPL (GPL-LICENSE.TXT) licenses.
 http://jquery.vostrel.cz/restful-forms
*/
jQuery.restfulForms||function(c,h){var d=jQuery.restfulForms={ajaxSettings:{async:false,cache:false},intercept:function(a){a=a.target;if(c(a).is(".restful")){d.submit(a,a.method.toLowerCase());return false}},submit:function(a,b){c.ajax(c.extend({},d.ajaxSettings,{url:a.action,type:b,data:c(a).serialize(),complete:function(e,f){c(a).trigger(b,[a,f,e.responseText])}}))},display:function(a,b,e,f){d.load(f,b,b.target)||d.redirect(f,b.target)},load:function(a,b,e){return e.replace(d.TARGET_PATTERN,function(f,
i,j,g){return c(i).load(g?a+" "+g:a).length||""})},redirect:function(a,b){try{window.top[b].location.href=a}catch(e){location.href=a}},TARGET_PATTERN:/^([^<]+)(|\s*<\s*(.+))$/};c(h).bind("submit",d.intercept).bind("put get post delete",d.display)}(jQuery,document);
