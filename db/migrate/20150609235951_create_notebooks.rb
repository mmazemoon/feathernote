class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :name, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :notebooks, :author_id
  end
end
