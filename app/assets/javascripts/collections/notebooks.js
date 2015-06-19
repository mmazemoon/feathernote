Feathernote.Collections.Notebooks = Backbone.Collection.extend({
  url: "api/notebooks",
  model: Feathernote.Models.Notebook,

// we could also do options.success if we had given options;
  getOrFetch: function(id, callback){
    var notebook = this.get(id);
    if(notebook){
      notebook.fetch({
        success: function(model, response, options){
          if(callback){
            callback(model, response, options);
          }
        }
      });
    } else {
      notebook = new Feathernote.Models.Notebook({id: id});
      notebook.fetch({
        success: function(model, response, options){
          Feathernote.notebooks.add(notebook);
          if(callback){
            callback(model, response, options);
          }
        }
      });
    }
    return notebook;
  }

});
