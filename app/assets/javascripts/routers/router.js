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
    // var notesList = new FeatherNote.Views.NotesIndex({collection: FeatherNote.notes });
    // var model = FeatherNote.notes.get(1);
    // var noteShow = new FeatherNote.Views.NoteShow({ model: FeatherNote.notes.get(1) });
    // this.$notesList.html(notesList.render().$el);
    // this.$noteShow.html(noteShow.render().$el);
    this.showNote(6);
  },

  showNote: function(id){
    // should change notes index
    // and notes index items too
    var note = FeatherNote.notes.getOrFetch(id);
    var showNote = new FeatherNote.Views.NoteShow({ model: note });
    this.$noteShow.html(showNote.render().$el);
  },

  notebookShow: function(){

  },

  _swapListView: function(){

  },

  _swapShowView: function(){

  }

});
