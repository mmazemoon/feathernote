FeatherNote.Models.Notebook = Backbone.Model.extend({

  urlRoot: "api/notebooks",

  parse: function(response){
    if (response.notes){
      this.notes().set(response.notes);
      delete response.notes;
    }
    return response;
  },

  notes: function(){
    if(!this._notes){
      this._notes = new FeatherNote.Collections.Notes();
    }
    return this._notes;
  }

});
