class Notebook < ActiveRecord::Base
  validates :name, :author_id, presence: true
  has_many :notes
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )
end
