Rails.application.routes.draw do

  namespace :api do 
      resources :menus do
        resources :lunchmenus
    end 
  end 

end
