Rails.application.routes.draw do
  root to: "static_pages#root"
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  namespace :api, defaults: { format: :json } do
    resources :notes, only: [:create, :show, :update, :destroy, :index]
    resources :notebooks, only: [:create, :show, :update, :destroy, :index]
  end
end
