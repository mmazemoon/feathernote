FeatherNote.Models.Note = Backbone.Model.extend({

  urlRoot: "/api/notes",

  parse: function(response){
    if(response.notebook){
      this.notebook().set(response.notebook);
      delete response.notebook;
    }
    return response;
  },

  notebook: function(){
    if(!this._notebook){
      this._notebook = new FeatherNote.Models.Notebook();
    }
    return this._notebook;
  }

});
