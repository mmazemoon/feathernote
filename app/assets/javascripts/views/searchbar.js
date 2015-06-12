FeatherNote.Views.Searchbar = Backbone.View.extend({

  template: JST['static_pages/searchbar'],

  events: {
    "submit #add-note": "createNote"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createNote: function(event){
    event.preventDefault();
  }

});
