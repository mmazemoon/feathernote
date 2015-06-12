window.FeatherNote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    FeatherNote.currentUser = options.currentUser;

    FeatherNote.notes = new FeatherNote.Collections.Notes();
    FeatherNote.notebooks = new FeatherNote.Collections.Notebooks();
    FeatherNote.notes.fetch( {reset: true} );
    FeatherNote.notebooks.fetch( {reset: true} );

    var $navbar = $("#navbar");
    var $searchbar = $("#searchbar");
    var $sidebar = $("#sidebar");
    new FeatherNote.Routers.Router( {$rootEl: $(".content")} );

    var navbar = new FeatherNote.Views.Navbar();
    var searchbar = new FeatherNote.Views.Searchbar();
    // var sidebarView = new FeatherNote.Views.SidebarView();
    $navbar.html(navbar.render().$el);
    $searchbar.html(searchbar.render().$el);
    // $sidebar.html(sidebarView.render().$el);

    Backbone.history.start();
  }
};
