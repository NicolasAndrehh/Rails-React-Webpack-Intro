Rails.application.routes.draw do
  root 'root#index'
  get 'greeting/index'
end
