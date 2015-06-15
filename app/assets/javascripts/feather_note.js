window.FeatherNote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    FeatherNote.currentUser = options.currentUser;
    FeatherNote.notes = new FeatherNote.Collections.Notes();
    FeatherNote.notebooks = new FeatherNote.Collections.Notebooks();

    FeatherNote.notes.fetch({ reset: true });
    FeatherNote.notebooks.fetch({
      success: function(collection, response, options){
        FeatherNote.activeNotebook = FeatherNote.notebooks.at(0);
      }, reset: true
    });

    var $navbar = $("#navbar");
    var $searchbar = $(".searchbar");
    var $sidebar = $(".sidebar");
    new FeatherNote.Routers.Router( {$rootEl: $(".content")} );

    var navbar = new FeatherNote.Views.Navbar();
    var searchbar = new FeatherNote.Views.Searchbar();
    var notebooksIndex = new FeatherNote.Views.NotebooksIndex();
    $navbar.html(navbar.render().$el);
    $searchbar.html(searchbar.render().$el);
    $sidebar.html(notebooksIndex.render().$el);

    Backbone.history.start();
  }
};
