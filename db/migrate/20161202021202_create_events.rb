class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :time
      t.string :place
      t.integer :max_people

      t.timestamps
    end
  end
end
