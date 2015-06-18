FeatherNote.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find(".notes-list");
    this.$noteShow = this.$rootEl.find(".note-show");
  },

  routes: {
    "": "showAll",
    "notes/all": 'showAll',
    "notes/all/:id": "showAll",
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
          this._swapListView(this._hasNotesList);
      }.bind(this)
    );
  },

  noteShow: function(id){
    var note = FeatherNote.notes.getOrFetch(id,
      function(model){
        var noteShow = new FeatherNote.Views.NoteShow({model: model});
        this._swapShowView(noteShow);
        if(!this._hasNotesList){
          this.siblingNotes(note.notebook().id);
        }
      }.bind(this));
  },

    // var note;
    // if (all) {
    //   note = FeatherNote.notes.getOrFetch(id);
    //   var noteShow = new FeatherNote.Views.NoteShow({
    //     model: note,
    //     collection: FeatherNote.notebooks
    //   });
    //   this._swapShowView(noteShow);
    // } else {
    //   note = FeatherNote.notes.getOrFetch(
    //     id,
    //     function (model, response, options) {
    //       if (!this._hasNotesList){
    //         this.siblingNotes(note, note.get('notebook_id'));
    //       }
    //       var noteShow = new FeatherNote.Views.NoteShow({
    //         model: note,
    //         collection: FeatherNote.notebooks
    //       });
    //       this._swapShowView(noteShow);
    //     }.bind(this)
    //   );
    // }

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

  showAll: function (id) {
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

    // this._hasNotesList = true;
    // FeatherNote.notes.fetch({
    //   success: function(){
    //     var notesIndex= new FeatherNote.Views.NotesIndex({
    //       collection: FeatherNote.notes,
    //       all: true,
    //       id: id  // could be zero;
    //     });
    //     this._swapListView(notesIndex);
    //   }.bind(this),
    //   reset: true
    // });
    // if (id){
    //   this.noteShow(id, true); // if id, call note show with id and zero
    // }

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
