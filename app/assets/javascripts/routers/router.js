FeatherNote.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find("#notes-list");
    this.$noteShow = this.$rootEl.find("#note-show");
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
    if (!id){
      note = FeatherNote.notes.at(0);
    } else {
      note = FeatherNote.notes.getOrFetch(id);
    }
    var noteShow = new FeatherNote.Views.NoteShow({ model: note });
    this.$noteShow.html(noteShow.render().$el);
  },

  notebookShow: function(id){

  },

  _swapListView: function(){

  },

  _swapShowView: function(){

  }

});
