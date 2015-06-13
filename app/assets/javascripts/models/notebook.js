FeatherNote.Models.Notebook = Backbone.Model.extend({

  urlRoot: "api/notebooks",

  parse: function(payload){
    return payload;
  },

  notes: function(){
  }

});
