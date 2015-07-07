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
          collection: collection,
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
        Feathernote.notes.set(model.notes().models);

        this._hasNotesList = new Feathernote.Views.NotesIndex({
          notebook: model,
          collection: Feathernote.notes,
          id: Feathernote.notes.first().id });
          this.noteShow(Feathernote.notes.first().id);
          this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

  noteShow: function(id){
    var note = Feathernote.notes.getOrFetch(id,
      function(model){
        var noteShow = new Feathernote.Views.NoteShow({ model: model, collection: Feathernote.notebooks });
        this._swapShowView(noteShow);
        if(!this._hasNotesList){
          this.siblingNotes(model.notebook().id);
        }
      }.bind(this));
  },

  searchResults: function (query) {
    var re = new RegExp(query, "i");
    var results = Feathernote.notes.filter(
      function(note){
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
        Feathernote.notes.set(model.notes().models);
        this._hasNotesList = new Feathernote.Views.NotesIndex({
          collection: Feathernote.notes
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
