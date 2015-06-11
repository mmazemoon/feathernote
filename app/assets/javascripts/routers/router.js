FeatherNote.Routers.Notes = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find("#notes-list");
    this.$noteShow = this.$rootEl.find("#note-show");
  },

  routes: {
    "": "landingNote",
    "notes/:id": "noteShow",
    "notebooks/:id": "notebookShow"
  },

  landingNote: function () {

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
