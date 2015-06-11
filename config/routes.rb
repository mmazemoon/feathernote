Rails.application.routes.draw do
  root to: "static_pages#root"
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  namespace :api, defaults: {format: :json} do |variable|
    resources :notes, only: [:create, :show, :update, :delete, :index]
    resources :notebooks, only: [:create, :show, :update, :delete, :index]
  end
end
