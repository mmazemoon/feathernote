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

    var $searchbar = $("#searchbar");
    var $navbar = $("#navbar");
    new FeatherNote.Routers.Router( {$rootEl: $("#content")} );

    // var navbarView = new FeatherNote.Views.NavbarView();
    // var searchbarView = new FeatherNote.Views.SearchbarView();
    // var sidebarView = new FeatherNote.Views.SidebarView();
    // $navbar.html(navbarView.render().$el);
    // $searchbar.html(searchbarView.render().$el);
    // $sidebar.html(sidebarView.render().$el);

    Backbone.history.start();
  }
};
