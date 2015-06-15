json.extract! note, *Note.column_names
json.notebook do
  json.extract! note.notebook, *Notebook.column_names
end
