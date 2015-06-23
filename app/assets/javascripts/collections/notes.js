Feathernote.Collections.Notes = Backbone.Collection.extend({

  url: "/api/notes",
  model: Feathernote.Models.Note,

  initialize: function(models, options){
    if(options && options.notebook){
      this.notebook = options.notebook;
    }
  },

  getOrFetch: function(id, callback){
    var note = Feathernote.notes.get(id);
    if (note){
      note.fetch({
        success: function(model, response, options){
          if(callback){ callback(model, response, options); }
        }, reset: true
      });
    } else {
      note = new Feathernote.Models.Note({ id: id });
      note.fetch({
        success: function(model, response, options){
          Feathernote.notes.add(note);
          if(callback){ callback(model, response, options); }
        }, reset: true
      });
    }
    return note;
  }

});
