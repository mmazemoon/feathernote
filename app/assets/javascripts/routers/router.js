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
    console.log(FeatherNote.notes);
    var noteShow = new FeatherNote.Views.NoteShow({collection: FeatherNote.notes });
    this.$notesList.html(notesList.render().$el);
    this.$noteShow.html(noteShow.render().$el);
  },

  noteShow: function(){
    // should change notes index
    // and notes index items too
  },

  notebookShow: function(){

  },

  _swapListView: function(){

  },

  _swapShowView: function(){

  }

});
