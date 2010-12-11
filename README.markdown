Restful Forms Plug-in For jQuery
===============================

Classic HTML forms especially fail in supporting [idempotent][idempotent] PUT and DELETE [methods][method] and often only fail-[safe][safe] to GET. So far, this sort of stays in between us and natural [REST][rest] / [CRUD][crud] implementations.

Now, thanks to the mighty [jQuery][jquery] and this little plugin, you can use __GET, PUT, POST__ and __DELETE__ easily and equally in your HTML forms. _Restful Forms_ adds special [RESTful][restful] submit treatment to standard HTML `<form>`.

## Classname-based Initialization

All you need to do is add `"restful"` class name to your form:

	<form class="restful">

And you can use whatever method you like, not just POST or GET:

	<form method="PUT" class="restful">

## Events

Right before the actual submit, a method-specific event is triggered on the form itself. You can bind to `"get"`, `"put"`, `"post"` or `"delete"` events the usual way.

	$('form').bind("put", function(event){
		// Return false to cancel the submit
	})

## URL Result

In response to any RESTful form submit, a plain-text [URL][url] (internet address) is expected. This URL needs to be resolvable with GET method. Browser then redirects to that URL.


## Page Fragments

Eventually you can easily load just a page fragment in response to the form submit. To do that you want to use `<form>`'s `target` attribute as a jQuery selector of the accepting DOM element.

For example, the form below submits into the DIV element below it - the resulting GET URL gets loaded there):

	<form target="#my_result" method="PUT" class="restful"></form>
	<div id="my_result"></div>

will cut-out response's `my_result` DIV and replace it in the current page. To cut-out different element use similar approach like when using regular [`.load()`][.load]: If one or more space characters are included in the string, the portion of the string following the first space is assumed to be a jQuery selector that determines the content to be loaded:

	<form target="#my_result #my_fragment" method="PUT" class="restful"></form>

will load contents of response's `my_fragment` DIV into the `my_result` DIV below the form and discard the rest of the response.



[jquery]:http://jquery.com
[.load]:http://api.jquery.com/load
[crud]:http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[rest]:http://en.wikipedia.org/wiki/Representational_State_Transfer
[restful]:http://en.wikipedia.org/wiki/Restful
[method]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[safe]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Safe_methods
[idempotent]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Idempotent_methods_and_web_applications
[url]:http://en.wikipedia.org/wiki/URL
