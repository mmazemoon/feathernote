FeatherNote.Views.NotesIndex = Backbone.View.extend({

  template: JST['notes/index'],

// options: all, id, collection, model
  initialize: function(options){
    this.listenTo(this.collection, "add remove sync change", this.render);
    this.all = options.all || false;
    this.id = options.id || null;
  },

  render: function () {
    var content;
    var fragment = "notes";

    if(this.all){
      content = this.template({ notes: this.collection, all: true });
      if(this.id) {
        fragment.concat("/all/" + this.id);
      } else {
        fragment.concat("/all/" + this.collection.first().id);
      }
    } else {
      content = this.template({ notes: this.collection, all: false });
      fragment.concat(this.id);
    }

    Backbone.history.navigate(fragment);
    this.$el.html(content);
    return this;
  }

  //   // if it doesn't have a model, we give it one
  //   if (!this.model){
  //     if (this.id)
  //       this.model = this.collection.get(this.id);
  //     else {
  //       this.model = this.collection.at(0);
  //     }
  //     // all will always end up being with an id
  //     if (this.all) {
  //       Backbone.history.navigate("notes/all/" + this.model.id, {trigger: true});
  //     } else {
  //       Backbone.history.navigate("notes/" + this.model.id, {trigger: true});
  //     }
  //   }
  //   var content = this.template({
  //     notes: this.collection,
  //     all: this.all
  //   });
  //   this.$el.html(content);
  //   return this;
  // }

});

// when would it have a model
// when would it have an id
