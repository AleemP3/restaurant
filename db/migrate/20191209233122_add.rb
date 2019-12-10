class Add < ActiveRecord::Migration[6.0]
  def change
    add_reference :lunchmenus, :menu 
  end
end
