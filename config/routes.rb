Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

end
