window.FeatherNote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    FeatherNote.notes = new FeatherNote.Collections.notes();
    FeatherNote.notebooks = new FeatherNote.Collections.notebooks();
    FeatherNote.notes.fetch( {reset: true} );
    FeatherNote.notebooks.fetch( {reset: true} );

    new FeatherNote.Routers.router( {$rootEl: $("main")} );
    Backbone.history.start();
  }
};

$(document).ready(function(){
  FeatherNote.initialize();
});
