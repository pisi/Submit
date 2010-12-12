/*
 RESTful Forms
 for jQuery 1.4
 (c) 2010 Petr Vostrel (http://petr.vostrel.cz/)
 under the MIT (MIT-LICENSE.TXT) and GPL (GPL-LICENSE.TXT) licenses.
 http://jquery.vostrel.cz/restful-forms
*/
jQuery.restfulForm||function(b,g){var c=jQuery.restfulForm={ajaxSettings:{async:false,cache:false},intercept:function(a){a=a.target;if(b(a).is(".restful")){c.submit(a,a.method.toLowerCase());return false}},submit:function(a,e){b.ajax(b.extend({},c.ajaxSettings,{url:a.action,type:e,data:b(a).serialize(),complete:function(f,d){b(a).trigger(e,[a,d,f.responseText])}}))},display:function(a,e,f,d){if(f=="success")e.target.match(/^[#.]/)?c.load(d,e):c.redirect(d);else c.redirect(d)},load:function(a,e){e.target.replace(/^(\S+)(|\s(.+))$/,
function(f,d,i,h){b(d).load(a+" "+(h||d))})},redirect:function(a){location.href=a}};b(g).bind("submit",c.intercept).bind("put get post delete",c.display)}(jQuery,document);$(function(){$("form").bind("put",function(b,g,c){console.log("PUT",this,b,g,c)})});
