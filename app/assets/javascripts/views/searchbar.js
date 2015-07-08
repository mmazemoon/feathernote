Feathernote.Views.Searchbar = Backbone.View.extend({
  template: JST['static_pages/searchbar'],

  events: {
    "click .create-note": "createNote",
    "keyup .notes-search": "handleSearchInput"
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createNote: function(event){
    var note = new Feathernote.Models.Note({
      title: "Untitled",
      notebook_id: Feathernote.notebooks.first().id
    });
    note.save({}, {
      success: function(){
        Backbone.history.navigate("notes/" + note.id, { trigger: true });
      }
    });
  },

  handleSearchInput: function(event){
    var query = $(event.currentTarget).val();
    Backbone.history.navigate("search/" + query, { trigger: true });

    // bb route for search
    // debounce function or entail call to debounce function
    // url should state search query.
    // in order to bookmark urls.
    // Feathernote.notes.fetch({ data: { query: query } });
  }

});
