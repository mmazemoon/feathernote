FeatherNote.Collections.Notes = Backbone.Collection.extend({

  url: "/api/notes",
  model: FeatherNote.Models.Note,

  initialize: function(models, options){
    if(options && options.notebook){
      this.notebook = options.notebook;
    }
  },

  getOrFetch: function(id, callback){
    var note = FeatherNote.notes.get(id);
    if (note){
      note.fetch({
        success: function(model, response, options){
          if(callback){ callback(model, response, options); }
        }
      });
    } else {
      note = new FeatherNote.Models.Note({ id: id });
      note.fetch({
        success: function(model, response, options){
          FeatherNote.notes.add(note);
          if(callback){ callback(model, response, options); }
        }
      });
    }
    return note;
  }

});
