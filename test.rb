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
  @README= Markdown.new(File.read('README.markdown'))
  @flash= flash[:notice]
  content_type :html
  haml :test
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

def report_success method, params
  flash[:notice]= "Form had been successfully submitted using the #{method.to_s.upcase} method (#{params})"
  '/'
end

get '/style.css' do
  content_type :css
  sass :test
end
