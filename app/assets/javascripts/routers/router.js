FeatherNote.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find(".notes-list");
    this.$noteShow = this.$rootEl.find(".note-show");
  },

  routes: {
    "": "welcomeHome",
    "notes/:id": "noteShow",
    "notebooks/:id": "notebookShow"
  },

  welcomeHome: function () {
    var notesList = new FeatherNote.Views.NotesIndex({collection: FeatherNote.notes });
    this.$notesList.html(notesList.render().$el);
    this.noteShow();
  },

  noteShow: function(id){
    var note;
    if (id){
      note = FeatherNote.notes.getOrFetch(id);
    }
    var noteShow = new FeatherNote.Views.NoteShow({ model: note, collection: FeatherNote.notebooks });
    this.$noteShow.html(noteShow.render().$el);
  },

  notebookShow: function(id){
    var notebook = FeatherNote.notebooks.getOrFetch(id);
    FeatherNote.activeNotebook = notebook;
    var notebookShow = new FeatherNote.Views.NotebookShow();
    this.$notesList.html(notebookShow.render().$el);
  },

  _swapListView: function(){

  },

  _swapShowView: function(){

  }

});
