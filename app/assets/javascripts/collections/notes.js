FeatherNote.Collections.Notes = Backbone.Collection.extend({

  url: "/api/notes",
  model: FeatherNote.Models.Note,

  getOrFetch: function(id){
    var note = FeatherNote.notes.get(id);
    if (note){
      note.fetch();
    } else {
      note = new FeatherNote.Models.Note({id: id});
      note.fetch({
        success: function(){
          FeatherNote.notes.add(note);
        }
      });
    }
    return note;
  }

});
