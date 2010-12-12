__`work-in-progress`__

RESTful Forms Plug-in For jQuery
================================

Classic HTML forms especially fail in supporting [idempotent][idempotent] [methods][method] PUT and DELETE and often only fail-[safe][safe] to GET. So far, this sort of stays in between us and natural [REST][rest] / [CRUD][crud] implementations.

Now, thanks to the mighty [jQuery][jquery] and this little plugin, you can use __GET, PUT, POST__ and __DELETE__ easily and equally in your HTML forms. _Restful Forms_ adds special [RESTful][restful] submit treatment to standard HTML `<form>`.


## Classname-based Initialization

No Javascript. All you need to do is add `"restful"` class name to your `<form>`:

	<form class="restful">

And you can use whatever method you like, not just POST or GET:

	<form method="PUT" class="restful">


## URL Result

In response to any _Restful Forms_ submit, both success and error, a plain-text [URL][url] is expected. This URL needs to be resolvable with GET method. Browser then redirects to that URL.


## Events

Arrival of response is announced by `"get"`, `"put"`, `"post"` or `"delete"` event triggered on the form. You can bind to events the usual way.

	$('form').bind("put", function(event){
		// Return false to cancel the submit
	})


## Added Bonus

### Submit Without Leaving

You can very easily submit into a DOM element without ever leaving the current page. _Restful forms_ will utilize _jQuery_'s [`.load()`][.load] method to load the URL into whatever matches _jQuery_ selector specified in `<form>`'s `target` attribute.

	<form target="#result" method="PUT" class="restful"></form>

will submit the form, load the result and render it inside element `#result` with ID of "result".


### Page Fragments

Equally simply you can load only a portion of the response document. By extending the `target` attribute with ` < ` followed by another _jQuery_ selector. The second one is supplied to [`.load()`][.load] as the "after the space" selector.

	<form target="#result < #section" method="PUT" class="restful"></form>

will cut-out contents of element with ID of "section" from the response and render it in `#result"`





---

## Open-source, of course!

Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
Copyright (c) 2010 [Petr Vostrel][vostrel]


[jquery]:http://jquery.com
[.load]:http://api.jquery.com/load
[crud]:http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[rest]:http://en.wikipedia.org/wiki/Representational_State_Transfer
[restful]:http://en.wikipedia.org/wiki/Restful
[method]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[safe]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Safe_methods
[idempotent]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Idempotent_methods_and_web_applications
[url]:http://en.wikipedia.org/wiki/URL
[vostrel]:http://petr.vostrel.cz
