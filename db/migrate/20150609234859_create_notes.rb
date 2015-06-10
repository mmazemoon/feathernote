class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.integer :author_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps null: false
    end
    add_index :notes, :author_id
    add_index :notes, :notebook_id
    add_index :notes, :title
  end
end
