Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session
    resources :users
    resources :recipes do
      resources :ingredients
      resources :steps
      resources :notes
    end
  end
  match "*path" => "static_pages#root", via: [:get, :post]
end
