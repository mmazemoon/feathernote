json.extract! note, *Note.column_names
json.plaintext note.plaintext
json.notebook do
  json.extract! note.notebook, *Notebook.column_names
end
