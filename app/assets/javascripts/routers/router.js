FeatherNote.Routers.Router = Backbone.Router.extend({

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
    "notebooks/:id": "notebookShow"
  },

  notebookShow: function(id) {
    var notebook = FeatherNote.notebooks.getOrFetch(id,
      function(model){
        FeatherNote.activeNotebook = model;
        var notes = model.notes();
        this._hasNotesList = new FeatherNote.Views.NotesIndex({
          collection: notes,
          id: notes.first().id });
          this.noteShow(notes.first().id);
          this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

  noteShow: function(id){
    var note = FeatherNote.notes.getOrFetch(id,
      function(model){
        FeatherNote.activeNote = model;
        var noteShow = new FeatherNote.Views.NoteShow({ model: model});
        this._swapShowView(noteShow);
        if(!this._hasNotesList){
          this.siblingNotes(note.notebook().id);
        }
      }.bind(this));
  },

  siblingNotes: function(note, notebookId){
    // var notebook = FeatherNote.notebooks.getOrFetch(
    //   notebookId,
    //   function(model, response, options){
    //     var notes = notebook.notes();
    //     this._hasNotesList = new FeatherNote.Views.NotesIndex({
    //       collection: notes,
    //       model: note
    //     });
    //     this._swapListView(this._hasNotesList);
    //   }.bind(this)
    // );
  },

  allShow: function (id) {
  FeatherNote.notes.fetch({
      success: function(collection){
        if(collection.first()){
          var noteId = id ? id : collection.first().id;
          this._hasNotesList = new FeatherNote.Views.NotesIndex({
          collection: collection,
          all: true,
          id: noteId });
          this._swapListView(this._hasNotesList);
          this.noteShow(noteId);
      }}.bind(this),
      reset: true
    });
  },

_swapShowView: function(view) {
  this._currentShowView && this._currentShowView.remove();
  this._currentShowView = view;
  this.$noteShow.html(view.render().$el);
},

_swapListView: function(view) {
  this._currentListView && this._currentListView.remove();
  this._currentListView = view;
  this.$notesList.html(view.render().$el);
}

});
