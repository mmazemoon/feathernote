class Notebook < ActiveRecord::Base
  validates :name, :author_id, presence: true

end
