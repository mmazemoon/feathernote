FeatherNote.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$notesList = this.$rootEl.find(".notes-list");
    this.$noteShow = this.$rootEl.find(".note-show");
  },

  routes: {
    "": "showAll",
    "notes/all": "showAll",
    "notes/:id": "noteShow",
    "notebooks/:id": "notebookShow"
  },

  notebookShow: function(id) {
    var notebook = FeatherNote.notebooks.getOrFetch(id, function(){
      var noteId = notebook.notes().at(0).id;
      this.noteShow(noteId);
    }.bind(this));
    var notebookShow = new FeatherNote.Views.NotebookShow({ model: notebook });
    this.$notesList.html(notebookShow.render().$el);
  },

  noteShow: function(id) {
    var note = FeatherNote.notes.getOrFetch(id, function(){
      var notebook;
      if(note.collection.notebook){
        notebook = note.collection.notebook;
      } else {
        var dummyNotebook = new FeatherNote.Models.Notebook();
        dummyNotebook.notes().set(FeatherNote.notes.models);
        notebook = dummyNotebook;
      }
      var notebookShow = new FeatherNote.Views.NotebookShow({ model: notebook });
      this.$notesList.html(notebookShow.render().$el);
    }.bind(this));

    FeatherNote.notebooks.fetch({ success: function(){
      var noteShow = new FeatherNote.Views.NoteShow({
        model: note, collection: FeatherNote.notebooks });
        this.$noteShow.html(noteShow.render().$el);
      }.bind(this)});
  },

  showAll: function () {
      var dummyNotebook = new FeatherNote.Models.Notebook();
      FeatherNote.notes.fetch({
        success: function () {
          dummyNotebook.notes().set(FeatherNote.notes.models);
          var noteShow = new FeatherNote.Views.NoteShow({ model: FeatherNote.notes.at(0), collection: FeatherNote.notebooks });
          var notebookShow = new FeatherNote.Views.NotebookShow({ model: dummyNotebook });
          this.$noteShow.html(noteShow.render().$el);
          this.$notesList.html(notebookShow.render().$el);
        }.bind(this)});
  },

  _swapListView: function(){

  },

  _swapShowView: function(){

  }

});
