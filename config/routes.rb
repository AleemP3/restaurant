Rails.application.routes.draw do

  namespace :api do 
    resources :lunchmenus
  end 

end
