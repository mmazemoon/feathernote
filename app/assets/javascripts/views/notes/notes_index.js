FeatherNote.Views.NotesIndex = Backbone.View.extend({
  
  template: JST['notes/index'],

// options: all, id, collection, model
  initialize: function(options){
    this.listenTo(this.collection, "add remove sync change", this.render);
    this.all = options.all || false;
    this.id = options.id || null;
  },

  render: function (){
    var content;
    var fragment = "notes/";

    if(this.all){
      content = this.template({ notes: this.collection, all: true });
      if(this.id) {
        fragment = fragment.concat("all/" + this.id);
      } else {
        fragment = fragment.concat("all/" + this.collection.first().id);
      }
    } else {
      content = this.template({ notes: this.collection, all: false });
      fragment = fragment.concat(this.id);
    }

    Backbone.history.navigate(fragment);
    this.$el.html(content);
    return this;
  }

});

// when would it have a model
// when would it have an id
