_RESTful Forms_ Demo
====================
Demo server for _RESTful Forms_ [Plug-in for jQuery][plugin]

As a fact of nature, to demonstrate behavior of HTTP methods you will need some __server__ responding to these methods. This is our demo server with just two endpoints - one RESTful `/resource` and other classic `/path`. As a result of all four methods a redirect to `/` happens.


## Running The Server

Demo server is a simple [Sinatra][sinatra] application written in [Ruby][ruby].

In the `demo/` folder run:

	ruby demo.rb

And head to [http://0.0.0.0:4567][local]

If it fails, make sure you have all required Ruby gems installed first:

	gem install sinatra haml rdiscount rack-flash





[local]:http://0.0.0.0:4567
[sinatra]:http://www.sinatrarb.com
[ruby]:http://ruby-lang.org