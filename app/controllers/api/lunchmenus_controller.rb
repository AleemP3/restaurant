class Api::LunchmenusController < ApplicationController
  before_action :set_lunch, only: [:update, :destroy]
  before_action :set_menu

  def index
    render json: @menu.lunchmenus.order("created_at")
  end 

  def create
    @lunchmenu = @menu.lunchmenus.new(lunch_params)
      if @lunchmenu.save 
        render json: @lunchmenu 
      else 
        render json: { errors: @lunchmenu.errors }
      end 
  end 

  def update
    @lunchmenu.update(lunch_params)
  end 

  def destroy
    @lunchmenu.destroy 
    render json: { message: "item removed" } 
  end 

  private 

  def set_lunch
    @lunchmenu = Lunchmenu.find(params[:id])
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def lunch_params
    params.require(:lunchmenu).permit(:name, :cost)
  end 
end
