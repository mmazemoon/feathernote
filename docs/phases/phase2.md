# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::NotesController (create, destroy, index, show)
Api::NotebooksController (create, destroy, show, update)

### Views
* notes/show.json.jbuilder

## Backbone
### Models
* Note
* Notebook

### Collections
* Notes
* Notebooks

### Views
* NoteForm
* NoteShow (composite view)
* NotesIndex (composite view)
* NotebooksIndex(composite view)
* NotebooksShow(composite view, contains NotesIndex subviews)

## Gems/Libraries
