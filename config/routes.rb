Rails.application.routes.draw do
  
  resources :armies
  resources :locations
  resources :races
  resources :clans
  resources :warlords
  resources :tags
  resources :comments
  resources :posts
  resources :users
  resources :warlords
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  patch "/warlords/:id/addtenturns", to: "warlords#increment_turns"
  patch "/warlords/:id/taketurn", to: "warlords#taketurn"
  # User Authentication
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
