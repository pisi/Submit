/*
 RESTful Forms
 for jQuery 1.3+
 (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 under the MIT (MIT-LICENSE.TXT) and GPL (GPL-LICENSE.TXT) licenses.
 http://jquery.vostrel.cz/restful-forms
*/
jQuery.restfulForms||function(c,i){var e=jQuery.restfulForms={ajaxSettings:{async:false,cache:false},intercept:function(a){a=a.target;var b=a.method.toLowerCase();if(c(a).is(".restful")){c(a).trigger(b+"-submit",[a,b]);return false}},submit:function(a,b,d){c.ajax(c.extend({},e.ajaxSettings,{url:b.action,type:d,data:c(b).serialize(),complete:function(f,g){c(b).trigger(d,[b,f.responseText,b.target,g])}}))},load:function(a,b,d,f){f.replace(e.TARGET_PATTERN,function(g,j,k,h){return c(j).load(h?d+" "+
h:d).length||""})&&a.stopImmediatePropagation()},redirect:function(a,b,d,f){try{window.top[f].location.href=d}catch(g){window.location.href=d}},TARGET_PATTERN:/^([^<]+)(|\s*<\s*(.+))$/};c(i).bind("submit",e.intercept).bind("put-submit get-submit post-submit delete-submit",e.submit).bind("put get post delete",e.load).bind("put get post delete",e.redirect)}(jQuery,document);
