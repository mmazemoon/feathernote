FeatherNote.Views.Searchbar = Backbone.View.extend({

  template: JST['static_pages/searchbar'],

  events: {
    "click .create-note": "createNote"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createNote: function(event){
    var note = new FeatherNote.Models.Note({
      title: "Untitled",
      notebook_id: FeatherNote.currentNotebook.id
    });
    note.save({}, {
      success: function(){
        Backbone.history.navigate(("notes/" + note.id), { trigger: true });
      }
    });
  }
});
