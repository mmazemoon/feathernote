json.extract! notebook, :id, :name, :author_id, :created_at, :updated_at

json.notes do # key
  json.array! notebook.notes do |note| # arrayify
    json.extract! note, *Note.column_names
    json.plaintext note.plaintext
  end
end
