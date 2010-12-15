__`work-in-progress`__

_RESTful Forms_ [v0.4][version]
===============================
[Plug-in for jQuery][plugin] 1.3 or higher

Classic HTML forms lack support for `PUT` and `DELETE` [HTTP methods][method] and often simply downgrade to [safe][safe] `GET`. So far, this sort of stays in between us and natural [REST][rest] / [CRUD][crud] implementations.

Now, thanks to friend Filip, mighty [jQuery][jquery] and this little plugin, you can use `GET`, `PUT`, `POST` and `DELETE` easily and equally in your HTML forms. _Restful Forms_ add a proper [RESTful][restful] submit treatment to standard HTML `<form>` tags.

---

`jquery.restful-forms`
[-min.js][mini] (1.074 kb),
[.js][source] (1.724 kb)
or the entire [.zip][zip]

---

## Classname-based Initialization

No Javascript. Just add `"restful"` class name to your `<form>`:

	<form class="restful">

And use whatever method you like:

	<form method="PUT" class="restful">


## URL in Result

In response to any _Restful Forms_ submit, both success and error, a plain-text _response [URL][url]_ is expected. This URL needs to be resolvable with GET. Browser automatically redirects to the _response URL_.


## Events

_Restful Forms_ are event-driven. That means important moments are announced through the _jQuery_ Event Model and can be listen to.

Prior to the actual submit a `"get-submit"`, `"post-submit"`, `"put-submit"` or `"delete-submit"` event is triggered on the `<form>`. [Bind][.bind] to these events the usual way. Handler will accept `form` and `method` attributes. You can return boolean _false_ from the handler to prevent the form from being submitted.

	$('form').bind("pre-put", function(event, form, method){
		return false;
	});

Similarly, after completion `"get"`, `"post"`, `"put"` or `"delete"` event is triggered on the `<form>` right before _Restful Forms_ either redirect or load the _response URL_. Handler will accept `form`, `result` and `url` attributes. Return _false_ to prevent it from happening if you want to handle the response by yourself.


## * Added Bonus

### Submit Without Leaving

You can very easily submit into a [DOM][dom] element __without__ leaving the current page. _Restful Forms_ will utilize _jQuery_'s [`.load()`][.load] method to load the URL into whatever matches _jQuery_ selector specified in `<form>`'s `target` attribute.

	<form target="#result" method="PUT" class="restful"></form>

will submit the form, load the result and render it inside DOM element `#result`.


### Page Fragments

Equally simply you can load only a portion of the response document. By extending the `target` attribute with ` < ` followed by another _jQuery_ selector. The second one is supplied to [`.load()`][.load] as the "after the space" selector.

	<form target="#result < #section" method="PUT" class="restful"></form>

will cut-out contents of element #section in the response and render it inside `#result"`.


---

## Open-source, of course!

Dual licensed under the [MIT][mit] and [GPL][gpl] licenses.
Copyright (c) 2010 [Petr Vostrel][vostrel]

[Fork me on Github!][forkme]





[version]:http://github.com/pisi/RestfulForms/tree/v0.4
[source]:https://github.com/pisi/RestfulForms/raw/v0.4/source/jquery.restful-forms.js
[mini]:https://github.com/pisi/RestfulForms/raw/v0.4/jquery.restful-forms.js
[zip]:https://github.com/pisi/RestfulForms/archives/v0.4

[gpl]:https://github.com/pisi/RestfulForms/raw/master/GPL-LICENSE.txt
[mit]:https://github.com/pisi/RestfulForms/raw/master/MIT-LICENSE.txt
[forkme]:http://github.com/pisi/RestfulForms

[jquery]:http://jquery.com
[.load]:http://api.jquery.com/load
[.bind]:http://api.jquery.com/bind
[crud]:http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[rest]:http://en.wikipedia.org/wiki/Representational_State_Transfer
[restful]:http://en.wikipedia.org/wiki/Restful
[dom]:http://en.wikipedia.org/wiki/Document_Object_Model
[method]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[safe]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Safe_methods
[idempotent]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Idempotent_methods_and_web_applications
[url]:http://en.wikipedia.org/wiki/URL
[vostrel]:http://petr.vostrel.cz

