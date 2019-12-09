class CreateLunchmenus < ActiveRecord::Migration[6.0]
  def change
    create_table :lunchmenus do |t|
      t.string :name
      t.string :cost

      t.timestamps
    end
  end
end
