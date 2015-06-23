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
    console.log("allShow route")
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
        this._hasNotesList = new Feathernote.Views.NotesIndex({
          collection: Feathernote.activeNotebook.notes(),
          id: notes.first().id });
          this.noteShow(notes.first().id);
          this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

  noteShow: function(id){
    console.log("noteShow route");
    var note = Feathernote.notes.getOrFetch(id,
      function(model){
        Feathernote.activeNote = model;
        Feathernote.activeNotebook = Feathernote.activeNote.notebook();
        var noteShow = new Feathernote.Views.NoteShow({ model: Feathernote.activeNote});
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
    console.log("siblingNotes route");
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
  console.log("swapShow helper");
  this._currentShowView && this._currentShowView.remove();
  this._currentShowView = view;
  this.$noteShow.html(view.$el);
  view.render();
  },

_swapListView: function(view) {
  console.log("swapList helper");
  this._currentListView && this._currentListView.remove();
  this._currentListView = view;
  this.$notesList.html(view.$el);
  view.render();
}

});
