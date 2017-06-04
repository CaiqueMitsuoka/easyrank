class Api::ApplicationController < ApplicationController
  protect_from_forgery prepend: true
end
