class Note < ActiveRecord::Base
  validates :author_id, :notebook_id, presence: true
  belongs_to :notebook
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  def plaintext
    Nokogiri::HTML(self.body).text
  end
end
