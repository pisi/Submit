__`work-in-progress`__

___Submit___ [v0.5][version]
============================
[Plug-in for jQuery][plugin] 1.3 or higher

HTML forms lack support for `PUT` and `DELETE` [idempotent][idempotent] [HTTP methods][method] and browsers often simply downgrade to [safe][safe] `GET`. An unpleasant aspect of going [CRUD][crud]e and [REST][rest]ful.

___Submit___ aims to bridge this gap by performing the `<form>` submit via _[jQuery][jquery]_'s reliant [AJAX][.ajax] implementation. Thus handling methods properly and preventing the browser from downgrading at the same time. ___Submit___ is eventful and super thin (1k!). Ideal for [RESTful][restful] applications.

### Download:

`jquery.submit`
[-min.js][mini] (1.067 kb),
[.js][source] (1.696 kb)
or the entire [.zip][zip]

---

## Classname-based Initialization

No Javascript. Just add `"jquery-submit"` `class` to your `<form>` and use any `method` you like (even `PUT` or `DELETE`):

	<form class="jquery-submit" method="PUT">


## URL in Result

Unlike classic form submission, you don't get your response from the server directly. Instead you always get another [URL][url] address. In response to any submit, both success and error, a plain-text _response URL_ is expected. This URL needs to be resolvable with `GET`. Browser then automatically redirects to the _response URL_.


## AJAX

___Submit___ utilizes standard _jQuery_'s [.ajax][.ajax] method to deliver over the network. You can therefore use all its available settings. Assign them as properties of `$.submit.ajaxSettings` object.


## + Bonus

### Submit Without Leaving

You can very easily submit into a [DOM][dom] element __without__ leaving the current page. ___Submit___ will utilize _jQuery_'s [`.load()`][.load] method to load the URL into whatever matches _jQuery_ selector specified in `<form>`'s `target` attribute.

	<form target="#result" class="jquery-submit" method="PUT">

will submit the form, load the result and render it inside DOM element `#result`.


### Page Fragments

Equally simply you can load only a portion of the response document. By extending the `target` attribute with ` < ` followed by another _jQuery_ selector. The second one is supplied to [`.load()`][.load] as the "after the space" selector.

	<form target="#result < #section" class="jquery-submit" method="PUT">

will cut-out contents of element `#section` in the response and render it inside `#result`.


## Events

___Submit___ is event-driven and important moments are announced via the _jQuery_ Event Model and can be listen to.

Prior to the actual form submit a `"get-submit"`, `"post-submit"`, `"put-submit"` or `"delete-submit"` event is triggered on the `<form>`. [Bind][.bind] to these events the usual way. Handler will accept `form` and `method` attributes. You can return boolean _false_ from the handler to prevent the form from being submitted.

	$('form').bind("put-submit", function(event, form, method){
		return false;
	});

You may also return an object of specific settings for the [.ajax][.ajax] call. Some of them may get overriden.

	$('form').bind("put-submit", function(event, form, method){
		return {
			beforeSend: function(){ ... }
		}
	});

Similarly, after completion `"get"`, `"post"`, `"put"` or `"delete"` event is triggered on the `<form>` right before ___Submit___ either redirects or loads the _response URL_. Handler will accept `form`, `result` and `url` attributes. Return _false_ to prevent it from happening if you want to handle the response by yourself.


---

## Open-source, of course!

Dual licensed under the [MIT][mit] and [GPL][gpl] licenses.
Copyright (c) 2010 [Petr Vostrel][vostrel]

[Fork me on Github!][forkme]





[version]:http://github.com/pisi/Submit/tree/v0.5
[source]:https://github.com/pisi/Submit/raw/v0.5/source/jquery.submit.js
[mini]:https://github.com/pisi/Submit/raw/v0.5/jquery.submit.js
[zip]:https://github.com/pisi/Submit/archives/v0.5

[gpl]:https://github.com/pisi/Submit/raw/master/GPL-LICENSE.txt
[mit]:https://github.com/pisi/Submit/raw/master/MIT-LICENSE.txt
[forkme]:http://github.com/pisi/Submit

[jquery]:http://jquery.com
[.load]:http://api.jquery.com/load
[.bind]:http://api.jquery.com/bind
[.ajax]:http://api.jquery.com/jQuery.ajax/
[crud]:http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[rest]:http://en.wikipedia.org/wiki/Representational_State_Transfer
[restful]:http://en.wikipedia.org/wiki/Restful
[dom]:http://en.wikipedia.org/wiki/Document_Object_Model
[method]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[safe]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Safe_methods
[idempotent]:http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Idempotent_methods_and_web_applications
[url]:http://en.wikipedia.org/wiki/URL
[vostrel]:http://petr.vostrel.cz

