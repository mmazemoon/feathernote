window.FeatherNote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    FeatherNote.currentUser = options.currentUser;
    FeatherNote.notes = new FeatherNote.Collections.Notes({
      success: function(){ FeatherNote.activeNote = FeatherNote.notes.first();}.bind(this)
    });
    FeatherNote.notebooks = new FeatherNote.Collections.Notebooks({
      success: function(){FeatherNote.activeNotebook = FeatherNote.notebooks.first();}.bind(this)
    });

    new FeatherNote.Routers.Router( {$rootEl: $(".content")} );

    var $navbar = $("#navbar");
    var $searchbar = $("#searchbar");
    var $sidebar = $(".sidebar");

    FeatherNote.notebooks.fetch({
      success: function (){
        var notebooksIndex = new FeatherNote.Views.NotebooksIndex({ collection: FeatherNote.notebooks });
        $sidebar.html(notebooksIndex.render().$el);
      }, reset: true });

    var navbar = new FeatherNote.Views.Navbar();
    var searchbar = new FeatherNote.Views.Searchbar();
    $navbar.html(navbar.render().$el);
    $searchbar.html(searchbar.render().$el);

    Backbone.history.start();
  }
};
