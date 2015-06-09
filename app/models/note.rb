class Note < ActiveRecord::Base
  validates :author_id, :notebook_id, presence: true

end
