FeatherNote.Collections.Notebooks = Backbone.Collection.extend({
  url: "api/notebooks",
  model: FeatherNote.Models.Notebook,

  getOrFetch: function(id){
    var notebook = this.get(id);
    if(notebook){
      notebook.fetch();
    } else {
      notebook = new FeatherNote.Models.Notebook({id: id});
      notebook.fetch({
        success: function(){
          FeatherNote.notebooks.add(notebook);
        }
      });
    }
    return notebook;
  }

});
