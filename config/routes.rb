Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :players, only: [:index, :create, :destroy, :show, :edit, :update]
  resources :contributions, only: [:create, :destroy]

  root 'players#index'
end
