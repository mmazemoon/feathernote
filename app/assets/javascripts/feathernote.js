window.Feathernote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    Feathernote.currentUser = options.currentUser;
    Feathernote.notes = new Feathernote.Collections.Notes({
      success: function(){ Feathernote.activeNote = Feathernote.notes.first();}.bind(this)
    });
    Feathernote.notebooks = new Feathernote.Collections.Notebooks({
      success: function(){Feathernote.activeNotebook = Feathernote.notebooks.first();}.bind(this)
    });

    new Feathernote.Routers.Router( {$rootEl: $(".content")} );

    var $navbar = $("#navbar");
    var $searchbar = $("#searchbar");
    var $sidebar = $(".sidebar");

    Feathernote.notebooks.fetch({
      success: function (){
        var notebooksIndex = new Feathernote.Views.NotebooksIndex({ collection: Feathernote.notebooks });
        $sidebar.html(notebooksIndex.render().$el);
      }, reset: true });

    var navbar = new Feathernote.Views.Navbar();
    var searchbar = new Feathernote.Views.Searchbar();
    $navbar.html(navbar.render().$el);
    $searchbar.html(searchbar.render().$el);

    Backbone.history.start();
  }
};
