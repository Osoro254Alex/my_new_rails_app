Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'root#index'
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]    
    end
  end
end
