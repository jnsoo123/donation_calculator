Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :players, only: [:index, :create, :destroy, :show, :edit, :update]
  resources :contributions, only: [:create, :destroy]
  resources :users, only: [:new, :create, :index, :destroy, :edit, :update]

  patch '/users/:id/toggle_role', to: 'users#toggle_role', as: :user_toggle_role
  root 'players#index'
end
