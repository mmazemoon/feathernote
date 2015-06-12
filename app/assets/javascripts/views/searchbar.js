FeatherNote.Views.Searchbar = Backbone.View.extend({

  template: JST['static_pages/searchbar'],

  events: {
    "click #add-note": "createNote"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createNote: function(event){
    var note = new FeatherNote.Models.Note({
      title: "Untitled",
      notebook_id: 1,
      author_id: 1
    });

  }

});
