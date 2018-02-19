Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :users

  resources :players, only: [:index, :create, :destroy, :show, :edit, :update]
  resources :contributions, only: [:create, :destroy, :index]
  resources :users, only: [:new, :create, :index, :destroy, :edit, :update]
  resources :page_donations, only: [:index, :update]

  patch '/users/:id/toggle_role', to: 'users#toggle_role', as: :user_toggle_role
  root 'players#index'
end
