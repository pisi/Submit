#!/usr/bin/env ruby

%w{rubygems sinatra haml rdiscount rack-flash}.each do |lib|
  require lib
end

enable :sessions
use Rack::Flash

set :views, File.dirname(__FILE__)
set :public, File.dirname(__FILE__)
set :haml, { :format => :html5 }

before do
  etag Time.now
end

get '/' do
  @README= Markdown.new(File.read('../README.markdown'))
  @flash= flash[:notice]
  content_type :html
  haml :demo
end


@SCRIPT_NAME= 'jquery.restful-forms.js'
configure :development do
  set :script_resource, '../source/jquery.restful-forms.js'
end
configure :production do
  set :script_resource, '../jquery.restful-forms.js'
end
get "/jquery.restful-forms.js" do
  File.read(options.script_resource)
end


get '/style.css' do
  content_type :css
  sass :demo
end

def report_success method, params
  flash[:notice]= "Form had been successfully submitted using the #{method.to_s.upcase} method (#{params})"
  '/'
end

put '/resource' do
  report_success :put, params
end
get '/resource' do
  report_success :get, params
end
post '/resource' do
  report_success :post, params
end
delete '/resource' do
  report_success :delete, params
end

put '/path' do
  report_success :put, params
  redirect '/'
end
get '/path' do
  report_success :get, params
  redirect '/'
end
post '/path' do
  report_success :post, params
  redirect '/'
end
delete '/path' do
  report_success :delete, params
  redirect '/'
end

