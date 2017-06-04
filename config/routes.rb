Rails.application.routes.draw do
  root 'react/easy_rank#index'

  namespace :api, defaults: { format: :json } do
    resources :games
    resources :teams
  end

  namespace :react, path: '', constraints: { format: :html } do
    get '/*path', to: 'easy_rank#index'
  end
end
