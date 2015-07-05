Feathernote.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find(".notes-list");
    this.$noteShow = this.$rootEl.find(".note-show");
  },

  routes: {
    "": "allShow",
    "notes/all": 'allShow',
    "notes/all/:id": "allShow",
    "notes/:id": "noteShow",
    "notebooks/:id": "notebookShow",
    "search/:query": "searchResults"
  },

  allShow: function (id) {
  Feathernote.notes.fetch({
      success: function(collection){
        if(collection.first()){
          var noteId = id ? id : collection.first().id;
          this._hasNotesList = new Feathernote.Views.NotesIndex({
          collection: Feathernote.notes,
          all: true,
          id: noteId });
          this._swapListView(this._hasNotesList);
          this.noteShow(noteId);
      }}.bind(this),
      reset: true
    });
  },

  notebookShow: function(id) {
    var notebook = Feathernote.notebooks.getOrFetch(id,
      function(model){

        Feathernote.activeNotebook = model;
        var notes = Feathernote.activeNotebook.notes();

        // Feathernote.notes.set(notebook.notes())
        // Feathernote.activeNote = notes.first();

        this._hasNotesList = new Feathernote.Views.NotesIndex({
          collection: Feathernote.activeNotebook.notes(),
          id: notes.first().id });
          this.noteShow(notes.first().id, true);
          this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

  noteShow: function(id, active){

    var collection = active ? Feathernote.activeNotebook.notes() : Feathernote.notes;

    var note = collection.getOrFetch(id,
      function(model){
        // Feathernote.activeNote = model;
        Feathernote.activeNotebook = model.notebook();
        var noteShow = new Feathernote.Views.NoteShow({ model: model});
        this._swapShowView(noteShow);
        if(!this._hasNotesList){
          this.siblingNotes(Feathernote.activeNotebook.id);
        }
      }.bind(this));
  },

  searchResults: function (query) {
    var re = new RegExp(query, "i");
    var results = Feathernote.notes.filter(function(note){
      if (note.get("title") && note.get("title").match(re)) {
        return true;
      }
      if (note.get("body") && note.get("body").match(re)){
        return true;
      }
    });
    var searchCollection = new Feathernote.Collections.Notes(results);
      this._hasNotesList = new Feathernote.Views.NotesIndex({ collection: searchCollection });
      this._swapListView(this._hasNotesList);
  },

  siblingNotes: function(notebookId){
    var notebook = Feathernote.notebooks.getOrFetch(
      notebookId,
      function(model, response, options){
        Feathernote.activeNotebook = model;
        var notes = Feathernote.activeNotebook.notes();
        this._hasNotesList = new Feathernote.Views.NotesIndex({
          collection: notes
        });
        this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

_swapShowView: function(view) {
  this._currentShowView && this._currentShowView.remove();
  this._currentShowView = view;
  this.$noteShow.html(view.$el);
  view.render();
},

_swapListView: function(view) {
  this._currentListView && this._currentListView.remove();
  this._currentListView = view;
  this.$notesList.html(view.$el);
  view.render();
}

});
